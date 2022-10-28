import React, { useEffect, useState } from "react";

import { useStoreActions, useStoreState } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../schemas/registers/registersSchema";

import InputMask from "../InputMask";

import {
  Button,
  Card,
  Form,
  Input,
  Layout,
  Select,
  Skeleton,
  notification,
  Row,
  Col,
  Switch,
  Space,
} from "antd";

const { Content } = Layout;

export default function UserUpdate(props) {
  const { id, actionVisible } = props;

  const updateUser = useStoreActions((actions) => actions.adm.updateUser);
  const activeUser = useStoreActions((actions) => actions.adm.activeUser);
  const archiveUser = useStoreActions((actions) => actions.adm.archiveUser);
  const blockUser = useStoreActions((actions) => actions.adm.blockUser);
  const resendCredentials = useStoreActions(
    (actions) => actions.adm.resendCredentials
  );
  const getRoles = useStoreActions((state) => state.adm.getRoles);
  const getUniqueUser = useStoreActions((actions) => actions.adm.getUniqueUser);

  const loading = useStoreState((state) => state.adm.loading);
  const loadingSecondary = useStoreState((state) => state.adm.loadingSecondary);
  const roles = useStoreState((state) => state.adm.roles);

  const [iniciando, setIniciando] = useState(true);
  const [user, setUser] = useState({});
  const [userBlocked, setUserBlocked] = useState(false);
  const [userArchived, setUserArchived] = useState(false);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: user,
    resolver: yupResolver(updateUserSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    values.cpf = values.cpf.replace(/\./g, "").replace(/-/g, "");
    values.phone = values.phone
      .replace(/\(/g, "")
      .replace(/\)/g, "")
      .replace(" ", "")
      .replace(/-/g, "");
    const tryUpdateUser = await updateUser(values);
    if (tryUpdateUser.error) {
      notification.error({
        message: "Algo deu errado!",
        description: tryUpdateUser.message,
      });
    } else {
      notification.success({
        message: "Usuário Alterado com Sucesso!",
      });
      actionVisible();
    }
  };

  useEffect(() => {
    (async () => {
      await getRoles();
      let thisUser = undefined;
      try {
        thisUser = await getUniqueUser({ id: id });
        setUser(thisUser);
        register.reset({
          id: thisUser.id,
          name: thisUser.name,
          email: thisUser.email,
          cpf: thisUser.cpf,
          phone: thisUser.phone,
          institution: thisUser.institution,
          roles: thisUser.UsersRoles.map((element) => element.role.id),
        });
        setUserArchived(thisUser.status === "FILED");
        setUserBlocked(thisUser.status === "BLOCKED");
      } catch (error) {
        notification.error({
          message: "Algo deu errado ao buscar usuário!",
          description: "Tente novamente!",
        });
      }
      setIniciando(false);
    })();
  }, [
    getUniqueUser,
    getRoles,
    setUser,
    setUserArchived,
    setUserBlocked,
    id,
    register,
  ]);

  if (iniciando) {
    return <Skeleton active />;
  }

  return (
    <>
      <Layout>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{ width: "100%", margin: "30px 0px" }}
            bodyStyle={{
              backgroundColor: "#f8f8f8",
              fontFamily: "Roboto",
            }}
            bordered={false}
          >
            <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
              <Row gutter={[10, 10]} align="middle" justify="center">
                <Col>
                  <Controller
                    name="name"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"Nome Completo"}
                          style={{ marginBottom: "0" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Input placeholder="Nome Completo" {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
                <Col>
                  <Controller
                    name="institution"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"Instituição"}
                          style={{ marginBottom: "0" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Input placeholder="Instituição" {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
                <Col>
                  <Controller
                    name="email"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"Login"}
                          style={{ marginBottom: "0" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Input
                            disabled={user.status !== "PENDING"}
                            placeholder="email@exemplo.com"
                            {...field}
                          />
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
                <Col>
                  <Controller
                    name="cpf"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"CPF"}
                          style={{ marginBottom: "0" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <InputMask
                            mask="999.999.999-99"
                            placeholder="___.___.___-__"
                            {...field}
                          />
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
                <Col>
                  <Controller
                    name="phone"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"Número de Telefone"}
                          style={{ marginBottom: "0" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <InputMask
                            mask="(99) 99999-9999"
                            placeholder="(__) _____-____"
                            {...field}
                          />
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
                <Col>
                  <Controller
                    name="roles"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          label={"Cargo"}
                          style={{ marginBottom: "0", minWidth: "100px" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Select
                            mode="multiple"
                            loading={loading}
                            placeholder="cargo"
                            {...field}
                          >
                            {roles.map((role) => (
                              <Select.Option key={role.id} value={role.id}>
                                {role.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      );
                    }}
                  />
                </Col>
              </Row>
              <Space
                align="center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0px",
                }}
              >
                <Button
                  loading={loading}
                  disabled={!register.formState.isValid}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Salvar
                </Button>
                <Button
                  loading={loadingSecondary}
                  disabled={user.status !== "PENDING"}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  onClick={() => {
                    resendCredentials({ id: user.id });
                  }}
                >
                  Reenviar Credenciais
                </Button>
              </Space>
              <Row gutter={[10, 10]} align="middle" justify="center">
                <Col>
                  <Form.Item label={"Usuário Bloqueado"}>
                    <Switch
                      disabled={userArchived}
                      checked={userBlocked}
                      onChange={(e) => {
                        if (e) {
                          blockUser({ id: id });
                        } else {
                          activeUser({ id: id });
                        }
                        setUserBlocked(e);
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label={"Usuário Arquivado"}>
                    <Switch
                      disabled={userBlocked}
                      checked={userArchived}
                      onChange={(e) => {
                        if (e) {
                          archiveUser({ id: id });
                        } else {
                          activeUser({ id: id });
                        }
                        setUserArchived(e);
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
