import {
  Button,
  Card,
  Divider,
  Empty,
  Input,
  List,
  notification,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
} from "antd";
import { useCallback, useEffect, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "easy-peasy";

import DebounceSelect from "../fields/DebounceSelect";

const filterCoursesDefault = {
  query: "",
  competencies: [],
  itineraries: [],
};

export default function TableAddTrailStudyPlan(props) {
  const { onAdd } = props;

  const [pageNumber, setPageNumber] = useState(1);
  const trails = useStoreState((state) => state.trilhas.trilhas);
  const loading = useStoreState((state) => state.trilhas.loading);
  const count = useStoreState((state) => state.trilhas.count);

  const getCompetenciesAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );

  const getTrails = useStoreActions((actions) => actions.trilhas.getTrilhas);

  const [filterAddingTrail, setFilterAddingTrail] = useState({
    query: "",
    itineraries: [],
    competencies: [],
  });

  const [activeColumsFilter, setActiveColumsFilter] = useState({
    query: false,
    itineraries: false,
    competencies: false,
  });

  const [stringSearchMemo, setStringSearchMemo] = useState({
    query: "",
    itineraries: [],
    competencies: [],
  });

  const getCompetencies = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getCompetenciesAction({
          query,
          page,
        });
        return data.map((competencie) => ({
          ...competencie,
          label: competencie.name,
          value: competencie.id,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar competências",
          description: error.message,
        });
      }
    },
    [getCompetenciesAction]
  );

  useEffect(() => {
    async function init() {
      await getTrails({
        query: "",
        showFiled: false,
        page: 1,
        registerLog: false,
      });
    }
    init();
  }, [getTrails]);

  // Table adding trail to Plan

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
          value={filterAddingTrail[`${dataIndex}`]}
          onChange={(e) => {
            setFilterAddingTrail((antig) => ({
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

  const getSelectOptions = (dataIndex, name) => {
    if (dataIndex === "competencies") {
      return (
        <DebounceSelect
          placeholder={`Buscar ${name}`}
          value={filterAddingTrail[`${dataIndex}`]}
          onChange={(values) => {
            setFilterAddingTrail((antig) => ({
              ...antig,
              [`${dataIndex}`]: values,
            }));
          }}
          fetchOptions={getCompetencies}
          mode={"multiple"}
          style={{
            marginBottom: 8,
            width: 300,
            display: "block",
          }}
        />
      );
    } else if (dataIndex === "itineraries") {
      return (
        <Select
          placeholder={`Buscar ${name}`}
          value={filterAddingTrail[`${dataIndex}`]}
          onChange={(values) => {
            setFilterAddingTrail((antig) => ({
              ...antig,
              [`${dataIndex}`]: values,
            }));
          }}
          mode={"multiple"}
          style={{
            marginBottom: 8,
            width: 300,
            display: "block",
          }}
          filterOption={(input, option) => {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          {allItinerarios.map((itinerario) => (
            <Select.Option key={itinerario.id} value={itinerario.id}>
              {itinerario.name}
            </Select.Option>
          ))}
        </Select>
      );
    } else {
      return <></>;
    }
  };

  const getColumnSelectSearchProps = (dataIndex, name) => ({
    filterDropdown: () => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {getSelectOptions(dataIndex, name)}
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

  const handleSearch = async (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: true,
    }));
    const newSearch = {
      ...stringSearchMemo,
      [`${dataIndex}`]: filterAddingTrail[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    await getTrails({
      ...newSearch,
      showFiled: false,
      page: pageNumber,
    });
  };

  const handleReset = async (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: false,
    }));
    const newSearch = {
      ...filterAddingTrail,
      [`${dataIndex}`]: filterCoursesDefault[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    setFilterAddingTrail(newSearch);
    await getTrails({
      ...newSearch,
      showFiled: false,
      page: pageNumber,
    });
  };

  const renderTrailCourses = (record) => {
    // Render list of courses of trail
    return (
      <Card>
        <Card.Meta title={record.name} description={record.description} />
        <Divider>Cursos</Divider>
        <List
          size="small"
          dataSource={record.courses}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.name} />
            </List.Item>
          )}
        />
      </Card>
    );
  };

  const columns = [
    {
      title: "Título",
      width: "25%",
      key: "name",
      dataIndex: "name",
      ...getColumnSearchProps("query", "título"),
      render: (text, record) => {
        return record.filedAt ? (
          <>
            {text} <Tag color={"orange"}>ARQUIVADO</Tag>
          </>
        ) : (
          <>{text}</>
        );
      },
    },
    {
      title: "Competência",
      width: "25%",
      key: "competencies",
      dataIndex: "competencies",
      ...getColumnSelectSearchProps("competencies", "competências"),
      render: (text, record) => {
        return record.filedAt ? (
          <>
            {text.map((competencie) => (
              <Tag key={competencie.id} color={"orange"}>
                {competencie.name}
              </Tag>
            ))}
            <Tag color={"orange"}>ARQUIVADO</Tag>
          </>
        ) : (
          <>
            {text.map((competencie) => (
              <Tag key={competencie.id}>{competencie.name}</Tag>
            ))}
          </>
        );
      },
    },
    {
      title: "Itinerário",
      width: "25%",
      key: "itineraries",
      dataIndex: "itineraries",
      ...getColumnSelectSearchProps("itineraries", "itinerários"),
      render: (text, record) => {
        return record.filedAt ? (
          <>
            {text.map((itinerario) => (
              <Tag key={itinerario.id} color={"orange"}>
                {itinerario.name}
              </Tag>
            ))}
            <Tag color={"orange"}>ARQUIVADO</Tag>
          </>
        ) : (
          <>
            {text.map((itinerario) => (
              <Tag key={itinerario.id}>{itinerario.name}</Tag>
            ))}
          </>
        );
      },
    },
    {
      title: "",
      width: "25%",
      key: "action",
      render: (text, record) => {
        return (
          <>
            <Tooltip title="Adicionar todos os cursos da trilha ao plano de estudo">
              <Button
                type="primary"
                onClick={() => {
                  onAdd(record);
                }}
                disabled={record.filedAt}
              >
                Adicionar
              </Button>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <Table
      rowKey={"id"}
      dataSource={trails}
      loading={loading}
      pagination={{
        onChange: async (page) => {
          setPageNumber(page);
          await getTrails({
            ...stringSearchMemo,
            page: page,
            showFiled: false,
          });
        },
        pageSize: 20,
        total: count,
        showSizeChanger: false,
        current: pageNumber,
        defaultCurrent: 1,
        hideOnSinglePage: false,
      }}
      expandable={{
        expandedRowRender: renderTrailCourses,
      }}
      columns={columns}
      locale={{
        emptyText: (
          <Card>
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 80,
              }}
              description={<span>Não encontrado!</span>}
            />
          </Card>
        ),
      }}
    />
  );
}
