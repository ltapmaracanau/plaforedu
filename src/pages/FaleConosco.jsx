import { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { faleConoscoSchema } from "../schemas/faleConoscoSchema";

import { sendEmail } from "../services/email-service";

import { SendOutlined, WarningOutlined } from "@ant-design/icons";

import {
  Form,
  Space,
  Input,
  Button,
  Select,
  Row,
  Modal,
  Result,
  Col,
  ConfigProvider,
  Typography,
} from "antd";

const { Text, Title, Paragraph, Link } = Typography;

export default function FaleConosco() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [itSend, setItSend] = useState(false);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      from_name: "",
      type_message: "",
      from_email: "",
      message: "",
    },
    resolver: yupResolver(faleConoscoSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const sendAnotherMessage = useCallback(() => {
    setItSend(false);
  }, []);

  const onSubmit = async (values) => {
    const valuesToSend = {
      service_id: "service_01wpixi",
      template_id: "template_2loc9ox",
      user_id: "9EWYwR7xXVkTE8TPX",
      template_params: values,
    };
    // Envio da requisição
    setIsSending(true);
    const result = await sendEmail(valuesToSend);
    setIsSending(false);
    // Procesamento do resultado
    if (result.status === 200) {
      register.reset();
      setItSend(true);
      setResultado(
        <Result
          status="success"
          title="Sua mensagem foi enviada com sucesso!"
          subTitle="Dentro de algumas horas vamos retornar ao email informado com mais detalhes"
          extra={[
            <Button
              type="primary"
              key="console"
              onClick={() => {
                setModalIsVisible(false);
              }}
            >
              Maravilha!
            </Button>,
          ]}
        ></Result>
      );
    } else {
      setResultado(
        <Result
          status="500"
          title="Algo deu errado!"
          subTitle="Por favor, tente novamente mais tarde 😉"
          extra={[
            <Button
              type="primary"
              key="console"
              onClick={() => {
                setModalIsVisible(false);
              }}
            >
              Poxa 😢, Tudo bem!
            </Button>,
          ]}
        ></Result>
      );
    }
    setModalIsVisible(true);
  };

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Card: {
              colorFillAlter: "linear-gradient(to right, #2C55A1, #35A8E0)",
              colorTextHeading: "#fff",
            },
          },
        }}
      >
        <div style={{ backgroundColor: "#fff" }}>
          <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
            <Row style={{ margin: "40px 0px" }}>
              <Col
                span={12}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    padding: "20px",
                    maxWidth: "800px",
                  }}
                >
                  <Title>
                    Entre em contato caso tenha um elogio, dúvida, sugestão ou
                    queira registrar uma reclamação
                  </Title>
                  <Paragraph>
                    Também temos um FAQ que abrange as perguntas mais comuns que
                    nossos usuários costumam ter. Antes de entrar em contato
                    conosco, recomendamos dar uma olhada em nossa seção de
                    Perguntas Frequentes.
                  </Paragraph>
                  <Button
                    style={{
                      backgroundColor: "#E2FCFF",
                      color: "#2F4C84",
                      fontWeight: "600",
                      borderRadius: "10px",
                      padding: "5px",
                      marginBottom: "10px",
                    }}
                    type="link"
                    href="/faq"
                  >
                    PERGUNTAS FREQUENTES
                  </Button>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "10px",
                      padding: "5px",
                    }}
                  >
                    <Paragraph>
                      Obs.: Para quaisquer dúvidas referentes aos conteúdos
                      programáticos dos cursos, deve-se consultar as
                      instituições ofertantes.
                    </Paragraph>
                  </div>
                </div>
              </Col>
              <Col
                span={12}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    padding: "20px",
                    maxWidth: "800px",
                    display: itSend ? "block" : "none",
                  }}
                >
                  <Title>Obrigado por entrar em contato!</Title>
                  <Title level={4}>Entraremos em contato em breve.</Title>
                  <Link
                    style={{
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      sendAnotherMessage();
                    }}
                  >
                    Enviar outra mensagem
                  </Link>
                </div>
                <div
                  style={{
                    width: "80%",
                    padding: "20px",
                    maxWidth: "800px",
                    display: itSend ? "none" : "block",
                  }}
                >
                  <Controller
                    control={register.control}
                    name="from_name"
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          style={{ fontFamily: "Roboto" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                          label={<Text strong>Nome</Text>}
                        >
                          <Input placeholder="Seu nome" {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                  <Controller
                    control={register.control}
                    name="from_email"
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          style={{ fontFamily: "Roboto" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                          label={<Text strong>Email</Text>}
                        >
                          <Input placeholder="email@exemplo.com" {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                  <Controller
                    control={register.control}
                    name="type_message"
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          style={{ fontFamily: "Roboto" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                          label={
                            <Text strong>A que se refere sua mensagem</Text>
                          }
                        >
                          <Select {...field}>
                            <Select.Option value={"Elogio"}>
                              Elogio
                            </Select.Option>
                            <Select.Option value={"Sugestão"}>
                              Sugestão
                            </Select.Option>
                            <Select.Option value={"Reclamação"}>
                              Reclamação
                            </Select.Option>
                            <Select.Option value={"Dúvida"}>
                              Dúvida
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      );
                    }}
                  />
                  <Controller
                    control={register.control}
                    name="message"
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          style={{ fontFamily: "Roboto" }}
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                          label={<Text strong>Mensagem</Text>}
                        >
                          <Input.TextArea
                            autoSize={{ minRows: 4, maxRows: 10 }}
                            placeholder="Escreva aqui"
                            {...field}
                          />
                        </Form.Item>
                      );
                    }}
                  />
                  <Space>
                    <Button
                      disabled={!register.formState.isValid}
                      loading={register.formState.isValidating || isSending}
                      htmlType="submit"
                      type="primary"
                      icon={
                        register.formState.isValid ? (
                          <SendOutlined />
                        ) : (
                          <WarningOutlined />
                        )
                      }
                    >
                      Enviar
                    </Button>
                  </Space>
                </div>
              </Col>
            </Row>
          </Form>
          <Modal
            open={modalIsVisible}
            onCancel={() => {
              setModalIsVisible(false);
            }}
            footer={null}
          >
            {resultado}
          </Modal>
        </div>
      </ConfigProvider>
    </div>
  );
}
