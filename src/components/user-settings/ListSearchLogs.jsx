import {
  Button,
  Card,
  DatePicker,
  Empty,
  Input,
  Layout,
  notification,
  Space,
  Table,
} from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";

import { SearchOutlined, FilterFilled } from "@ant-design/icons";
import AuthAxios from "../../services/authAxios";

const { Content } = Layout;

export default function ListSearchLogs() {
  const logs = useStoreState((state) => state.adm.searchLogs);
  const loading = useStoreState((state) => state.adm.loadingLogs);
  const count = useStoreState((state) => state.adm.countLogs);
  const downloadingSearchLogs = useStoreState(
    (state) => state.adm.downloadingSearchLogs
  );
  const getSearchLogs = useStoreActions((actions) => actions.adm.getSearchLogs);
  const downloadSearchLogs = useStoreActions(
    (actions) => actions.adm.downloadSearchLogs
  );

  const [page, setPage] = useState(1);

  const [stringSearch, setStringSearch] = useState({
    description: "",
    user: "",
    initialDate: "",
    finalDate: "",
  });

  const [stringSearchMemo, setStringSearchMemo] = useState({
    description: "",
    user: "",
    initialDate: "",
    finalDate: "",
  });

  const [activeColumsFilter, setActiveColumsFilter] = useState({
    description: false,
    user: false,
    initialDate: false,
    finalDate: false,
  });

  const downloadSearchLogsTemp = async () => {
    try {
      const { data } = await AuthAxios.get("/logs/export-csv", {
        responseType: "blob",
      });

      const downloadURL = window.URL.createObjectURL(new Blob([data]));

      const linkElement = document.createElement("a");
      linkElement.href = downloadURL;
      linkElement.setAttribute("download", "PLAFOR_logs.csv");
      document.body.appendChild(linkElement);
      linkElement.click();
      linkElement.remove();
    } catch (error) {
      notification.error({
        message: "Algo deu errado!",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    getSearchLogs({ page: 1 });
  }, [getSearchLogs]);

  const handleSearch = (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: true,
    }));
    const newSearch = {
      ...stringSearchMemo,
      [`${dataIndex}`]: stringSearch[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    setPage(1);
    getSearchLogs({
      page: 1,
      ...newSearch,
    });
  };

  const handleReset = (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: false,
    }));
    const newSearch = {
      ...stringSearchMemo,
      [`${dataIndex}`]: "",
    };
    setStringSearchMemo(newSearch);
    setStringSearch(newSearch);
    setPage(1);
    getSearchLogs({
      page: 1,
      ...newSearch,
    });
  };

  const getColumnSearchProps = (dataIndex, name) => ({
    filterDropdown: () => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          placeholder={`Buscar ${name}`}
          value={stringSearch[`${dataIndex}`]}
          onChange={(e) => {
            setStringSearch((antig) => ({
              ...antig,
              [`${dataIndex}`]: e.target.value,
            }));
          }}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => {
              handleSearch(dataIndex);
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              handleReset(dataIndex);
            }}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => (
      <SearchOutlined
        style={{
          color: activeColumsFilter[`${dataIndex}`] ? "#1890ff" : undefined,
        }}
      />
    ),
  });

  const getDateColumsSearchParams = () => ({
    filterDropdown: () => (
      <div
        style={{
          padding: 8,
          display: "flex",
          flexDirection: "column",
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Space
          direction="horizontal"
          style={{
            marginBottom: "5px",
          }}
        >
          <DatePicker
            value={stringSearch.initialDate}
            format={"DD/MM/YYYY"}
            onChange={(e) => {
              setStringSearch((antg) => ({
                ...antg,
                initialDate: e,
              }));
            }}
            placeholder={"Data Inicial"}
          />
          <DatePicker
            value={stringSearch.finalDate}
            format={"DD/MM/YYYY"}
            onChange={(e) => {
              setStringSearch((antg) => ({
                ...antg,
                finalDate: e,
              }));
            }}
            placeholder={"Data Final"}
          />
        </Space>
        <Space direction="horizontal">
          <Button
            type="primary"
            onClick={() => {
              handleSearch("initialDate");
              handleSearch("finalDate");
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              handleReset("initialDate");
              handleReset("finalDate");
            }}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => (
      <FilterFilled
        style={{
          color:
            activeColumsFilter.initialDate || activeColumsFilter.finalDate
              ? "#1890ff"
              : undefined,
        }}
      />
    ),
  });

  const columns = [
    {
      title: "Busca",
      dataIndex: "description",
      key: "description",
      width: "50%",
      ...getColumnSearchProps("description", "palavra"),
    },
    {
      title: "Usuário",
      dataIndex: "user",
      key: "user",
      ...getColumnSearchProps("user", "usuário"),
    },
    {
      title: "Dia/Hora",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (item) => {
        return <>{new Date(item).toLocaleString()}</>;
      },
      ...getDateColumsSearchParams(),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%" }}>
        <Button
          loading={downloadingSearchLogs}
          onClick={async () => {
            try {
              await downloadSearchLogsTemp();
            } catch (error) {
              notification.error({
                message: "Algo deu errado!",
                description: error.message,
              });
            }
          }}
          style={{
            marginBottom: "10px",
          }}
        >
          Download CSV
        </Button>
        <Table
          dataSource={logs.map((item) => ({
            user: item.user.name || "Anônimo",
            description: item.description,
            createdAt: item.createdAt,
            id: item.id,
          }))}
          loading={loading}
          rowKey={"id"}
          pagination={{
            onChange: (page) => {
              setPage(page);
              getSearchLogs({
                page: page,
                ...stringSearchMemo,
              });
            },
            pageSize: 20,
            total: count,
            showSizeChanger: false,
            current: page,
            defaultCurrent: 1,
            hideOnSinglePage: false,
          }}
          bordered
          locale={{
            emptyText: (
              <Card>
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 80,
                  }}
                  description={<span>Base de dados de logs vazia!</span>}
                />
              </Card>
            ),
          }}
          columns={columns}
        />
      </div>
    </div>
  );
}
