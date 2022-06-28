import React, { useEffect } from "react";

import { Card, Descriptions, Layout, Skeleton, Tag } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Content } = Layout;

export default function MyProfile() {
  const getMyProfile = useStoreActions((actions) => actions.adm.getMyProfile);
  const myProfile = useStoreState((state) => state.adm.myProfile);
  const loading = useStoreState((state) => state.adm.loading);

  useEffect(() => {
    (async () => {
      await getMyProfile();
    })();
  }, [getMyProfile]);

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
      <Layout
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Content style={{ width: "100%" }}>
          <Card title={"Meu Perfil"}>
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
                  {myProfile.name}
                </Descriptions.Item>
                <Descriptions.Item label={"Email"}>
                  {myProfile.email}
                </Descriptions.Item>
                <Descriptions.Item label={"CPF"}>
                  {myProfile.cpf}
                </Descriptions.Item>
                <Descriptions.Item label={"Celular"}>
                  {myProfile.phone}
                </Descriptions.Item>
                <Descriptions.Item label={"Instituição"}>
                  {myProfile.institution}
                </Descriptions.Item>
                <Descriptions.Item label={"Status"}>
                  <Tag color={colorStatus(myProfile.status)}>
                    {myProfile.status}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label={"Cargos"}>
                  {myProfile?.UsersRoles?.map((element) => (
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
        </Content>
      </Layout>
    </>
  );
}
