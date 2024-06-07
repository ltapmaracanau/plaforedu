import { useEffect } from "react";
import PLAFORLOGO from "../../assets/PLAFOR.png";

import { Avatar, Card, Descriptions, Skeleton, Space, Tag } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function MyProfile() {
  const getMyProfile = useStoreActions((actions) => actions.adm.getMyProfile);
  const myProfile = useStoreState((state) => state.adm.myProfile);
  const loading = useStoreState((state) => state.adm.loading);

  useEffect(() => {
    getMyProfile();
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
        <Card>
          {loading ? (
            <Skeleton active />
          ) : (
            <>
              <Card.Meta
                avatar={
                  <Avatar
                    src={PLAFORLOGO}
                    alt="avatar"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                }
                title={myProfile.name}
                description={
                  <Space direction="vertical">
                    <Tag color={colorStatus(myProfile.status)}>
                      {myProfile.status}
                    </Tag>
                    <div>
                      {myProfile?.UsersRoles?.map((element) => (
                        <Tag
                          color={colorStatus(element.role.name)}
                          key={element.role.id}
                        >
                          {element.role.name}
                        </Tag>
                      ))}
                    </div>
                    <Descriptions
                      style={{
                        marginTop: "10px",
                      }}
                      column={1}
                      items={[
                        {
                          label: "Email",
                          children: myProfile.email,
                        },
                        {
                          label: "CPF",
                          children: myProfile.cpf,
                        },
                        {
                          label: "Celular",
                          children: myProfile.phone,
                        },
                        {
                          label: "Instituição",
                          children: myProfile.institution,
                        },
                      ]}
                    />
                  </Space>
                }
              />
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
