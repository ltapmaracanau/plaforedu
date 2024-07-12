import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerSubthemeSchema } from "../../schemas/registers/registersSchema";

import { Button, Form, Input, notification, Select, Switch, Tag } from "antd";

export default function SubtemaRegister(props) {
  const { subtheme = null, actionVisible } = props;

  const subthemeRefactored = {
    name: subtheme?.name || "",
    themeIds: subtheme?.themes?.map((item) => item.id) || [],
  };

  const registerSubtheme = useStoreActions(
    (actions) => actions.themes.registerSubtheme
  );
  const updateSubtheme = useStoreActions(
    (actions) => actions.themes.updateSubtheme
  );
  const themes = useStoreState((state) => state.themes.themes);
  const registering = useStoreState((state) => state.themes.registering);
  const loadingThemes = useStoreState((state) => state.themes.loadingThemes);

  const [filed, setFiled] = useState(!!subtheme?.filedAt);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: subthemeRefactored,
    resolver: yupResolver(registerSubthemeSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (subtheme) {
      try {
        if (!!subtheme.filedAt !== filed) {
          await updateSubtheme({
            id: subtheme.id,
            name: values.name,
            themeIds: values.themeIds,
            filed: filed,
          });
        } else {
          await updateSubtheme({
            id: subtheme.id,
            themeIds: values.themeIds,
            name: values.name,
          });
        }
        notification.success({
          message: "Subtema alterado com sucesso!",
        });
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao alterar subtema!",
          description: error.message,
        });
      }
    } else {
      try {
        await registerSubtheme(values);
        notification.success({
          message: "Subtema cadastrado com sucesso!",
        });
        register.reset();
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao cadastrar subtema!",
          description: error.message,
        });
      }
    }
  };

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
                  label={"Nome do subtema"}
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
            name="themeIds"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Temas do subtema"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Select
                    placeholder="Temas"
                    {...field}
                    loading={loadingThemes}
                    showSearch
                    mode={"multiple"}
                    filterOption={(input, option) => {
                      return (
                        option.label
                          .toString()
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                    tagRender={(props) => {
                      const { value, closable, onClose } = props;
                      const item = themes.find((theme) => theme.id === value);

                      if (!value) return

                      return (
                        <Tag
                          closable={closable}
                          onClose={onClose}
                          style={{
                            marginRight: 3,
                            fontSize: 14,
                          }}
                        >
                          {item.name}
                          {item.filedAt && (
                            <Tag
                              style={{
                                margin: "3px",
                              }}
                              color={"orange"}
                            >
                              ARQUIVADO
                            </Tag>
                          )}
                        </Tag>
                      );
                    }}
                    options={themes
                      .filter((element) => !element.filedAt)
                      .map((element) => ({
                        label: element.name,
                        value: element.id,
                      }))}
                  />
                </Form.Item>
              );
            }}
          />
          {subtheme && (
            <Form.Item
              label={"Sub-tema arquivado"}
              style={{ marginBottom: "20px" }}
            >
              <Switch
                checked={filed}
                defaultChecked={subtheme.filedAt}
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
              loading={registering || loadingThemes}
              disabled={!register.formState.isValid}
              type="primary"
              shape="round"
              htmlType="submit"
            >
              {subtheme?.id ? <>Alterar</> : <>Cadastrar</>}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
