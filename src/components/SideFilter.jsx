import React, { useEffect, useRef, useState, useMemo } from 'react';
import { debounce } from 'lodash';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useForm, FormProvider, Controller } from 'react-hook-form';

import { SearchOutlined } from '@ant-design/icons';
import closeIcon from '../assets/icon/close.svg';

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
  Radio,
  ConfigProvider,
} from 'antd';
const { useBreakpoint } = Grid;

import './sideFilter.css';

export default function SideFilter({ debounceTimeout = 800 }) {
  const screens = useBreakpoint();

  const subtemas = useStoreState((state) => state.themes.subthemes);
  const competencias = useStoreState(
    (state) => state.competencies.competencias,
  );
  const instituicoes = useStoreState(
    (state) => state.institutions.instituicoes,
  );
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const [filtroCompleto, setFiltroCompleto] = useState(false);

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const setTipoVisualizacao = useStoreActions(
    (actions) => actions.adm.setTipoVisualizacao,
  );
  const tipoVisualizacao = useStoreState((state) => state.adm.tipoVisualizacao);

  const register = useRef(
    useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: filter,
      context: undefined,
      criteriaMode: 'firstError',
      shouldFocusError: true,
      shouldUnregister: false,
      shouldUseNativeValidation: false,
      delayError: undefined,
    }),
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
    register.current.setValue('itinerario', filter.itinerario);
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
    <ConfigProvider
      theme={{
        token: { colorPrimary: '#2F4C84', colorText: '#4B4B4B' },
        components: {
          Radio: {
            colorText: '#A8A8A8',
            fontWeight: 'bold',
          },
        },
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          minWidth: '100%',
          background: '#FFF',
          borderRadius: '0 30px 30px 0',
          marginBottom: '32px',
          marginLeft: '0px',
          boxShadow:
            '0px 20px 30px 0px rgba(44, 86, 162, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.20)',
        }}
      >
        <div className="headerFilter">
          <h2 style={{ color: '#FFF' }} className="subTitulo">
            FILTROS
          </h2>
          {!screens.md && (
            <a href="">
              <img src={closeIcon} alt="Fechar filtros" />
            </a>
          )}
        </div>

        <FormProvider {...register.current}>
          <Form
            style={{ padding: '8px 20px' }}
            layout="vertical"
            onFinish={register.current.handleSubmit(onSubmit)}
          >
            <Controller
              control={register.current.control}
              name="query"
              render={({ field }) => {
                return (
                  <Form.Item style={{ margin: '20px 5px' }}>
                    <Input
                      allowClear={true}
                      {...field}
                      suffix={<SearchOutlined />}
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

            {screens.lg && (
              <Controller
                control={register.current.control}
                name="tipoVisualizacao"
                render={() => {
                  return (
                    <Form.Item
                      className="texto"
                      style={{ marginBottom: '20px', fontWeight: 'bold' }}
                      label={'Visualizar em:'}
                    >
                      <Radio.Group
                        defaultValue={tipoVisualizacao}
                        buttonStyle="solid"
                        style={{
                          textTransform: 'uppercase',
                          borderColor: '#FFF',
                        }}
                        onChange={(value) => {
                          setTipoVisualizacao(value);
                        }}
                      >
                        <Radio.Button value="Lista">Lista</Radio.Button>
                        <Radio.Button value="Grafo">Grafo</Radio.Button>
                      </Radio.Group>
                      {/* <Switch
                      defaultChecked={tipoVisualizacao}
                      checkedChildren="Lista"
                      unCheckedChildren="Grafo"
                      onChange={(value) => {
                        setTipoVisualizacao(value);
                      }}
                    /> */}
                    </Form.Item>
                  );
                }}
              />
            )}

            <Controller
              control={register.current.control}
              name="tipoClassificacao"
              render={({ field }) => {
                return (
                  <Form.Item
                    style={{ marginBottom: '20px', fontWeight: 'bold' }}
                    className="texto"
                    label={'Classificar por:'}
                  >
                    <Radio.Group
                      defaultValue={tipoVisualizacao}
                      buttonStyle="solid"
                      onChange={(value) => {
                        setTipoVisualizacao(value);
                      }}
                    >
                      <Radio.Button value="Trilhas">TRILHAS</Radio.Button>
                      <Radio.Button value="Cursos">CURSOS</Radio.Button>
                    </Radio.Group>
                    {/* <Switch
                    checkedChildren="Trilhas"
                    unCheckedChildren="Cursos"
                    checked={field.value}
                    onChange={(value) => {
                      setFiltroCompleto(!value);
                      field.onChange(value);
                      onSubmit();
                    }}
                  /> */}
                  </Form.Item>
                );
              }}
            />
            <Controller
              control={register.current.control}
              name="itinerario"
              render={({ field }) => (
                <Form.Item
                  style={{ marginBottom: '20px' }}
                  label={'Itinerário:'}
                >
                  <Select
                    {...field}
                    placeholder={'Itinerário'}
                    showArrow
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    style={{ width: '100%' }}
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

            <Controller
              control={register.current.control}
              name="competencies"
              render={({ field }) => (
                <Form.Item
                  style={{ marginBottom: '0' }}
                  label={'Competências:'}
                >
                  <Select
                    {...field}
                    mode="multiple"
                    placeholder={'Todas as competências'}
                    showArrow
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    style={{ width: '100%' }}
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
            {filtroCompleto && (
              <>
                <Card
                  style={{ borderRadius: '21px', marginBottom: '5px' }}
                  bodyStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                  }}
                >
                  <Controller
                    control={register.current.control}
                    name="subtemas"
                    render={({ field }) => (
                      <Form.Item
                        style={{ marginBottom: '20px' }}
                        label={'Subtemas:'}
                      >
                        <Select
                          {...field}
                          placeholder={'Todos os Subtemas'}
                          mode="multiple"
                          showArrow
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
                          style={{ width: '100%' }}
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
                  style={{ borderRadius: '21px', marginBottom: '5px' }}
                  bodyStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                  }}
                >
                  <Controller
                    control={register.current.control}
                    name="cargaHoraria"
                    render={({ field }) => (
                      <Form.Item
                        style={{ marginBottom: '20px' }}
                        label={'Carga Horária:'}
                      >
                        <Slider
                          {...field}
                          range
                          marks={{
                            0: '0h',
                            300: '300h',
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
                  style={{ borderRadius: '21px', marginBottom: '5px' }}
                  bodyStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                  }}
                >
                  <Controller
                    control={register.current.control}
                    name="institutions"
                    render={({ field }) => (
                      <Form.Item
                        style={{ marginBottom: '0' }}
                        label={'Instituição Certificadora:'}
                      >
                        <Select
                          {...field}
                          placeholder={'Todas as Instituições'}
                          mode="multiple"
                          showArrow
                          onChange={(value) => {
                            field.onChange(value);
                            onSubmit();
                          }}
                          style={{ width: '100%' }}
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
                borderColor: 'transparent',
                backgroundColor: 'transparent',
              }}
              bodyStyle={{ display: 'flex', justifyContent: 'space-evenly' }}
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
      </div>
    </ConfigProvider>
  );
}
