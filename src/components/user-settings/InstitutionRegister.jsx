import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerInstitutionSchema } from "../../schemas/registers/registersSchema";

import { Button, Form, Input, notification, Select, Switch } from "antd";

export default function InstitutionRegister(props) {
  const { instituicao = null, actionVisible } = props;

  const registerNewInstitution = useStoreActions(
    (actions) => actions.institutions.registerNewInstitution
  );
  const updateInstitution = useStoreActions(
    (actions) => actions.institutions.updateInstitution
  );
  const getStates = useStoreActions(
    (actions) => actions.institutions.getStates
  );
  const registering = useStoreState((state) => state.institutions.registering);
  const [loadingStates, setLoadingStates] = useState(false);
  const [estados, setEstados] = useState([]);

  const [filed, setFiled] = useState(!!instituicao?.filedAt);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: instituicao,
    resolver: yupResolver(registerInstitutionSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (instituicao) {
      try {
        if (!!instituicao.filedAt !== filed) {
          await updateInstitution({
            id: instituicao.id,
            name: values.name,
            abbreviation: values.abbreviation,
            uf: values.uf,
            filed: filed,
          });
        } else {
          await updateInstitution({
            name: values.name,
            abbreviation: values.abbreviation,
            uf: values.uf,
            id: instituicao.id,
          });
        }
        notification.success({
          message: "Instituição alterada com sucesso!",
        });
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao alterar instituição!",
          description: error.message,
        });
      }
    } else {
      try {
        await registerNewInstitution(values);
        notification.success({
          message: "Instituição cadastrada com sucesso!",
        });
        register.reset();
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao cadastrar instituição!",
          description: error.message,
        });
      }
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoadingStates(true);
      try {
        const states = await getStates();
        setEstados(states);
      } catch (error) {
        notification.error({
          message: "Erro ao listar estados!",
          description: error.message,
        });
      } finally {
        setLoadingStates(false);
      }
    };
    init();
  }, [getStates]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          margin: "30px 0px",
          backgroundColor: "#f8f8f8",
          fontFamily: "Roboto",
        }}
      >
        <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Nome da instituição"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Input placeholder="Nome" {...field} />
                </Form.Item>
              );
            }}
          />
          <Controller
            name="abbreviation"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Sigla da instituição"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Input placeholder="Sigla" {...field} />
                </Form.Item>
              );
            }}
          />
          <Controller
            name="uf"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Estado da instituição"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Select
                    placeholder="Estado"
                    {...field}
                    loading={loadingStates}
                    showSearch
                    filterOption={(input, option) => {
                      return (
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                  >
                    {estados.map((element) => (
                      <Select.Option key={element.sigla} value={element.sigla}>
                        {element.nome}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              );
            }}
          />
          {instituicao && (
            <Form.Item
              label={"Instituição arquivada"}
              style={{ marginBottom: "20px" }}
            >
              <Switch
                checked={filed}
                defaultChecked={instituicao.filedAt}
                onChange={(value) => {
                  setFiled(value);
                }}
              />
            </Form.Item>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 0px",
            }}
          >
            <Button
              loading={registering}
              disabled={!register.formState.isValid}
              type="primary"
              shape="round"
              htmlType="submit"
            >
              {instituicao ? <>Alterar</> : <>Cadastrar</>}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
