import React, { useEffect } from "react";

import { Card, Descriptions, Layout, Skeleton, Tag } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Content } = Layout;

export default function allDataProfile() {
  const getAllDataProfile = useStoreActions(
    (actions) => actions.adm.getAllDataProfile
  );
  const allDataProfile = useStoreState((state) => state.adm.allDataProfile);
  const loading = useStoreState((state) => state.adm.loading);

  useEffect(() => {
    (async () => {
      await getAllDataProfile();
    })();
  }, [getAllDataProfile]);

  const colorStatus = (status) => {
    switch (status) {
      case "ADMINISTRADOR":
        return "#f50";
      case "SERVIDOR":
        return "#ffd400";
      case "COORDENADOR":
        return "#ffe000";
      case "PENDING":
        return "#ffe000";
      case "ACTIVE":
        return "#87d068";
      case "FILED":
        return "#2db7f5";
      case "BLOCKED":
        return "#f50";
      default:
        return "#2db7f5";
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <Card
            headStyle={{
              fontSize: 20,
            }}
            title={"Meu Perfil"}
          >
            {loading ? (
              <Skeleton active />
            ) : (
              <Descriptions
                bordered
                style={{
                  fontFamily: "Roboto",
                }}
                column={1}
              >
                <Descriptions.Item label={"Nome"}>
                  {allDataProfile.name}
                </Descriptions.Item>
                <Descriptions.Item label={"Email"}>
                  {allDataProfile.email}
                </Descriptions.Item>
                <Descriptions.Item label={"CPF"}>
                  {allDataProfile.cpf}
                </Descriptions.Item>
                <Descriptions.Item label={"Celular"}>
                  {allDataProfile.phone}
                </Descriptions.Item>
                <Descriptions.Item label={"Instituição"}>
                  {allDataProfile.institution}
                </Descriptions.Item>
                <Descriptions.Item label={"Status"}>
                  <Tag color={colorStatus(allDataProfile.status)}>
                    {allDataProfile.status}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label={"Cargos"}>
                  {allDataProfile?.UsersRoles?.map((element) => (
                    <Tag
                      color={colorStatus(element.role.name)}
                      key={element.role.id}
                    >
                      {element.role.name}
                    </Tag>
                  ))}
                </Descriptions.Item>
              </Descriptions>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
