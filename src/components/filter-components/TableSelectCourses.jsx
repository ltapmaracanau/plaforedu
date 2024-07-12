import {
  Button,
  Card,
  Empty,
  Input,
  Select,
  Slider,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useEffect, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "easy-peasy";

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

  const loadingCursosSecondary = useStoreState(
    (state) => state.courses.loadingCursosSecondary
  );
  const allInstitutions = useStoreState(
    (state) => state.institutions.instituicoes
  );
  const cursosSecondary = useStoreState(
    (state) => state.courses.cursosSecondary
  );
  const countSecondary = useStoreState((state) => state.courses.countSecondary);
  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );
  const allCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );
  const [pageNumber, setPageNumber] = useState(1);

  const getCursos = useStoreActions((actions) => actions.courses.getCursos);

  const [filterAddingCoursesValues, setFilterAddingCoursesValues] = useState({
    query: filterDefault?.query ?? filterCoursesDefault.query,
    cargaHoraria:
      filterDefault?.cargaHoraria ?? filterCoursesDefault.cargaHoraria,
    institutions:
      filterDefault?.institutions ?? filterCoursesDefault.institutions,
    competencies:
      filterDefault?.competencies ?? filterCoursesDefault.competencies,
    itineraries: filterDefault?.itineraries ?? filterCoursesDefault.itineraries,
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
      filterDefault?.institutions || filterCoursesDefault.institutions,
    competencies:
      filterDefault?.competencies || filterCoursesDefault.competencies,
    itineraries: filterDefault?.itineraries || filterCoursesDefault.itineraries,
  });

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

  const getSelectOptions = (dataIndex) => {
    if (dataIndex === "competencies") {
      return (
        <>
          {allCompetencias.map((competencie) => (
            <Select.Option key={competencie.id} value={competencie.id}>
              {competencie.name}
            </Select.Option>
          ))}
        </>
      );
    } else if (dataIndex === "itineraries") {
      return (
        <>
          {allItinerarios.map((itinerario) => (
            <Select.Option key={itinerario.id} value={itinerario.id}>
              {itinerario.name}
            </Select.Option>
          ))}
        </>
      );
    } else {
      return (
        <>
          {allInstitutions.map((inst) => (
            <Select.Option
              key={inst.id}
              value={inst.id}
              label={inst.abbreviation}
            >
              {inst.abbreviation}
              <br />
              {inst.name}
            </Select.Option>
          ))}
        </>
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
            if (dataIndex === "institutions") {
              return (
                option.children[2].toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                  0
              );
            } else {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            }
          }}
        >
          {getSelectOptions(dataIndex)}
        </Select>
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
