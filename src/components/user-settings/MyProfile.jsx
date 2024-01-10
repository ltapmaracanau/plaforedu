import { useEffect } from "react";
import PLAFORLOGO from "../../assets/PLAFOR.png";

import { Avatar, Card, Descriptions, Skeleton, Space, Tag } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function MyProfile() {
  const getAllDataProfile = useStoreActions(
    (actions) => actions.adm.getAllDataProfile
  );
  const allDataProfile = useStoreState((state) => state.adm.allDataProfile);
  const loading = useStoreState((state) => state.adm.loading);

  useEffect(() => {
    getAllDataProfile();
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
                title={allDataProfile.name}
                description={
                  <Space direction="vertical">
                    <Tag color={colorStatus(allDataProfile.status)}>
                      {allDataProfile.status}
                    </Tag>
                    <div>
                      {allDataProfile?.UsersRoles?.map((element) => (
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
                          children: allDataProfile.email,
                        },
                        {
                          label: "CPF",
                          children: allDataProfile.cpf,
                        },
                        {
                          label: "Celular",
                          children: allDataProfile.phone,
                        },
                        {
                          label: "Instituição",
                          children: allDataProfile.institution,
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
