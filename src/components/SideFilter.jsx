import React, { useEffect, useRef, useState, useMemo } from "react";
import { debounce } from "lodash";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useForm, FormProvider, Controller } from "react-hook-form";

import { SearchOutlined } from "@ant-design/icons";

import {
  Col,
  Switch,
  Select,
  Button,
  Slider,
  Input,
  Form,
  Card,
  Grid,
} from "antd";
const { useBreakpoint } = Grid;

export default function SideFilter({ debounceTimeout = 800 }) {
  const screens = useBreakpoint();

  const subtemas = useStoreState((state) => state.themes.subthemes);
  const competencias = useStoreState(
    (state) => state.competencies.competencias
  );
  const instituicoes = useStoreState(
    (state) => state.institutions.instituicoes
  );
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const [filtroCompleto, setFiltroCompleto] = useState(false);

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const setTipoVisualizacao = useStoreActions(
    (actions) => actions.adm.setTipoVisualizacao
  );
  const tipoVisualizacao = useStoreState((state) => state.adm.tipoVisualizacao);

  const register = useRef(
    useForm({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: filter,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      shouldUnregister: false,
      shouldUseNativeValidation: false,
      delayError: undefined,
    })
  );

  const onSubmit = () => {
    let allValuesFields = register.current.getValues();
    delete allValuesFields.tipoVisualizacao;
    if (allValuesFields.tipoClassificacao) {
      allValuesFields.cargaHoraria = filterDefault.cargaHoraria;
      allValuesFields.temas = [];
      allValuesFields.subtemas = [];
      allValuesFields.instCertificadora = [];
    }
    setFilter(allValuesFields);
  };

  const onReset = () => {
    setFiltroCompleto(false);
    register.current.reset(filterDefault);
    onSubmit(filterDefault);
  };

  useEffect(() => {
    register.current.setValue("itinerario", filter.itinerario);
  }, [filter.itinerario]);

  const onSubmitDebounce = useMemo(() => {
    const onSubmitDebounceFunction = () => {
      let allValuesFields = register.current.getValues();
      delete allValuesFields.tipoVisualizacao;
      setFilter(allValuesFields);
    };

    return debounce(onSubmitDebounceFunction, debounceTimeout);
  }, [debounceTimeout, setFilter]);

  return (
    <Col style={{ padding: "8px 16px", overflowY: "scroll", height: "100%" }}>
      <FormProvider {...register.current}>
        <Form
          layout="vertical"
          onFinish={register.current.handleSubmit(onSubmit)}
        >
          <Card
            style={{ borderRadius: "21px", marginBottom: "5px" }}
            styles={{
              body: {
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
              },
            }}
          >
            <Controller
              control={register.current.control}
              name="query"
              render={({ field }) => {
                return (
                  <Form.Item style={{ marginBottom: "0" }}>
                    <Input
                      allowClear={true}
                      {...field}
                      prefix={<SearchOutlined />}
                      placeholder="Buscar"
                      onChange={(value) => {
                        field.onChange(value);
                        onSubmitDebounce();
                      }}
                      onPressEnter={onSubmitDebounce}
                    />
                  </Form.Item>
                );
              }}
            />
          </Card>
          {screens.lg && (
            <Card
              style={{ borderRadius: "21px", marginBottom: "5px" }}
              styles={{
                body: {
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px",
                },
              }}
            >
              <Controller
                control={register.current.control}
                name="tipoVisualizacao"
                render={() => {
                  return (
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      label={"Visualizar em:"}
                    >
                      <Switch
                        defaultChecked={tipoVisualizacao}
                        checkedChildren="Lista"
                        unCheckedChildren="Grafo"
                        onChange={(value) => {
                          setTipoVisualizacao(value);
                        }}
                      />
                    </Form.Item>
                  );
                }}
              />
            </Card>
          )}
          <Card
            style={{ borderRadius: "21px", marginBottom: "5px" }}
            styles={{
              body: {
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
              },
            }}
          >
            <Controller
              control={register.current.control}
              name="tipoClassificacao"
              render={({ field }) => {
                return (
                  <Form.Item
                    style={{ marginBottom: "0" }}
                    label={"Classificar por:"}
                  >
                    <Switch
                      checkedChildren="Trilhas"
                      unCheckedChildren="Cursos"
                      checked={field.value}
                      onChange={(value) => {
                        setFiltroCompleto(!value);
                        field.onChange(value);
                        onSubmit();
                      }}
                    />
                  </Form.Item>
                );
              }}
            />
          </Card>
          <Card
            style={{ borderRadius: "21px", marginBottom: "5px" }}
            styles={{
              body: {
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
              },
            }}
          >
            <Controller
              control={register.current.control}
              name="itinerario"
              render={({ field }) => (
                <Form.Item style={{ marginBottom: "0" }} label={"Itinerário:"}>
                  <Select
                    {...field}
                    placeholder={"Itinerário"}
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    style={{ width: "100%" }}
                  >
                    <Select.Option key={0} value={0}>
                      Todos os Itinerários
                    </Select.Option>
                    {itinerarios.map((itinerario) => (
                      <Select.Option key={itinerario.id} value={itinerario.id}>
                        {itinerario.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
            />
          </Card>
          <Card
            style={{ borderRadius: "21px", marginBottom: "5px" }}
            styles={{
              body: {
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
              },
            }}
          >
            <Controller
              control={register.current.control}
              name="competencies"
              render={({ field }) => (
                <Form.Item
                  style={{ marginBottom: "0" }}
                  label={"Competências:"}
                >
                  <Select
                    {...field}
                    mode="multiple"
                    placeholder={"Todas as competências"}
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    style={{ width: "100%" }}
                    filterOption={(input, option) => {
                      return (
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                  >
                    {competencias.map((competencia) => (
                      <Select.Option
                        key={competencia.id}
                        value={competencia.id}
                      >
                        {competencia.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
            />
          </Card>
          {filtroCompleto && (
            <>
              <Card
                style={{ borderRadius: "21px", marginBottom: "5px" }}
                styles={{
                  body: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                  },
                }}
              >
                <Controller
                  control={register.current.control}
                  name="subtemas"
                  render={({ field }) => (
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      label={"Subtemas:"}
                    >
                      <Select
                        {...field}
                        placeholder={"Todos os Subtemas"}
                        mode="multiple"
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmit();
                        }}
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        style={{ width: "100%" }}
                      >
                        {subtemas.map((subtema) => (
                          <Select.Option key={subtema.id} value={subtema.id}>
                            {subtema.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                />
              </Card>
              <Card
                style={{ borderRadius: "21px", marginBottom: "5px" }}
                styles={{
                  body: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                  },
                }}
              >
                <Controller
                  control={register.current.control}
                  name="cargaHoraria"
                  render={({ field }) => (
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      label={"Carga Horária:"}
                    >
                      <Slider
                        {...field}
                        range
                        marks={{
                          0: "0h",
                          300: "300h",
                        }}
                        step={10}
                        max={300}
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmitDebounce();
                        }}
                      />
                    </Form.Item>
                  )}
                />
              </Card>
              <Card
                style={{ borderRadius: "21px", marginBottom: "5px" }}
                styles={{
                  body: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                  },
                }}
              >
                <Controller
                  control={register.current.control}
                  name="institutions"
                  render={({ field }) => (
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      label={"Instituição Certificadora:"}
                    >
                      <Select
                        {...field}
                        placeholder={"Todas as Instituições"}
                        mode="multiple"
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmit();
                        }}
                        style={{ width: "100%" }}
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {instituicoes.map((inst) => (
                          <Select.Option key={inst.id} value={inst.id}>
                            {inst.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                />
              </Card>
            </>
          )}
          <Card
            style={{
              borderColor: "transparent",
              backgroundColor: "transparent",
            }}
            styles={{
              body: {
                display: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            <Button
              type="primary"
              onClick={() => {
                onReset();
              }}
            >
              Resetar Filtro
            </Button>
          </Card>
        </Form>
      </FormProvider>
    </Col>
  );
}
