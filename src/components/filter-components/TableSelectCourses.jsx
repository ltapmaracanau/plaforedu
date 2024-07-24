import {
  Button,
  Card,
  Empty,
  Input,
  notification,
  Select,
  Slider,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useCallback, useEffect, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "easy-peasy";

import DebounceSelect from "../fields/DebounceSelect";

const filterCoursesDefault = {
  query: "",
  cargaHoraria: [0, 1000],
  institutions: [],
  competencies: [],
  itineraries: [],
};

export default function TableSelectCourses(props) {
  const {
    onSelectChange,
    cursosDefaultSelected,
    courseToHideId = "",
    filterDefault,
  } = props;

  const getCompetenciesAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getInstitutionsAction = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );

  const loadingCursosSecondary = useStoreState(
    (state) => state.courses.loadingCursosSecondary
  );
  const cursosSecondary = useStoreState(
    (state) => state.courses.cursosSecondary
  );
  const countSecondary = useStoreState((state) => state.courses.countSecondary);
  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );
  const [pageNumber, setPageNumber] = useState(1);

  const getCursos = useStoreActions((actions) => actions.courses.getCursos);

  const [filterAddingCoursesValues, setFilterAddingCoursesValues] = useState({
    query: filterDefault?.query ?? filterCoursesDefault.query,
    cargaHoraria:
      filterDefault?.cargaHoraria ?? filterCoursesDefault.cargaHoraria,
    institutions:
      filterDefault?.institutions?.map((item) => item.value) ??
      filterCoursesDefault.institutions,
    competencies:
      filterDefault?.competencies?.map((item) => item.value) ??
      filterCoursesDefault.competencies,
    itineraries:
      filterDefault?.itineraries?.map((item) => item.value) ??
      filterCoursesDefault.itineraries,
  });

  const [activeColumsFilter, setActiveColumsFilter] = useState({
    query: !!filterDefault?.query,
    cargaHoraria: filterDefault?.cargaHoraria?.length > 0,
    institutions: filterDefault?.institutions?.length > 0,
    competencies: filterDefault?.competencies?.length > 0,
    itineraries: filterDefault?.itineries?.length > 0,
  });

  const [stringSearchMemo, setStringSearchMemo] = useState({
    query: filterDefault?.query || filterCoursesDefault.query,
    cargaHoraria:
      filterDefault?.cargaHoraria || filterCoursesDefault.cargaHoraria,
    institutions:
      filterDefault?.institutions?.map((item) => item.value) ||
      filterCoursesDefault.institutions,
    competencies:
      filterDefault?.competencies?.map((item) => item.value) ||
      filterCoursesDefault.competencies,
    itineraries:
      filterDefault?.itineraries?.map((item) => item.value) ||
      filterCoursesDefault.itineraries,
  });

  const getCompetencies = useCallback(
    async ({ query = "", page = 1 }) => {
      try {
        const { data } = await getCompetenciesAction({ query, page });
        return data.map((competencia) => ({
          value: competencia.id,
          label: competencia.name,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar competências!",
          description: error.message,
        });
      }
    },
    [getCompetenciesAction]
  );

  const getInstitutions = useCallback(
    async ({ query = "", page = 1 }) => {
      try {
        const { data } = await getInstitutionsAction({ query, page });
        return data.map((instituicao) => ({
          value: instituicao.id,
          label: instituicao.abbreviation,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar instituições!",
          description: error.message,
        });
      }
    },
    [getInstitutionsAction]
  );

  useEffect(() => {
    async function init() {
      await getCursos({
        ...stringSearchMemo,
        secondary: true,
        page: pageNumber,
        showFiled: false,
      });
    }
    init();
  }, [getCursos, pageNumber, stringSearchMemo]);

  // Table adding courses to Trail

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
          value={filterAddingCoursesValues[`${dataIndex}`]}
          onChange={(e) => {
            setFilterAddingCoursesValues((antig) => ({
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

  const getSelect = (dataIndex, name) => {
    if (dataIndex === "competencies") {
      return (
        <DebounceSelect
          placeholder={`Buscar ${name}`}
          value={filterAddingCoursesValues[`${dataIndex}`]}
          fetchOptions={getCompetencies}
          optionsToInclude={filterDefault?.competencies ?? []}
          onChange={(values) => {
            setFilterAddingCoursesValues((antig) => ({
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
        />
      );
    } else if (dataIndex === "itineraries") {
      return (
        <Select
          placeholder={`Buscar ${name}`}
          value={filterAddingCoursesValues[`${dataIndex}`]}
          onChange={(values) => {
            setFilterAddingCoursesValues((antig) => ({
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
      return (
        <DebounceSelect
          placeholder={`Buscar ${name}`}
          value={filterAddingCoursesValues[`${dataIndex}`]}
          fetchOptions={getInstitutions}
          onChange={(values) => {
            setFilterAddingCoursesValues((antig) => ({
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
        />
      );
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
        {getSelect(dataIndex, name)}
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

  const getColumnSliderSearchProps = (dataIndex, name) => ({
    filterDropdown: () => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Typography.Text>{name}</Typography.Text>
        <Slider
          style={{
            margin: "5px 10px 30px 10px",
            display: "block",
          }}
          range
          marks={{
            0: "0h",
            500: "500h",
          }}
          value={filterAddingCoursesValues[`${dataIndex}`]}
          step={10}
          max={500}
          onChange={(value) => {
            setFilterAddingCoursesValues((antig) => ({
              ...antig,
              [`${dataIndex}`]: value,
            }));
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

  const handleSearch = async (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: true,
    }));
    const newSearch = {
      ...stringSearchMemo,
      [`${dataIndex}`]: filterAddingCoursesValues[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    await getCursos({
      ...newSearch,
      secondary: true,
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
      ...filterAddingCoursesValues,
      [`${dataIndex}`]: filterCoursesDefault[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    setFilterAddingCoursesValues(newSearch);
    await getCursos({
      ...newSearch,
      secondary: true,
      showFiled: false,
      page: pageNumber,
    });
  };

  const columns = [
    {
      title: "Título",
      key: "name",
      dataIndex: "name",
      ...getColumnSearchProps("query", "título"),
    },
    {
      title: "CH",
      key: "hours",
      dataIndex: "hours",
      render: (hours) => (
        <span>
          {hours} <span style={{ fontSize: "10px" }}>h</span>
        </span>
      ),
      ...getColumnSliderSearchProps("cargaHoraria", "Carga Horária"),
    },
    {
      title: "Instituições",
      key: "institutions",
      dataIndex: "institutions",
      render: (institutions) => (
        <span>
          {institutions.map((institution) => {
            return (
              <Tooltip
                color={"blue"}
                title={institution.name}
                key={institution.institutionId}
              >
                <Tag color={"blue"}>
                  {institution.abbreviation.toUpperCase()}
                </Tag>
              </Tooltip>
            );
          })}
        </span>
      ),
      ...getColumnSelectSearchProps("institutions", "instituição"),
    },
    {
      title: "Competências",
      key: "competencies",
      dataIndex: "competencies",
      render: (competencias) => (
        <span>
          {competencias.map((competencie) => {
            return (
              <Tag color={"blue"} key={competencie.id}>
                {competencie.name.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      ...getColumnSelectSearchProps("competencies", "competências"),
    },
    {
      title: "Itinerários",
      key: "itineraries",
      dataIndex: "itineraries",
      render: (itineraries) => (
        <span>
          {itineraries.map((itinerarie) => {
            return (
              <Tag color={itinerarie.color} key={itinerarie.id}>
                {itinerarie.name.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      ...getColumnSelectSearchProps("itineraries", "itinerários"),
    },
  ];

  const rowSelection = {
    selectedRowKeys: cursosDefaultSelected,
    onSelect: onSelectChange,
    hideSelectAll: true,
    preserveSelectedRowKeys: true,
  };

  return (
    <Table
      rowKey={"id"}
      rowSelection={rowSelection}
      dataSource={cursosSecondary.filter(
        (curso) => curso.id !== courseToHideId
      )}
      loading={loadingCursosSecondary}
      pagination={{
        onChange: async (page) => {
          setPageNumber(page);
          await getCursos({
            ...stringSearchMemo,
            page: page,
            showFiled: false,
            secondary: true,
          });
        },
        pageSize: 20,
        total: countSecondary,
        showSizeChanger: false,
        current: pageNumber,
        defaultCurrent: 1,
        hideOnSinglePage: false,
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
