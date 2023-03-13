import {
  Button,
  Card,
  Empty,
  Input,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "easy-peasy";

const filterCoursesDefault = {
  query: "",
  institutions: [],
  competencies: [],
  itineraries: [],
};

export default function TableSelectCourses(props) {
  const { onSelectChange, cursosDefaultSelected, courseToHideId = "" } = props;

  const loadingCursos = useStoreState((state) => state.courses.loading);
  const allInstitutions = useStoreState(
    (state) => state.institutions.instituicoes
  );
  const cursos = useStoreState((state) => state.courses.cursos);
  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );
  const allCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );

  const getCourses = useStoreActions((actions) => actions.courses.getCursos);

  const [filterAddingCourses, setFilterAddingCourses] = useState({
    query: "",
    institutions: [],
    competencies: [],
    itineraries: [],
  });

  const [activeColumsFilter, setActiveColumsFilter] = useState({
    query: false,
    institutions: false,
    competencies: false,
    itineraries: false,
  });

  const [stringSearchMemo, setStringSearchMemo] = useState({
    query: "",
    institutions: [],
    competencies: [],
    itineraries: [],
  });

  const getCursos = useStoreActions((actions) => actions.courses.getCursos);

  useEffect(async () => {
    await getCursos({ showFiled: true });
  }, []);

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
          value={filterAddingCourses[`${dataIndex}`]}
          onChange={(e) => {
            setFilterAddingCourses((antig) => ({
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
          value={filterAddingCourses[`${dataIndex}`]}
          onChange={(values) => {
            setFilterAddingCourses((antig) => ({
              ...antig,
              [`${dataIndex}`]: values,
            }));
          }}
          mode={"multiple"}
          style={{
            marginBottom: 8,
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

  const handleSearch = (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: true,
    }));
    const newSearch = {
      ...stringSearchMemo,
      [`${dataIndex}`]: filterAddingCourses[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    getCourses({
      ...newSearch,
      showFiled: true,
    });
  };

  const handleReset = (dataIndex) => {
    setActiveColumsFilter((antig) => ({
      ...antig,
      [`${dataIndex}`]: false,
    }));
    const newSearch = {
      ...filterAddingCourses,
      [`${dataIndex}`]: filterCoursesDefault[`${dataIndex}`],
    };
    setStringSearchMemo(newSearch);
    setFilterAddingCourses(newSearch);
    getCourses({
      ...newSearch,
      showFiled: true,
    });
  };

  const columnsAddCoursesTrail = [
    {
      title: "Título",
      key: "name",
      dataIndex: "name",
      ...getColumnSearchProps("query", "título"),
      render: (text, record, _index) => {
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
    onChange: onSelectChange,
  };

  return (
    <Table
      rowKey={"id"}
      loading={loadingCursos}
      rowSelection={rowSelection}
      dataSource={cursos.filter((curso) => curso.id !== courseToHideId)}
      columns={columnsAddCoursesTrail}
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
