import React from 'react'
import ItemSideFilter from './ItemSideFilter'

import { useStoreActions, useStoreState } from 'easy-peasy'
import { useForm, FormProvider, Controller } from 'react-hook-form'

import {
    Col,
    Switch,
    Select,
    Button,
    Slider,
    Input,
    Form,
    Card
} from 'antd'

const { Search } = Input;

export default function SideFilter() {

    const filterDefault = useStoreState(state => state.cursos.filter)
    const changeFilter = useStoreActions(actions => actions.cursos.changeFilter)
    const onChangeTipoVisualizacao = useStoreActions(actions => actions.adm.onChangeTipoVisualizacao)

    const onSubmit = (values) => {
        changeFilter(values)
    }

    const onSearch = () => {
        changeFilter(register.getValues())
    }

    const register = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: filterDefault,
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    });

    return (
        <Col flex='300px' style={{ padding: '5px', height: '600px', overflowY: 'scroll' }}>
            <FormProvider {...register}>
                <Form
                    layout='vertical'
                    onFinish={register.handleSubmit(onSubmit)}
                >
                    <Card>
                        <Controller
                            control={register.control}
                            name='buscaInterna'
                            render={({ field }) => {
                                return (
                                    <Form.Item>
                                        <Search placeholder="Buscar" {...field} enterButton onSearch={onSearch} />
                                    </Form.Item>
                                )
                            }}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            defaultValue={true}
                            name='tipoVisualizacao'
                            render={() => {
                                return (
                                    <Form.Item label={'Tipo de Visualização:'}>
                                        <Switch
                                            defaultChecked={true}
                                            checkedChildren="Lista"
                                            unCheckedChildren="Grafo"
                                            onChange={(value) => { onChangeTipoVisualizacao(value) }}
                                        />
                                    </Form.Item>
                                )
                            }
                            }
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='categoriasDeCompetencias'
                            render={({ field }) => (
                                <Form.Item label={'Categorias de Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as categorias'}
                                        showArrow
                                        style={{ width: '100%' }}
                                    >
                                        <Select.Option value={1}>Gestão de Resultados</Select.Option>
                                        <Select.Option value={2}>Gestão de Relacionamentos</Select.Option>
                                        <Select.Option value={3}>Gestão de Mudanças</Select.Option>
                                        <Select.Option value={4}>Orientação a Resultados</Select.Option>
                                        <Select.Option value={5}>Processos de Melhoria</Select.Option>
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='competencias'
                            render={({ field }) => (
                                <Form.Item label={'Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as competências'}
                                        showArrow
                                        style={{ width: '100%' }}
                                    >
                                        <Select.Option value={1}>Gestão de Resultados</Select.Option>
                                        <Select.Option value={2}>Gestão de Relacionamentos</Select.Option>
                                        <Select.Option value={3}>Gestão de Mudanças</Select.Option>
                                        <Select.Option value={4}>Orientação a Resultados</Select.Option>
                                        <Select.Option value={5}>Processos de Melhoria</Select.Option>
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='temas'
                            render={({ field }) => (
                                <Form.Item label={'Temas:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todos os temas'}
                                        showArrow
                                        filterOption={(input, option) => {
                                            console.log(option)
                                            return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                        }}
                                        style={{ width: '100%' }}
                                    >
                                        <Select.Option value={1}>Matemática</Select.Option>
                                        <Select.Option value={2}>Probabilidade e Estatística</Select.Option>
                                        <Select.Option value={3}>Ciência da Computação</Select.Option>
                                        <Select.Option value={4}>Astronomia</Select.Option>
                                        <Select.Option value={5}>Física</Select.Option>
                                        <Select.Option value={6}>Química</Select.Option>
                                        <Select.Option value={7}>GeoCiências</Select.Option>
                                        <Select.Option value={8}>Oceanografia</Select.Option>
                                        <Select.Option value={9}>Biologia Geral</Select.Option>
                                        <Select.Option value={10}>Genética</Select.Option>
                                        <Select.Option value={11}>Botânica</Select.Option>
                                        <Select.Option value={12}>Zoologia</Select.Option>
                                        <Select.Option value={13}>Ecologia</Select.Option>
                                        <Select.Option value={14}>Morfologia</Select.Option>
                                        <Select.Option value={15}>Fisiologia</Select.Option>
                                        <Select.Option value={16}>Bioquímica</Select.Option>
                                        <Select.Option value={17}>Biofísica</Select.Option>
                                        <Select.Option value={18}>Farmacologia</Select.Option>
                                        <Select.Option value={19}>Imunologia</Select.Option>
                                        <Select.Option value={20}>Microbiologia</Select.Option>
                                        <Select.Option value={21}>Parasitologia</Select.Option>
                                        <Select.Option value={22}>Engenharia Civil</Select.Option>
                                        <Select.Option value={23}>Engenharia de Minas</Select.Option>
                                        <Select.Option value={24}>Engenharia de Materiais e Metalúrgica</Select.Option>
                                        <Select.Option value={25}>Engenharia Elétrica</Select.Option>
                                        <Select.Option value={26}>Engenharia Mecânica</Select.Option>
                                        <Select.Option value={27}>Engenharia Química</Select.Option>
                                        <Select.Option value={28}>Engenharia Sanitária</Select.Option>
                                        <Select.Option value={29}>Engenharia de Produção</Select.Option>
                                        <Select.Option value={30}>Engenharia Nuclear</Select.Option>
                                        <Select.Option value={31}>Engenharia de Transportes</Select.Option>
                                        <Select.Option value={32}>Engenharia Naval e Oceânica</Select.Option>
                                        <Select.Option value={33}>Engenharia Aeroespacial</Select.Option>
                                        <Select.Option value={34}>Engenharia Biomédica</Select.Option>
                                        <Select.Option value={35}>Medicina</Select.Option>
                                        <Select.Option value={36}>Odontologia</Select.Option>
                                        <Select.Option value={37}>Farmácia</Select.Option>
                                        <Select.Option value={38}>Nutrição</Select.Option>
                                        <Select.Option value={39}>Saúde Coletiva</Select.Option>
                                        <Select.Option value={40}>Fonoaudiologia</Select.Option>
                                        <Select.Option value={41}>Fisioterapia e Terapia Ocupacional</Select.Option>
                                        <Select.Option value={42}>Educação Física</Select.Option>
                                        <Select.Option value={43}>Agronomia</Select.Option>
                                        <Select.Option value={44}>Recursos Florestais e Engenharia Florestal</Select.Option>
                                        <Select.Option value={45}>Engenharia Agrícola</Select.Option>
                                        <Select.Option value={46}>Zootecnia</Select.Option>
                                        <Select.Option value={47}>Medicina Veterinária</Select.Option>
                                        <Select.Option value={48}>Recursos Pesqueiros e Engenharia de Pesca</Select.Option>
                                        <Select.Option value={49}>Ciência e Tecnologia de Alimentos</Select.Option>
                                        <Select.Option value={50}>Direito</Select.Option>
                                        <Select.Option value={51}>Administração</Select.Option>
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='subtemas'
                            render={({ field }) => (
                                <Form.Item label={'Subtemas:'}>
                                    <Select
                                        {...field}
                                        placeholder={'Todos os Subtemas'}
                                        mode='multiple'
                                        showSearch
                                        filterOption={(input, option) => {
                                            console.log(option)
                                            return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                        }}
                                        style={{ width: '100%' }}
                                    >
                                        <Select.Option value={1}>Álgebra</Select.Option>
                                        <Select.Option value={2}>Análise</Select.Option>
                                        <Select.Option value={3}>Geometria e Topologia</Select.Option>
                                        <Select.Option value={4}>Matemática Aplicada</Select.Option>
                                        <Select.Option value={5}>Probabilidade</Select.Option>
                                        <Select.Option value={6}>Estatística</Select.Option>
                                        <Select.Option value={7}>Probabilidade e Estatística Aplicadas</Select.Option>
                                        <Select.Option value={8}>Teoria da Computação</Select.Option>
                                        <Select.Option value={9}>Matemática da Computação</Select.Option>
                                        <Select.Option value={10}>Metodologia e Técnicas da Computação</Select.Option>
                                        <Select.Option value={11}>Sistemas de Computação</Select.Option>
                                        <Select.Option value={12}>Astronomia de Posição e Mecânica Celeste</Select.Option>
                                        <Select.Option value={13}>Astrofísica Estelar</Select.Option>
                                        <Select.Option value={14}>Astrofísica do Meio Interestelar</Select.Option>
                                        <Select.Option value={15}>Astrofísica Extragaláctica</Select.Option>
                                        <Select.Option value={16}>Astrofísica do Sistema Solar</Select.Option>
                                        <Select.Option value={17}>Instrumentação Astronômica</Select.Option>
                                        <Select.Option value={18}>Física Geral</Select.Option>
                                        <Select.Option value={19}>Áreas Clássicas de Fenomenologia e suas Aplicações</Select.Option>
                                        <Select.Option value={20}>Física das Partículas Elementares e Campos</Select.Option>
                                        <Select.Option value={21}>Física Nuclear</Select.Option>
                                        <Select.Option value={22}>Física Atômica e Molécular</Select.Option>
                                        <Select.Option value={23}>Física dos Fluidos, Física de Plasmas e Descargas Elétricas</Select.Option>
                                        <Select.Option value={24}>Física da Matéria Condensada</Select.Option>
                                        <Select.Option value={25}>Química Orgânica</Select.Option>
                                        <Select.Option value={26}>Química Inorgânica</Select.Option>
                                        <Select.Option value={27}>Fisico-Química</Select.Option>
                                        <Select.Option value={28}>Química Analítica</Select.Option>
                                        <Select.Option value={29}>Geologia</Select.Option>
                                        <Select.Option value={30}>Geofísica</Select.Option>
                                        <Select.Option value={31}>Meteorologia</Select.Option>
                                        <Select.Option value={32}>Geodesia</Select.Option>
                                        <Select.Option value={33}>Geografia Física</Select.Option>
                                        <Select.Option value={34}>Oceanografia Biológica</Select.Option>
                                        <Select.Option value={35}>Oceanografia Física</Select.Option>
                                        <Select.Option value={36}>Oceanografia Química</Select.Option>
                                        <Select.Option value={37}>Oceanografia Geológica</Select.Option>
                                        <Select.Option value={38}>Biologia Geral</Select.Option>
                                        <Select.Option value={39}>Genética Quantitativa</Select.Option>
                                        <Select.Option value={40}>Genética Molecular e de Microorganismos</Select.Option>
                                        <Select.Option value={41}>Genética Vegetal</Select.Option>
                                        <Select.Option value={42}>Genética Animal</Select.Option>
                                        <Select.Option value={43}>Genética Humana e Médica</Select.Option>
                                        <Select.Option value={44}>Mutagênese</Select.Option>
                                        <Select.Option value={45}>Paleobotânica</Select.Option>
                                        <Select.Option value={46}>Morfologia Vegetal</Select.Option>
                                        <Select.Option value={47}>Fisiologia Vegetal</Select.Option>
                                        <Select.Option value={48}>Taxonomia Vegetal</Select.Option>
                                        <Select.Option value={49}>Fitogeografia</Select.Option>
                                        <Select.Option value={50}>Botânica Aplicada</Select.Option>
                                        <Select.Option value={51}>Paleozoologia</Select.Option>
                                        <Select.Option value={52}>Morfologia dos Grupos Recentes</Select.Option>
                                        <Select.Option value={53}>Fisiologia dos Grupos Recentes</Select.Option>
                                        <Select.Option value={54}>Comportamento Animal</Select.Option>
                                        <Select.Option value={55}>Taxonomia dos Grupos Recentes</Select.Option>
                                        <Select.Option value={56}>Zoologia Aplicada</Select.Option>
                                        <Select.Option value={57}>Ecologia Teórica</Select.Option>
                                        <Select.Option value={58}>Ecologia de Ecossistemas</Select.Option>
                                        <Select.Option value={59}>Ecologia Aplicada</Select.Option>
                                        <Select.Option value={60}>Citologia e Biologia Celular</Select.Option>
                                        <Select.Option value={61}>Embriologia</Select.Option>
                                        <Select.Option value={62}>Histologia</Select.Option>
                                        <Select.Option value={63}>Anatomia</Select.Option>
                                        <Select.Option value={64}>Fisiologia Geral</Select.Option>
                                        <Select.Option value={65}>Fisiologia de Órgaos e Sistemas</Select.Option>
                                        <Select.Option value={66}>Fisiologia do Esforço</Select.Option>
                                        <Select.Option value={67}>Fisiologia Comparada</Select.Option>
                                        <Select.Option value={68}>Química de Macromoléculas</Select.Option>
                                        <Select.Option value={69}>Bioquímica dos Microorganismos</Select.Option>
                                        <Select.Option value={70}>Metabolismo e Bioenergética</Select.Option>
                                        <Select.Option value={71}>Biologia Molecular</Select.Option>
                                        <Select.Option value={72}>Enzimologia</Select.Option>
                                        <Select.Option value={73}>Biofísica Molecular</Select.Option>
                                        <Select.Option value={74}>Biofísica Celular</Select.Option>
                                        <Select.Option value={75}>Biofísica de Processos e Sistemas</Select.Option>
                                        <Select.Option value={76}>Radiologia e Fotobiologia</Select.Option>
                                        <Select.Option value={77}>Farmacologia Geral</Select.Option>
                                        <Select.Option value={78}>Farmacologia Autonômica</Select.Option>
                                        <Select.Option value={79}>Neuropsicofarmacologia</Select.Option>
                                        <Select.Option value={80}>Farmacologia Cardiorenal</Select.Option>
                                        <Select.Option value={81}>Farmacologia Bioquímica e Molecular</Select.Option>
                                        <Select.Option value={82}>Etnofarmacologia</Select.Option>
                                        <Select.Option value={83}>Toxicologia</Select.Option>
                                        <Select.Option value={84}>Farmacologia Clínica</Select.Option>
                                        <Select.Option value={85}>Imunoquímica</Select.Option>
                                        <Select.Option value={86}>Imunologia Celular</Select.Option>
                                        <Select.Option value={87}>Imunogenética</Select.Option>
                                        <Select.Option value={88}>Imunologia Aplicada</Select.Option>
                                        <Select.Option value={89}>Biologia e Fisiologia dos Microorganismos</Select.Option>
                                        <Select.Option value={90}>Microbiologia Aplicada</Select.Option>
                                        <Select.Option value={91}>Protozoologia de Parasitos</Select.Option>
                                        <Select.Option value={92}>Helmintologia de Parasitos</Select.Option>
                                        <Select.Option value={93}>Entomologia e Malacologia de Parasitos e Vetores</Select.Option>
                                        <Select.Option value={94}>Construção Civil</Select.Option>
                                        <Select.Option value={95}>Estruturas</Select.Option>
                                        <Select.Option value={96}>Geotécnica</Select.Option>
                                        <Select.Option value={97}>Engenharia Hidráulica</Select.Option>
                                        <Select.Option value={98}>Infra-Estrutura de Transportes</Select.Option>
                                        <Select.Option value={99}>Pesquisa Mineral</Select.Option>
                                        <Select.Option value={100}>Lavra</Select.Option>
                                        <Select.Option value={101}>Tratamento de Minérios</Select.Option>
                                        <Select.Option value={102}>Instalações e Equipamentos Metalúrgicos</Select.Option>
                                        <Select.Option value={103}>Metalurgia Extrativa</Select.Option>
                                        <Select.Option value={104}>Metalurgia de Transformação</Select.Option>
                                        <Select.Option value={105}>Metalurgia Fisica</Select.Option>
                                        <Select.Option value={106}>Materiais não Metálicos</Select.Option>
                                        <Select.Option value={107}>Materiais Elétricos</Select.Option>
                                        <Select.Option value={108}>Medidas Elétricas, Magnéticas e Eletrônicas; Instrumentação</Select.Option>
                                        <Select.Option value={109}>Circuitos Elétricos, Magnéticos e Eletrônicos</Select.Option>
                                        <Select.Option value={110}>Sistemas Elétricos de Potência</Select.Option>
                                        <Select.Option value={111}>Eletrônica Industrial, Sistemas e Controles Eletrônicos</Select.Option>
                                        <Select.Option value={112}>Telecomunicações</Select.Option>
                                        <Select.Option value={113}>Fenômenos de Transporte</Select.Option>
                                        <Select.Option value={114}>Engenharia Térmica</Select.Option>
                                        <Select.Option value={115}>Mecânica dos Sólidos</Select.Option>
                                        <Select.Option value={116}>Projetos de Máquinas</Select.Option>
                                        <Select.Option value={117}>Processos de Fabricação</Select.Option>
                                        <Select.Option value={118}>Processos Industriais de Engenharia Química</Select.Option>
                                        <Select.Option value={119}>Operações Industriais e Equipamentos para Engenharia Química</Select.Option>
                                        <Select.Option value={120}>Tecnologia Química</Select.Option>
                                        <Select.Option value={121}>Recursos Hídricos</Select.Option>
                                        <Select.Option value={122}>Tratamento de Águas de Abastecimento e Residuárias</Select.Option>
                                        <Select.Option value={123}>Saneamento Básico</Select.Option>
                                        <Select.Option value={124}>Saneamento Ambiental</Select.Option>
                                        <Select.Option value={125}>Gerência de Produção</Select.Option>
                                        <Select.Option value={126}>Pesquisa Operacional</Select.Option>
                                        <Select.Option value={127}>Engenharia do Produto</Select.Option>
                                        <Select.Option value={128}>Engenharia Econômica</Select.Option>
                                        <Select.Option value={129}>Aplicações de Radioisotopos</Select.Option>
                                        <Select.Option value={130}>Fusão Controlada</Select.Option>
                                        <Select.Option value={131}>Combustível Nuclear</Select.Option>
                                        <Select.Option value={132}>Tecnologia dos Reatores</Select.Option>
                                        <Select.Option value={133}>Planejamento de Transportes</Select.Option>
                                        <Select.Option value={134}>Veículos e Equipamentos de Controle</Select.Option>
                                        <Select.Option value={135}>Operações de Transportes</Select.Option>
                                        <Select.Option value={136}>Hidrodinâmica de Navios e Sistemas Oceânicos</Select.Option>
                                        <Select.Option value={137}>Estruturas Navais e Oceânicas</Select.Option>
                                        <Select.Option value={138}>Máquinas Marítimas</Select.Option>
                                        <Select.Option value={139}>Projeto de Navios e de Sistemas Oceânicos</Select.Option>
                                        <Select.Option value={140}>Tecnologia de Construção Naval e de Sistemas Oceânicas</Select.Option>
                                        <Select.Option value={141}>Aerodinâmica</Select.Option>
                                        <Select.Option value={142}>Dinâmica de Vôo</Select.Option>
                                        <Select.Option value={143}>Estruturas Aeroespaciais</Select.Option>
                                        <Select.Option value={144}>Materiais e Processos para Engenharia Aeronáutica e Aeroespacial</Select.Option>
                                        <Select.Option value={145}>Propulsão Aeroespacial</Select.Option>
                                        <Select.Option value={146}>Sistemas Aeroespaciais</Select.Option>
                                        <Select.Option value={147}>Bioengenharia</Select.Option>
                                        <Select.Option value={148}>Engenharia Médica</Select.Option>
                                        <Select.Option value={149}>Clínica Médica</Select.Option>
                                        <Select.Option value={150}>Cirurgia</Select.Option>
                                        <Select.Option value={151}>Saúde Materno-Infantil</Select.Option>
                                        <Select.Option value={152}>Psiquiatria</Select.Option>
                                        <Select.Option value={153}>Anatomia Patológica e Patologia Clínica</Select.Option>
                                        <Select.Option value={154}>Radiologia Médica</Select.Option>
                                        <Select.Option value={155}>Medicina Legal e Deontologia</Select.Option>
                                        <Select.Option value={156}>Clínica Odontológica</Select.Option>
                                        <Select.Option value={157}>Cirurgia Buco-Maxilo-Facial</Select.Option>
                                        <Select.Option value={158}>Ortodontia</Select.Option>
                                        <Select.Option value={159}>Odontopediatria</Select.Option>
                                        <Select.Option value={160}>Periodontia</Select.Option>
                                        <Select.Option value={161}>Endodontia</Select.Option>
                                        <Select.Option value={162}>Radiologia Odontológica</Select.Option>
                                        <Select.Option value={163}>Odontologia Social e Preventiva</Select.Option>
                                        <Select.Option value={164}>Materiais Odontológicos</Select.Option>
                                        <Select.Option value={165}>Farmacotecnia</Select.Option>
                                        <Select.Option value={166}>Farmacognosia</Select.Option>
                                        <Select.Option value={167}>Análise Toxicológica</Select.Option>
                                        <Select.Option value={168}>Análise e Controle e Medicamentos</Select.Option>
                                        <Select.Option value={169}>Bromatologia</Select.Option>
                                        <Select.Option value={170}>Bioquímica da Nutrição</Select.Option>
                                        <Select.Option value={171}>Dietética</Select.Option>
                                        <Select.Option value={172}>Análise Nutricional de População</Select.Option>
                                        <Select.Option value={173}>Desnutrição e Desenvolvimento Fisiológico</Select.Option>
                                        <Select.Option value={174}>Epidemiologia</Select.Option>
                                        <Select.Option value={175}>Saúde Publica</Select.Option>
                                        <Select.Option value={176}>Medicina Preventiva</Select.Option>
                                        <Select.Option value={177}>Fonoaudiologia</Select.Option>
                                        <Select.Option value={178}>Fisioterapia e Terapia Ocupacional</Select.Option>
                                        <Select.Option value={179}>Educação Física</Select.Option>
                                        <Select.Option value={180}>Ciência do Solo</Select.Option>
                                        <Select.Option value={181}>Fitossanidade</Select.Option>
                                        <Select.Option value={182}>Fitotecnia</Select.Option>
                                        <Select.Option value={183}>Floricultura, Parques e Jardins</Select.Option>
                                        <Select.Option value={184}>Agrometeorologia</Select.Option>
                                        <Select.Option value={185}>Extensão Rural</Select.Option>
                                        <Select.Option value={186}>Silvicultura</Select.Option>
                                        <Select.Option value={187}>Manejo Florestal</Select.Option>
                                        <Select.Option value={188}>Técnicas e Operações Florestais</Select.Option>
                                        <Select.Option value={189}>Tecnologia e Utilização de Produtos Florestais</Select.Option>
                                        <Select.Option value={190}>Conservação da Natureza</Select.Option>
                                        <Select.Option value={191}>Energia de Biomassa Florestal</Select.Option>
                                        <Select.Option value={192}>Máquinas e Implementos Agrícolas</Select.Option>
                                        <Select.Option value={193}>Engenharia de Água e Solo</Select.Option>
                                        <Select.Option value={194}>Engenharia de Processamento de Produtos Agrícolas</Select.Option>
                                        <Select.Option value={195}>Construções Rurais e Ambiência</Select.Option>
                                        <Select.Option value={196}>Energização Rural</Select.Option>
                                        <Select.Option value={197}>Ecologia dos Animais Domésticos e Etologia</Select.Option>
                                        <Select.Option value={198}>Genética e Melhoramento dos Animais Domésticos</Select.Option>
                                        <Select.Option value={199}>Nutrição e Alimentação Animal</Select.Option>
                                        <Select.Option value={200}>Pastagem e Forragicultura</Select.Option>
                                        <Select.Option value={201}>Produção Animal</Select.Option>
                                        <Select.Option value={202}>Clínica e Cirurgia Animal</Select.Option>
                                        <Select.Option value={203}>Medicina Veterinária Preventiva</Select.Option>
                                        <Select.Option value={204}>Patologia Animal</Select.Option>
                                        <Select.Option value={205}>Reprodução Animal</Select.Option>
                                        <Select.Option value={206}>Inspeção de Produtos de Origem Animal</Select.Option>
                                        <Select.Option value={207}>Recursos Pesqueiros Marinhos</Select.Option>
                                        <Select.Option value={208}>Recursos Pesqueiros de Águas Interiores</Select.Option>
                                        <Select.Option value={209}>Aquicultura</Select.Option>
                                        <Select.Option value={210}>Engenharia de Pesca</Select.Option>
                                        <Select.Option value={211}>Ciência de Alimentos</Select.Option>
                                        <Select.Option value={212}>Tecnologia de Alimentos</Select.Option>
                                        <Select.Option value={213}>Engenharia de Alimentos</Select.Option>
                                        <Select.Option value={214}>Teoria do Direito</Select.Option>
                                        <Select.Option value={215}>Direito Público</Select.Option>
                                        <Select.Option value={216}>Direito Privado</Select.Option>
                                        <Select.Option value={217}>Direitos Especiais</Select.Option>
                                        <Select.Option value={218}>Administração de Empresas</Select.Option>
                                        <Select.Option value={219}>Administração de Setores Específicos</Select.Option>
                                        <Select.Option value={220}>Ciências Contábeis</Select.Option>
                                        <Select.Option value={221}>Teoria da Administração Pública</Select.Option>
                                        <Select.Option value={222}>Administração Pública do Brasil</Select.Option>
                                        <Select.Option value={223}>Administração Pública da Europa</Select.Option>
                                        <Select.Option value={224}>Administração Pública da América Latina</Select.Option>
                                        <Select.Option value={225}>Administração Pública da América do Norte</Select.Option>
                                        <Select.Option value={226}>Administração Pública da Ásia e Oceania</Select.Option>
                                        <Select.Option value={227}>Administração Pública da África</Select.Option>
                                        <Select.Option value={228}>Administração Federal</Select.Option>
                                        <Select.Option value={229}>Administração Municipal</Select.Option>
                                        <Select.Option value={230}>Administração Regional</Select.Option>
                                        <Select.Option value={231}>Administração Estadual</Select.Option>
                                        <Select.Option value={232}>Desburocratização</Select.Option>
                                        <Select.Option value={233}>Reforma Administrativa</Select.Option>
                                        <Select.Option value={234}>Governo Eletrônico / Digital</Select.Option>
                                        <Select.Option value={235}>Inovação na Gestão Pública</Select.Option>
                                        <Select.Option value={236}>Modernização Administrativa</Select.Option>
                                        <Select.Option value={237}>Tecnologia da Informação</Select.Option>
                                        <Select.Option value={238}>Atendimento ao Público</Select.Option>
                                        <Select.Option value={239}>Satisfação do Usuário</Select.Option>
                                        <Select.Option value={240}>Código de Conduta</Select.Option>
                                        <Select.Option value={241}>Corrupção Administrativa</Select.Option>
                                        <Select.Option value={242}>Ética no Setor Público</Select.Option>
                                        <Select.Option value={243}>Fiscalização da Moralidade Pública</Select.Option>
                                        <Select.Option value={244}>Avaliação de Desempenho (Setor Público)</Select.Option>
                                        <Select.Option value={245}>Consórcio Público</Select.Option>
                                        <Select.Option value={246}>Contrato de gestão</Select.Option>
                                        <Select.Option value={247}>Controle de Gestão</Select.Option>
                                        <Select.Option value={248}>Indicador de Desempenho (Setor Público)</Select.Option>
                                        <Select.Option value={249}>Produtividade</Select.Option>
                                        <Select.Option value={250}>Auditoria</Select.Option>
                                        <Select.Option value={251}>Accountability (Prestação Pública de Contas)</Select.Option>
                                        <Select.Option value={252}>Controle Social</Select.Option>
                                        <Select.Option value={253}>Ouvidoria</Select.Option>
                                        <Select.Option value={254}>Concessão de Serviços Públicos</Select.Option>
                                        <Select.Option value={255}>Parcerias no Setor Público</Select.Option>
                                        <Select.Option value={256}>Parcerias Público-Privadas</Select.Option>
                                        <Select.Option value={257}>Técnicas Gerenciais no Setor Público</Select.Option>
                                        <Select.Option value={258}>Alta Administração Pública</Select.Option>
                                        <Select.Option value={259}>Gestor Público</Select.Option>
                                        <Select.Option value={260}>Liderança</Select.Option>
                                        <Select.Option value={261}>Função Pública</Select.Option>
                                        <Select.Option value={262}>Gestão de Pessoas no Setor Público</Select.Option>
                                        <Select.Option value={263}>Relações de Trabalho no Setor Público</Select.Option>
                                        <Select.Option value={264}>Capacitação Profissional no Setor Público</Select.Option>
                                        <Select.Option value={265}>Compras Governamentais</Select.Option>
                                        <Select.Option value={266}>Terceirização</Select.Option>
                                        <Select.Option value={267}>Empresa Pública</Select.Option>
                                        <Select.Option value={268}>Regulação – Agência Reguladora</Select.Option>
                                        <Select.Option value={269}>Cooperação Internacional</Select.Option>
                                        <Select.Option value={270}>Terceiro Setor – ONG’s – OSCIP</Select.Option>
                                        <Select.Option value={271}>Políticas Públicas e Uso de Evidências</Select.Option>
                                        <Select.Option value={272}>Governança e Gestão de Riscos</Select.Option>
                                        <Select.Option value={273}>Previdência</Select.Option>
                                        <Select.Option value={274}>Teoria Econômica</Select.Option>
                                        <Select.Option value={275}>Métodos Quantitativos em Economia</Select.Option>
                                        <Select.Option value={276}>Economia Monetária e Fiscal</Select.Option>
                                        <Select.Option value={277}>Crescimento, Flutuações e Planejamento Econômico</Select.Option>
                                        <Select.Option value={278}>Economia Internacional</Select.Option>
                                        <Select.Option value={279}>Economia dos Recursos Humanos</Select.Option>
                                        <Select.Option value={280}>Economia Industrial</Select.Option>
                                        <Select.Option value={281}>Economia do Bem-Estar Social</Select.Option>
                                        <Select.Option value={282}>Economia Regional e Urbana</Select.Option>
                                        <Select.Option value={283}>Economias Agrária e dos Recursos Naturais</Select.Option>
                                        <Select.Option value={284}>Fundamentos de Arquitetura e Urbanismo</Select.Option>
                                        <Select.Option value={285}>Projeto de Arquitetuta e Urbanismo</Select.Option>
                                        <Select.Option value={286}>Tecnologia de Arquitetura e Urbanismo</Select.Option>
                                        <Select.Option value={287}>Paisagismo</Select.Option>
                                        <Select.Option value={288}>Fundamentos do Planejamento Urbano e Regional</Select.Option>
                                        <Select.Option value={289}>Métodos e Técnicas do Planejamento Urbano e Regional</Select.Option>
                                        <Select.Option value={290}>Serviços Urbanos e Regionais</Select.Option>
                                        <Select.Option value={291}>Distribuição Espacial</Select.Option>
                                        <Select.Option value={292}>Tendência Populacional</Select.Option>
                                        <Select.Option value={293}>Componentes da Dinâmica Demográfica</Select.Option>
                                        <Select.Option value={294}>Nupcialidade e Família</Select.Option>
                                        <Select.Option value={295}>Demografia Histórica</Select.Option>
                                        <Select.Option value={296}>Política Pública e População</Select.Option>
                                        <Select.Option value={297}>Fontes de Dados Demográficos</Select.Option>
                                        <Select.Option value={298}>Teoria da Informação</Select.Option>
                                        <Select.Option value={299}>Biblioteconomia</Select.Option>
                                        <Select.Option value={300}>Arquivologia</Select.Option>
                                        <Select.Option value={301}>Museologia</Select.Option>
                                        <Select.Option value={302}>Teoria da Comunicação</Select.Option>
                                        <Select.Option value={303}>Jornalismo e Editoração</Select.Option>
                                        <Select.Option value={304}>Rádio e Televisão</Select.Option>
                                        <Select.Option value={305}>Relações Públicas e Propaganda</Select.Option>
                                        <Select.Option value={306}>Comunicação Visual</Select.Option>
                                        <Select.Option value={307}>Fundamentos do Serviço Social</Select.Option>
                                        <Select.Option value={308}>Serviço Social Aplicado</Select.Option>
                                        <Select.Option value={309}>Economia Doméstica</Select.Option>
                                        <Select.Option value={310}>Programação Visual</Select.Option>
                                        <Select.Option value={311}>Desenho de Produto</Select.Option>
                                        <Select.Option value={312}>História da Filosofia</Select.Option>
                                        <Select.Option value={313}>Metafísica</Select.Option>
                                        <Select.Option value={314}>Lógica</Select.Option>
                                        <Select.Option value={315}>Ética</Select.Option>
                                        <Select.Option value={316}>Epistemologia</Select.Option>
                                        <Select.Option value={317}>Filosofia Brasileira</Select.Option>
                                        <Select.Option value={318}>Fundamentos da Sociologia</Select.Option>
                                        <Select.Option value={319}>Sociologia do Conhecimento</Select.Option>
                                        <Select.Option value={320}>Sociologia do Desenvolvimento</Select.Option>
                                        <Select.Option value={321}>Sociologia Urbana</Select.Option>
                                        <Select.Option value={322}>Sociologia Rural</Select.Option>
                                        <Select.Option value={323}>Sociologia da Saúde</Select.Option>
                                        <Select.Option value={324}>Outras Sociologias Específicas</Select.Option>
                                        <Select.Option value={325}>Teoria Antropológica</Select.Option>
                                        <Select.Option value={326}>Etnologia Indígena</Select.Option>
                                        <Select.Option value={327}>Antropologia Urbana</Select.Option>
                                        <Select.Option value={328}>Antropologia Rural</Select.Option>
                                        <Select.Option value={329}>Antropologia das Populações Afro-Brasileiras</Select.Option>
                                        <Select.Option value={330}>Teoria e Método em Arqueologia</Select.Option>
                                        <Select.Option value={331}>Arqueologia Pré-Histórica</Select.Option>
                                        <Select.Option value={332}>Arqueologia Histórica</Select.Option>
                                        <Select.Option value={333}>Teoria e Filosofia da História</Select.Option>
                                        <Select.Option value={334}>História Antiga e Medieval</Select.Option>
                                        <Select.Option value={335}>História Moderna e Contemporânea</Select.Option>
                                        <Select.Option value={336}>História da América</Select.Option>
                                        <Select.Option value={337}>História do Brasi</Select.Option>
                                        <Select.Option value={338}>História das Ciências</Select.Option>
                                        <Select.Option value={339}>Geografia Humana</Select.Option>
                                        <Select.Option value={340}>Geografia Regional</Select.Option>
                                        <Select.Option value={341}>Fundamentos e Medidas da Psicologia</Select.Option>
                                        <Select.Option value={342}>Psicologia Experimental</Select.Option>
                                        <Select.Option value={343}>Psicologia Fisiológica</Select.Option>
                                        <Select.Option value={344}>Psicologia Comparativa</Select.Option>
                                        <Select.Option value={345}>Psicologia Social</Select.Option>
                                        <Select.Option value={346}>Psicologia Cognitiva</Select.Option>
                                        <Select.Option value={347}>Psicologia do Desenvolvimento Humano</Select.Option>
                                        <Select.Option value={348}>Psicologia do Ensino e da Aprendizagem</Select.Option>
                                        <Select.Option value={349}>Psicologia do Trabalho e Organizacional</Select.Option>
                                        <Select.Option value={350}>Tratamento e Prevenção Psicológica</Select.Option>
                                        <Select.Option value={351}>Fundamentos da Educação</Select.Option>
                                        <Select.Option value={352}>Administração Educacional</Select.Option>
                                        <Select.Option value={353}>Planejamento e Avaliação Educacional</Select.Option>
                                        <Select.Option value={354}>Ensino-Aprendizagem</Select.Option>
                                        <Select.Option value={355}>Currículo</Select.Option>
                                        <Select.Option value={356}>Orientação e Aconselhamento</Select.Option>
                                        <Select.Option value={357}>Tópicos Específicos de Educação</Select.Option>
                                        <Select.Option value={358}>Teoria Política</Select.Option>
                                        <Select.Option value={359}>Estado e Governo</Select.Option>
                                        <Select.Option value={360}>Comportamento Político</Select.Option>
                                        <Select.Option value={361}>Políticas Públicas</Select.Option>
                                        <Select.Option value={362}>Política Internacional</Select.Option>
                                        <Select.Option value={363}>História da Teologia</Select.Option>
                                        <Select.Option value={364}>Teologia Moral</Select.Option>
                                        <Select.Option value={365}>Teologia Sistemática</Select.Option>
                                        <Select.Option value={366}>Teologia Pastoral</Select.Option>
                                        <Select.Option value={367}>Teoria e Análise Linguística</Select.Option>
                                        <Select.Option value={368}>Fisiologia da Linguagem</Select.Option>
                                        <Select.Option value={369}>Linguística Histórica</Select.Option>
                                        <Select.Option value={370}>Sociolinguística e Dialetologia</Select.Option>
                                        <Select.Option value={371}>Psicolinguística</Select.Option>
                                        <Select.Option value={372}>Linguística Aplicada</Select.Option>
                                        <Select.Option value={373}>Língua Portuguesa</Select.Option>
                                        <Select.Option value={374}>Línguas Estrangeiras Modernas</Select.Option>
                                        <Select.Option value={375}>Línguas Clássicas</Select.Option>
                                        <Select.Option value={376}>Línguas Indígenas</Select.Option>
                                        <Select.Option value={377}>Teoria Literária</Select.Option>
                                        <Select.Option value={378}>Literatura Brasileira</Select.Option>
                                        <Select.Option value={379}>Outras Literaturas Vernáculas</Select.Option>
                                        <Select.Option value={380}>Literaturas Estrangeiras Modernas</Select.Option>
                                        <Select.Option value={381}>Literaturas Clássicas</Select.Option>
                                        <Select.Option value={382}>Literatura Comparada</Select.Option>
                                        <Select.Option value={383}>Fundamentos e Crítica das Artes</Select.Option>
                                        <Select.Option value={384}>Artes Plásticas</Select.Option>
                                        <Select.Option value={385}>Música</Select.Option>
                                        <Select.Option value={386}>Dança</Select.Option>
                                        <Select.Option value={387}>Teatro</Select.Option>
                                        <Select.Option value={388}>Ópera</Select.Option>
                                        <Select.Option value={389}>Fotografia</Select.Option>
                                        <Select.Option value={390}>Cinema</Select.Option>
                                        <Select.Option value={391}>Artes do Vídeo</Select.Option>
                                        <Select.Option value={392}>Educação Artística</Select.Option>
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='cargaHoraria'
                            render={({ field }) => (
                                <Form.Item label={'Carga Horária:'}>
                                    <Slider
                                        {...field}
                                        range
                                        marks={{
                                            0: '0h',
                                            200: '200h',
                                        }}
                                        step={10}
                                        max={200}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card>
                        <Controller
                            control={register.control}
                            name='instCertificadora'
                            render={({ field }) => (
                                <Form.Item label={'Instituição Certificadora:'}>
                                    < Select
                                        {...field}
                                        placeholder={'Todas as Instituições'}
                                        mode='multiple'
                                        showArrow
                                        style={{ width: '100%' }}
                                    >
                                        <Select.Option value={1}>IFCE</Select.Option>
                                        <Select.Option value={2}>UFC</Select.Option>
                                        <Select.Option value={3}>UFRN</Select.Option>
                                        <Select.Option value={4}>MEC</Select.Option>
                                        <Select.Option value={5}>UECE</Select.Option>
                                        <Select.Option value={6}>UFRJ</Select.Option>
                                        <Select.Option value={7}>USP</Select.Option>
                                    </Select >
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <ItemSideFilter>
                        <Button type='primary' htmlType='submit' >Aplicar Filtro</Button>
                    </ItemSideFilter>
                </Form>
            </FormProvider>
        </Col >
    )
}