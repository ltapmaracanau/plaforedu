import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerCompSchema } from "../../schemas/registers/registersSchema";

import { Button, Form, Input, notification, Select, Switch, Tag } from "antd";

export default function CompRegister(props) {
  const { comp = null, actionVisible } = props;

  const compRefactored = {
    name: comp?.name || "",
    competenciesCategoryIds:
      comp?.categoriesCompetencies?.map((item) => item.id) || [],
    description: comp?.description || "",
  };

  const registerComp = useStoreActions(
    (actions) => actions.competencies.registerComp
  );

  const updateComp = useStoreActions(
    (actions) => actions.competencies.updateComp
  );
  const catComp = useStoreState((state) => state.competencies.catComp);
  const registering = useStoreState((state) => state.competencies.registering);
  const loadingCategCompetencies = useStoreState(
    (state) => state.competencies.loadingCategCompetencies
  );

  const [filed, setFiled] = useState(!!comp?.filedAt);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: compRefactored,
    resolver: yupResolver(registerCompSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (comp) {
      try {
        if (!!comp.filedAt !== filed) {
          await updateComp({
            name: values.name,
            id: comp.id,
            filed: filed,
            competenciesCategoryIds: values.competenciesCategoryIds,
          });
        } else {
          await updateComp({
            name: values.name,
            id: comp.id,
            competenciesCategoryIds: values.competenciesCategoryIds,
          });
        }
        notification.success({
          message: "Competência alterada com sucesso!",
        });
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao alterar competência!",
          description: error.message,
        });
      }
    } else {
      try {
        await registerComp(values);
        notification.success({
          message: "Competência cadastrada com sucesso!",
        });
        register.reset();
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro ao cadastrar competência!",
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
                  label={"Nome da competência"}
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
            name="description"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Descrição da competência"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Input.TextArea placeholder="Descrição" {...field} />
                </Form.Item>
              );
            }}
          />
          <Controller
            name="competenciesCategoryIds"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Categorias da competência"}
                  style={{ marginBottom: "20px" }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Select
                    placeholder="Categorias"
                    {...field}
                    loading={loadingCategCompetencies}
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
                      const item = catComp.find((cat) => cat.id === value);
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
                    options={catComp
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
          {comp && (
            <Form.Item
              label={"Competência arquivada"}
              style={{ marginBottom: "20px" }}
            >
              <Switch
                checked={filed}
                defaultChecked={comp.filedAt}
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
              {comp ? <>Alterar</> : <>Cadastrar</>}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
