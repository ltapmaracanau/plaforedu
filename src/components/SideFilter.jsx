import { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
  notification,
} from "antd";
import DebounceSelect from "./fields/DebounceSelect";
const { useBreakpoint } = Grid;

export default function SideFilter({ debounceTimeout = 800 }) {
  const screens = useBreakpoint();

  const setTipoVisualizacao = useStoreActions(
    (actions) => actions.adm.setTipoVisualizacao
  );
  const getCompetenciesAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getInstitutionsAction = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getSubthemesAction = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const [filtroCompleto, setFiltroCompleto] = useState(
    !filter.tipoClassificacao
  );

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const tipoVisualizacao = useStoreState((state) => state.adm.tipoVisualizacao);

  const getCompetencies = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getCompetenciesAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.name,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar competências",
          description: error.message,
        });
      }
    },
    [getCompetenciesAction]
  );

  const getInstitutions = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getInstitutionsAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.abbreviation,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar instituições",
          description: error.message,
        });
      }
    },
    [getInstitutionsAction]
  );

  const getSubthemes = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getSubthemesAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.name,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar subtemas",
          description: error.message,
        });
      }
    },
    [getSubthemesAction]
  );

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
    if (allValuesFields.tipoClassificacao) {
      allValuesFields.cargaHoraria = filterDefault.cargaHoraria;
      allValuesFields.temas = [];
      allValuesFields.subtemas = [];
      allValuesFields.instCertificadora = [];
    }
    setFilter({ ...filter, ...allValuesFields });
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
      setFilter({ ...filter, ...allValuesFields });
    };

    return debounce(onSubmitDebounceFunction, debounceTimeout);
  }, [debounceTimeout, setFilter, filter]);

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
              <Form.Item style={{ marginBottom: "0" }} label={"Visualizar em:"}>
                <Switch
                  defaultChecked={tipoVisualizacao}
                  checkedChildren="Lista"
                  unCheckedChildren="Grafo"
                  onChange={(value) => {
                    setTipoVisualizacao(value);
                  }}
                />
              </Form.Item>
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
                  <DebounceSelect
                    mode="multiple"
                    placeholder="Competências"
                    style={{
                      width: "100%",
                    }}
                    fetchOptions={getCompetencies}
                    {...field}
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                  />
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
                      <DebounceSelect
                        mode="multiple"
                        placeholder="Subtemas"
                        style={{
                          width: "100%",
                        }}
                        fetchOptions={getSubthemes}
                        {...field}
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmit();
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
                  name="cargaHoraria"
                  render={({ field }) => (
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      label={"Carga Horária:"}
                    >
                      <Slider
                        range
                        marks={{
                          0: "0h",
                          300: "300h",
                        }}
                        step={10}
                        max={300}
                        {...field}
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
                      <DebounceSelect
                        mode="multiple"
                        placeholder="Instituições"
                        style={{
                          width: "100%",
                        }}
                        fetchOptions={getInstitutions}
                        {...field}
                        onChange={(value) => {
                          field.onChange(value);
                          onSubmit();
                        }}
                      />
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
