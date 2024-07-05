import { Button, Modal, Typography } from "antd";

export default function TermCookiesModal({ termVisible, setTermVisible }) {
  return (
    <Modal
      width={"70%"}
      title="Política de Cookies"
      open={termVisible}
      onOk={() => setTermVisible(false)}
      onCancel={() => setTermVisible(false)}
      footer={[
        <Button key="ok" type="primary" onClick={() => setTermVisible(false)}>
          OK
        </Button>,
      ]}
    >
      <Typography.Paragraph>
        Este documento apresenta a Política de Cookies do site PlaforEDU,
        projetada para proporcionar um espaço onde servidores podem encontrar
        capacitações com a finalidade de potencializar sua atuação na Educação
        Profissional e Tecnológica, no âmbito da Rede Federal de Educação
        Profissional, Científica e Tecnológica.
      </Typography.Paragraph>

      <Typography.Title level={5}>1. Contextualização</Typography.Title>

      <Typography.Paragraph>
        A presente Política de Cookies do PlaforEDU tem como objetivo fornecer
        orientações sobre como ocorre o tratamento dos cookies relativos aos
        usuários que visitam e utilizam as funcionalidades disponíveis nesta
        plataforma. Cookies são arquivos auxiliares geridos pelo seu navegador
        para “memorizar” a visita a páginas na internet.
      </Typography.Paragraph>

      <Typography.Title level={5}>2. Escopo</Typography.Title>

      <Typography.Paragraph>
        A presente Política estabelece as informações relativas ao uso de
        cookies na PlaforEDU, especialmente no que concerne à relação com dados
        pessoais dos Usuários durante a sua navegação.
      </Typography.Paragraph>

      <Typography.Title level={5}>3. Aplicabilidade</Typography.Title>

      <Typography.Paragraph>
        Esta Política busca conferir a transparência e a compreensão, pelos
        usuários, sobre as possíveis maneiras como os seus dados pessoais são
        geridos, por meio dos cookies, em sua interação com a plataforma
        PlaforEDU.
      </Typography.Paragraph>

      <Typography.Title level={5}>4. Objetivos</Typography.Title>

      <Typography.Paragraph>
        São objetivos desta Política de Cookies:
      </Typography.Paragraph>

      <ul>
        <li>
          <Typography.Paragraph>
            Assegurar o compromisso com o cumprimento das legislações de
            proteção de dados pessoais aplicáveis; e
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            Informar aos Usuários sobre como ocorrem os tratamentos das suas
            informações, por meio de cookies, durante a utilização da PlaforEDU.
          </Typography.Paragraph>
        </li>
      </ul>

      <Typography.Title level={5}>5. Política de Cookies</Typography.Title>

      <Typography.Text strong>5.1. Definição</Typography.Text>

      <Typography.Paragraph>
        Os cookies são pequenos arquivos de texto depositados por um site
        servidor no dispositivo do usuário (computador, celular, tablets, dentre
        outros) quando da sua visita. Os cookies servem para o site lembrar de
        algumas informações relativas àquela navegação, associar e distinguir os
        usuários.
      </Typography.Paragraph>

      <Typography.Text strong>5.2. Cookies usados na PlaforEDU</Typography.Text>

      <Typography.Paragraph>
        A PlaforEDU armazena 2 (dois) tipos de cookies distintos, sendo eles:
        (i) operacionais/técnicos; e (ii) analíticos. As informações sobre cada
        tipo de cookies, por categoria, se encontram abaixo.
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>1). </Typography.Text> Os cookies técnicos se
        destinam a viabilizar o ato de navegação no website, operando para que
        as funcionalidades mais básicas efetivamente sejam oferecidas ao
        Usuário, tais como:
      </Typography.Paragraph>

      <ul>
        <li>
          <Typography.Paragraph>
            ativar funcionalidades essenciais, como software e antivírus;
          </Typography.Paragraph>
        </li>

        <li>
          <Typography.Paragraph>
            dispor nosso conteúdo de forma adequada ao tamanho da sua tela,
            velocidade de conexão e tipo de navegador;
          </Typography.Paragraph>
        </li>

        <li>
          <Typography.Paragraph>lembrar do seu acesso; e</Typography.Paragraph>
        </li>

        <li>
          <Typography.Paragraph>
            compreender o seu comportamento de navegação e como a plataforma
            está sendo usada.
          </Typography.Paragraph>
        </li>
      </ul>

      <Typography.Paragraph>
        Normalmente, tais cookies só são configurados em resposta às suas ações
        que correspondem a uma solicitação de serviços, por exemplo: definir as
        suas preferências de privacidade, iniciar sessão ou preencher
        formulários.
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>2). </Typography.Text> Já os cookies analíticos
        registram os dados de uso do website para que possamos aprimorá-lo
        futuramente, como os dados de audiência da página e de fontes de
        tráfego.
      </Typography.Paragraph>

      <Typography.Paragraph>
        A PlaforEDU utiliza cookies analíticos do Google Analytics para geração
        de dados estatísticos agregados de uso, sem individualização desses.
      </Typography.Paragraph>

      <Typography.Text strong>5.3. Controle de Cookies</Typography.Text>

      <Typography.Paragraph>
        Caso o Usuário não deseje que os cookies mencionados sejam utilizados
        quando da sua navegação no nosso website, é possível optar por recusar,
        desabilitar, ou apagar os registros de cookies através das configurações
        do navegador utilizado. Chamamos a atenção para o fato de que, ao fazer
        isso, algumas áreas, ferramentas e funcionalidades poderão ser
        comprometidas, afetando, dessa forma, a experiência do usuário.
      </Typography.Paragraph>

      <Typography.Paragraph>
        É possível desabilitar os cookies diretamente no seu navegador.
      </Typography.Paragraph>
    </Modal>
  );
}
