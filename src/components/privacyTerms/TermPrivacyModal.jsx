import { Button, Modal, Typography } from "antd";

export default function TermPrivacyModal({
  termPrivacyVisible,
  setTermPrivacyVisible,
  setTermVisible,
}) {
  return (
    <Modal
      width={"70%"}
      title="Política de Privacidade Repositório PlaforEDU"
      open={termPrivacyVisible}
      onOk={() => setTermPrivacyVisible(false)}
      onCancel={() => setTermPrivacyVisible(false)}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={() => setTermPrivacyVisible(false)}
        >
          OK
        </Button>,
      ]}
    >
      <Typography.Title level={5}>1. QUEM SOMOS?</Typography.Title>
      <Typography.Paragraph>
        Somos uma plataforma de ensino que tem como objetivo proporcionar um
        espaço onde os servidores podem encontrar capacitações com a finalidade
        de potencializar sua atuação na Educação Profissional e Tecnológica, no
        âmbito da Rede Federal de Educação Profissional, Científica e
        Tecnológica (RFEPCT).
      </Typography.Paragraph>

      <Typography.Paragraph>
        A PlaforEDU respeita sua privacidade e está comprometida com a proteção
        dos dados pessoais em conformidade com a Lei Geral de Proteção de Dados
        (LGPD), Lei nº 13.709/2018.
      </Typography.Paragraph>

      <Typography.Paragraph>
        Os dados coletados pela PlaforEDU são classificados como dados
        anonimizados, conforme definido pela legislação vigente. Isso significa
        que não realizamos a coleta de dados pessoais dos usuários que acessam o
        sistema.
      </Typography.Paragraph>

      <Typography.Title level={5}>2. USO DO GOOGLE ANALYTICS:</Typography.Title>

      <Typography.Paragraph>
        Utilizamos o Google Analytics para coletar informações sobre o uso da
        plataforma e para otimizar este serviço e a experiência de nossos
        usuários. O Google Analytics é um serviço de análise web fornecido pela
        Google Inc. (Google), que usa cookies para coletar dados anônimos.
        Através dele, obtemos informações sobre a sua utilização do nosso site,
        que podem ser transmitidas e armazenadas pela Google em seus próprios
        servidores.
      </Typography.Paragraph>

      <Typography.Title level={5}>3. DADOS COLETADOS:</Typography.Title>

      <Typography.Paragraph>
        Através do Google Analytics, coletamos dados de forma anônima. Isso
        inclui informações como páginas visitadas, tempo de visita, localização
        geográfica aproximada, fonte de referência, tipo de dispositivo, e
        sistema operacional. Não coletamos informações que permitam identificar
        pessoalmente o usuário (confirmar endereço de IP anônimo).
      </Typography.Paragraph>

      <Typography.Title level={5}>
        4. COOKIES E TECNOLOGIAS SEMELHANTES:
      </Typography.Title>

      <Typography.Paragraph>
        O uso de cookies nos permite melhorar a experiência do usuário em nosso
        site. Os cookies são pequenos arquivos de texto armazenados em seu
        dispositivo que nos ajudam a entender como os visitantes interagem com
        nosso site. Você pode configurar seu navegador para recusar todos os
        cookies ou indicar quando um cookie está sendo enviado. Para saber mais,
        acesse nossa{" "}
        <Typography.Link
          onClick={() => {
            setTermVisible(true);
            setTermPrivacyVisible(false);
          }}
        >
          política de cookies
        </Typography.Link>
        .
      </Typography.Paragraph>

      <Typography.Title level={5}>5. SEGURANÇA DOS DADOS:</Typography.Title>

      <Typography.Paragraph>
        Tomamos medidas para proteger os dados coletados contra acesso não
        autorizado, uso indevido ou divulgação. No entanto, nenhum método de
        transmissão pela internet ou de armazenamento eletrônico é totalmente
        seguro. Quaisquer usos feitos pelo Google ou seus parceiros dos Dados do
        Usuário, coletados por meio do google analytics será de responsabilidade
        única e exclusiva do Google, conforme sua própria política de
        privacidade, que você pode ter acesso clicando{" "}
        <Typography.Link
          href="https://policies.google.com/privacy?hl=pt-BR"
          target="_blank"
        >
          aqui
        </Typography.Link>
        .
      </Typography.Paragraph>

      <Typography.Title level={5}>
        6. ALTERAÇÕES À POLÍTICA DE PRIVACIDADE:
      </Typography.Title>

      <Typography.Paragraph>
        Podemos atualizar nossa Política de Privacidade de tempos em tempos.
        Qualquer alteração será efetiva imediatamente após a publicação da
        versão revisada em nosso site.
      </Typography.Paragraph>

      <Typography.Title level={5}>7. CONTATO:</Typography.Title>

      <Typography.Paragraph>
        Se tiver dúvidas sobre nossa Política de Privacidade, por favor, entre
        em contato conosco pelo e-mail plafor@maracanau.ifce.edu.br
      </Typography.Paragraph>
    </Modal>
  );
}
