import { useState } from "react";
import { Button, Grid, Modal, Typography } from "antd";
import DocumentsVisualization from "../components/documents/DocumentsVisualization";

const { Title, Paragraph } = Typography;

function Icon() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [modalCriacao, setModalCriacaoIsVisible] = useState(false);
  const [modalForgep, setModalForgepIsVisible] = useState(false);
  const [modalGT, setModalGTIsVisible] = useState(false);
  const [modalPlafor, setModalPlaforIsVisible] = useState(false);
  const [modalPlaforedu, setModalPlaforeduIsVisible] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="inherit"
      height="450"
      style={{ height: `${screens.md ? "420px" : "auto"}` }}
      viewBox="40 0 849 478"
    >
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H960V540H0z"></path>
        </clipPath>
      </defs>

      <g clipPath="url(#clip0)">
        {/* fundo */}
        <path fill="#FFF" d="M0 0H960V540H0z"></path>
        {/* sombra */}
        <path
          fill="#2C56A2"
          fillRule="evenodd"
          d="M-27.407 236.77l1.026 15.446 230.304 46.025 2.913.621 1.675.703 2.51.67 1.7 1.086 1.704 1.131 1.296 1.135.892 1.162.919 1.59-4.107-18.951-.486-1.189-.916-1.183-1.272-1.114-1.704-1.131-2.129-1.08-2.109-1.104-1.647-.275-2.936-.619-227.633-42.923zm347.045 37.438l.35 5.269-.886 5.397-1.654 5.402-3.697 5.967-4.936 6.05-6.13 6.128-5.023 4.043-9.369 6.728-31.343 20.491-2.752 1.811-2.323 1.805-2.321 2.167-1.486 2.156-1.059 2.106-.725 1.677-.675 2.103.135 2.026 4.242 20.978-.134-2.027.291-2.077.676-2.081 1.486-2.156 1.51-2.113 1.895-1.777 2.319-2.212 2.726-2.194 30.889-20.867 8.962-6.724 5.026-3.998 6.529-6.585 4.508-6.021 3.698-5.967 1.648-5.832.838-5.777-.35-5.269-2.865-18.627zm426.805 20.293l-1.214 6.233-1.373 4.184-4.027 6.804-38.149 53.215-1.106 2.087-1.03 2.533-.266 2.46-.968 22.568.265-2.483.65-2.486 1.507-2.158 37.614-54.808 4.072-6.807 1.706-4.614.834-6.184 1.485-20.544zm-169.528-23.462l-4.028.652-3.237.644-3.645.627-3.211 1.027-3.188 1.026-3.21 1.05-2.35 1.4-2.758 1.381-1.59.92-1.966 1.375-110.426 97.252-10.097 8.021-11.318 7.694-13.036 7.017-13.827 7.025-15.145 5.913-15.982 5.561-16.82 5.21-17.713 4.026-17.74 3.62-18.246 2.455-18.253 2.026-18.357.789-17.553-.034-17.226-.914-16.091-2.211-10.745-1.73-14.527-3.513-13.339-4.023-11.389-4.966-9.368-5.529-7.75-6.022-5.727-6.54-4.13-6.692-2.514-7.206 5.534 21.706 2.49 7.185 4.536 6.665 5.801 6.988 7.75 6.021 9.372 5.914 10.961 4.995 13.387 4.403 14.507 3.56 10.362 1.755 16.069 2.213 16.84.895 17.556.078 17.928-.783 17.874-1.593 18.221-2.838 17.335-3.594 17.304-4.043 16.822-5.188 15.984-5.539 14.688-6.312 13.85-7.026 12.604-7.395 11.316-7.717 9.714-7.996 109.428-100.013 1.945-1.373 1.54-1.324 2.35-1.399 2.828-1.002 2.735-1.381 3.21-1.05 3.211-1.027 3.216-.62 3.643-.649 3.62-.67 11.821-.785 3.676.186 4.103.134 3.724.567 4.129.54 3.702.569 2.486.649 3.318.594 2.942 1.049 2.945 1.432 2.513 1.055 2.156 1.485 2.109 1.104 1.346 1.539 1.303 1.565.966 1.948.919 1.59.108 1.621.298-20.035-.49-1.596-.535-1.592-.92-1.59-1.324-1.541-1.729-1.513-2.131-1.103-2.134-1.487-2.512-1.054-2.942-1.049-2.917-1.005-3.347-1.022-2.487-.671-3.747-.566-4.107-.541-3.673-.141-4.104-.157-4.101-.112zm-10.77 108.617l.246 22.442 1.378 8.503 2.644 8.825 4.241 8.698 6.318 8.966 7.935 8.475 9.561 8.773 11.178 8.26 13.199 7.695 14.798 7.612 16.386 6.647 18.01 6.584 19.956 5.234 318.265 78.159-1.97-29.677-315.489-73.481-19.979-5.232-18.387-6.13-16.792-6.643-14.771-7.184-13.2-7.718-11.56-8.234-9.533-8.346-7.936-8.474-6.291-8.584-4.235-8.268-3.027-8.8-.945-8.102z"
        ></path>
        {/* caminho */}
        <path
          fill="#E0EEF8"
          fillRule="evenodd"
          d="M-13.077 199.836l-.784.459-2.071.138-.356.43-.81.054-12.362 4.914 2.053 30.939 227.633 42.923 2.936.619 1.647.275 2.109 1.104 2.129 1.08 1.704 1.131 1.272 1.114.916 1.183.486 1.189.513 1.594-.323 1.266-.298 1.648-.726 1.676-1.112 1.296-1.514 1.728-1.941 1.758-2.346 1.806-2.755 1.427-33.074 18.932-10.611 6.426-6.642 4.535-8.534 6.695-7.312 7.044-6.073 7.324-4.837 6.857-3.588 7.611-2.401 7.103-.323 7.394.885 6.862 2.514 7.206 4.13 6.692 5.727 6.54 7.75 6.022 9.368 5.53 11.389 4.965 13.339 4.023 14.527 3.513 10.745 1.73 16.091 2.211 17.226.915 17.553.033 18.357-.789 18.253-2.026 18.246-2.455 17.74-3.62 17.713-4.025 16.82-5.211 15.982-5.561 15.145-5.913 13.827-7.024 13.036-7.017 11.318-7.695 10.097-8.021 110.426-97.252 1.966-1.375 1.59-.919 2.758-1.382 2.35-1.4 3.21-1.05 3.188-1.026 3.211-1.027 3.645-.627 3.237-.644 4.028-.652 11.393-.756 4.101.112 4.104.157 3.673.141 4.107.541 3.747.566 2.487.672 3.347 1.021 2.917 1.005 2.942 1.049 2.512 1.055 2.134 1.486 2.132 1.103 1.728 1.513 1.324 1.541.92 1.59.535 1.593.49 1.595-.275 1.647-.701 1.698-.726 1.676-1.513 1.729-46.625 48.87-6.049 7.345-3.346 5.13-3.561 8.016-2.326 7.89-.241 8.632.945 8.102 3.027 8.801 4.235 8.267 6.291 8.584 7.936 8.475 9.533 8.345 11.56 8.234 13.2 7.718 14.771 7.184 16.792 6.643 18.387 6.13 19.979 5.232 315.489 73.481-6.24-94.009-264.215-51.961-5.377-1.272-3.296-.595-4.638-1.728-4.211-1.778-4.187-1.735-3.402-1.855-3.398-1.787-2.595-2.293-2.188-2.297-2.21-2.296-1.357-2.375-.972-2.378-.59-2.426-.136-2.049.266-2.461 1.03-2.533 1.106-2.086 38.149-53.216 4.027-6.804 1.373-4.184 1.214-6.232-.431-6.508-2-5.589-2.858-5.917-4.431-5.428-5.67-5.345-6.455-4.909-7.237-4.427-8.453-4.347-9.257-3.864-10.043-3.426-10.83-3.352-11.228-2.535-11.991-2.46-12.824-2.044-13.17-1.138-8.594-.674-12.741-.805-13.091.055-12.641.025-25.242 1.675-12.15 1.621-12.122 2.049-11.713 2.428-11.286 2.378-10.804 3.159-10.395 3.54-9.555 3.914-9.124 4.292-8.691 4.67-7.405 4.97-122.003 89.45-3.157 1.837-1.946 1.351-3.563 1.865-3.993 1.509-3.974 1.462-3.993 1.509-4.405 1.107-4.449 1.109-4.404 1.129-4.48.298-4.861.707-4.459.296-4.528-.084-4.487-.132-4.08-.136-4.13-.54-3.775-.993-3.704-.953-2.126-.673-2.896-1.052-2.562-1.458-2.159-1.508-1.728-1.513-.946-1.973-.918-1.568-.541-2.022-.135-2.026.675-2.103.725-1.677 1.059-2.105 1.486-2.157 2.321-2.167 2.323-1.805 2.752-1.811 31.343-20.491 9.369-6.728 5.023-4.042 6.13-6.129 4.936-6.05 3.697-5.967 1.654-5.402.886-5.397-.35-5.269-1.945-4.778-2.752-4.318-3.966-4.215-4.729-3.779-5.968-3.698-7.15-2.782-7.94-2.752-9.129-2.267-9.934-1.783-272.312-44.457z"
        ></path>

        {/* titulo */}
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="37"
          fontWeight="700"
          transform="translate(337.463 51)"
        >
          Histórico Plafor
        </text>
      </g>

      <g
        id="1"
        onClick={() => {
          setModalCriacaoIsVisible(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(84.438 89)"
        >
          Dezembro
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(91.184 106)"
        >
          de 2008
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(57.021 128)"
        >
          Instituição da RFEPCT
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(67.268 143)"
        >
          com 144 unidades
        </text>

        {/* base 1 */}
        <path
          onClick={() => {
            setModalCriacaoIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#00B3D9"
          fillRule="evenodd"
          d="M116.989 164.022c-13.412 0-23.989 10.572-23.989 24 0 13.001 10.577 23.956 23.989 23.956 13.007 0 24.011-10.955 24.011-23.956 0-13.428-11.004-24-24.011-24z"
        ></path>

        {/* icon 1 */}
        <path
          onClick={() => {
            setModalCriacaoIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#FFF"
          fillRule="evenodd"
          d="M113.472 176.652l-.836 1.652h-1.917l-.836-1.652zm-.286 3.038c.551 0 .836.551.836.816 0 .551-.285.846-.836.846h-3.018c-.551 0-.836-.295-.836-.846 0-.265.285-.816.836-.816zm15.162 7.984v3.304h-9.656v-3.304zm0 4.956v3.038h-9.656v-3.038zm-15.427-9.626c1.917 1.101 3.304 2.753 4.405 4.67v11.298h-12.664v-2.753c0-6.342 1.652-10.747 5.771-13.215zm15.427 14.316v3.018h-9.656v-3.018zM107.13 175l1.937 3.589c-.836.265-1.387 1.101-1.387 1.917 0 .846.286 1.397.836 1.948-4.405 3.303-5.506 8.259-5.506 13.765v4.119h14.316v1.652H130v-15.682h-11.858c-.816-1.652-1.917-3.039-3.304-3.854.551-.551.836-1.102.836-1.948 0-.816-.551-1.652-1.387-1.917l1.938-3.589zM90.411 187.011v1.139c-.935.295-1.402 1.139-1.402 2.278 0 1.435.935 2.279 1.87 2.279.467 0 .71.569.71.865 0 .569-.243.844-.71.844-.225 0-.468-.275-.468-.844H89.01c0 1.139.467 1.983 1.402 2.278v1.139h1.178v-1.139c.935-.295 1.402-1.139 1.402-2.278 0-1.14-.935-2.279-2.112-2.279-.225 0-.468-.569-.468-.865 0-.569.243-.844.468-.844.467 0 .71.275.71.844h1.402c0-1.139-.467-1.983-1.402-2.278v-1.139z"
        ></path>

        {/* haste 1 */}
        <path
          fill="none"
          stroke="#4A696C"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M118.5 237.482V212.5z"
        ></path>
      </g>

      {/*modal 1*/}
      <Modal
        onCancel={() => {
          setModalCriacaoIsVisible(false);
        }}
        open={modalCriacao}
        destroyOnClose={true}
        closable={false}
        title={<h2>Criação da RFEPCT</h2>}
        footer={[
          <Button
            type="primary"
            key={"back"}
            onClick={() => {
              setModalCriacaoIsVisible(false);
            }}
          >
            Fechar
          </Button>,
        ]}
      >
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          A criação da Rede Federal de Educação Profissional, Científica e
          Tecnológica (RFEPCT), se deu através da{" "}
          <a
            target="blank"
            href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11892.htm"
          >
            Lei nº 11.892, de 29 de dezembro de 2008
          </a>
          .
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Essa mesma lei definiu que os Centros Federais de Educação Tecnológica
          (Cefets) passariam a se chamar Institutos Federais de Educação,
          Ciência e Tecnologia (IFs), sendo declarados como instituições de
          educação superior, básica e profissional equiparados às universidades
          federais.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          A Lei nº 11.892/ 2008, estabeleceu que para a composição das entidades
          da RFEPCT, além dos IFs, seriam vinculadas as seguintes instituições:
          a Universidade Tecnológica Federal do Paraná (UTFPR); o Centro Federal
          de Educação Tecnológica Celso Suckow da Fonseca do Rio de Janeiro
          (Cefet-RJ), o Centro Federal de Educação Tecnológica de Minas Gerais
          (Cefet-MG); as Escolas Técnicas vinculadas às Universidades Federais;
          e o Colégio Pedro II (BRASIL, 2008).
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          As instituições pertencentes a RFEPCT (Institutos Federais, UTFPR,
          Cefet-RJ, Cefet-MG e Escolas Técnicas das Universidades Federais) têm
          como objetivo principal a oferta de educação profissional técnica de
          nível médio, prioritariamente na forma de cursos integrados, para os
          concluintes do ensino fundamental e para o público da educação de
          jovens e adultos. Contudo, promover a integração e a verticalização da
          educação básica à educação profissional, e educação superior é uma de
          suas finalidades desde sua criação.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          O § 5º do Art. 3º da{" "}
          <a
            target="blank"
            href="https://www.planalto.gov.br/ccivil_03/leis/l8948.htm#:~:text=LEI%20No%208.948%2C%20DE%208%20DE%20DEZEMBRO%20DE%201994.&text=Disp%C3%B5e%20sobre%20a%20institui%C3%A7%C3%A3o%20do,Tecnol%C3%B3gica%20e%20d%C3%A1%20outras%20provid%C3%AAncias."
          >
            Lei nº 8.948, de 8 de dezembro de 1994,
          </a>
          proibia a criação de novas unidades de ensino profissional federais, e
          graças a Lei nº 11.195 de 18 de novembro de 2005, que revogou essa
          definição, foi reestabelecida a expansão da oferta de ensino
          profissional mediante a criação de novas unidades. Atualmente, a
          RFEPCT está presente em todos estados do Brasil, sendo referência em
          ensino profissional de qualidade, além de ter muita visibilidade
          também em pesquisa e extensão.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Em consequência da expansão houve o aumento do quadro de servidores,
          tanto de técnicos-administrativos em Educação (TAE), como professores
          da Educação Básica, Técnica e Tecnológica (EBTT), essa velocidade de
          expansão trouxe à tona a necessidade de preparação e capacitação
          inicial e continuada específica para atuação na área de educação
          profissional.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Como as instituições da RFEPCT são autarquias autogerenciadas, a
          composição de seus dirigentes é majoritariamente de docentes
          (técnicos-administrativos também podem exercer essa função) indicados
          aos cargos administrativos (obedecendo alguns critérios). Isso torna a
          necessidade de capacitação constante para o desempenho de funções
          administrativas, além da necessidade de atualização de conhecimentos
          técnicos de sua área de atuação e formação para o desenvolvimento de
          atividades de ensino, pesquisa e extensão na perspectiva das relações
          entre educação e trabalho segundo a proposta institucional de formação
          humana integral.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          E essa foi a necessidade que iniciou o pleito pela inserção na agenda
          política de um plano de formação continuada para os servidores da
          RFEPCT.
        </p>
      </Modal>

      <g
        id="2"
        onClick={() => {
          setModalForgepIsVisible(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(243.119 144)"
        >
          Março/Agosto
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(262.786 161)"
        >
          de 2014
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(239.393 181)"
        >
          Discussões FORGEP
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(261.639 196)"
        >
          sobre Plafor
        </text>

        {/* haste 2*/}
        <path
          fill="none"
          stroke="#4A696C"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M286.5 297.5v-35z"
        ></path>
        {/* base 2*/}
        <path
          onClick={() => {
            setModalForgepIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#FFC335"
          fillRule="evenodd"
          d="M285.773 214.022c-13.111 0-23.773 10.572-23.773 24 0 13.001 10.662 23.956 23.773 23.956 13.543 0 24.204-10.955 24.204-23.956 0-13.428-10.661-24-24.204-24z"
        ></path>
        {/* icon 2*/}
        <path
          onClick={() => {
            setModalForgepIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#FFF"
          fillRule="evenodd"
          d="M298.388 226l-3.377 1.625.612 1.375 3.377-1.625-.612-1.375zM295.623 237.01l-.612 1.354 3.377 1.636.612-1.354-3.377-1.636zM296.01 232.012V234H299v-1.988zM273.853 226l-.842 1.375 3.41 1.625.568-1.375-3.136-1.625zM276.421 237.01l-3.41 1.636.842 1.354 3.136-1.636-.568-1.354zM272.01 232.012V234H275v-1.988zM283 250v.994h4.989V250zM285.361 233.716c.557 0 .825.296.825.867 0 .275-.268.571-.825.571-.289 0-.558-.296-.558-.571 0-.571.269-.867.558-.867zm0-8.003c3.912 0 7.256 3.161 7.256 7.157 0 2.855-1.672 5.414-4.469 6.556l-.289.296v3.425h-1.673v-6.576c.847-.275 1.673-1.142 1.673-1.988 0-1.438-1.115-2.579-2.498-2.579-1.115 0-2.23 1.141-2.23 2.579 0 .846.558 1.713 1.672 1.988v6.576h-1.672v-3.425l-.557-.296c-2.519-1.142-4.191-3.701-4.191-6.556 0-3.996 3.344-7.157 6.978-7.157zm2.498 19.147v1.713h-4.728v-1.713zM285.361 224c-4.748 0-8.361 3.996-8.361 8.87 0 3.426 1.672 6.281 4.459 7.697v2.58h-1.404v1.713h1.404v3.129h7.814v-3.129h1.672v-1.713h-1.672v-2.58c3.055-1.416 4.727-4.271 4.727-7.697 0-4.874-3.912-8.87-8.639-8.87z"
        ></path>
      </g>

      {/*modal 2*/}
      <Modal
        onCancel={() => {
          setModalForgepIsVisible(false);
        }}
        open={modalForgep}
        destroyOnClose={true}
        closable={false}
        title={
          <h2>
            Primeiras Discussões no FORGEP sobre formação dos Servidores da
            RFEPCT
          </h2>
        }
        footer={[
          <Button
            type="primary"
            key={"back"}
            onClick={() => {
              setModalForgepIsVisible(false);
            }}
          >
            Fechar
          </Button>,
        ]}
      >
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          As propostas de elaboração desse plano se deram no ambiente do
          Conselho Nacional das Instituições da Rede Federal de Educação
          Profissional, Científica e Tecnológica (CONIF), que “[...] é uma
          instância de discussão, proposição e promoção de políticas de
          desenvolvimento da formação profissional e tecnológica, pesquisa e
          inovação. Atua no debate e na defesa da educação pública, gratuita e
          de excelência” (CONIF, s.d.).
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Foi no CONIF que se originou o Fórum de Dirigentes de Gestão de
          Pessoas das Instituições Federais de Ensino Técnico, Científico e
          Tecnológico (FORGEP), em 2010, “[...] vislumbrando a possibilidade de
          um trabalho em rede, promovendo a uniformização de procedimentos,
          principalmente para garantir o tratamento isonômico aos servidores,
          concentrando os entendimentos exclusivos referentes aos Institutos
          Federais, otimizando os recursos e permitindo a troca de experiências”
          (FORGEP, s.d.).
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          As primeiras informações dos movimentos das instituições da RFEPCT
          para a definição da agenda e o encaminhamento para formulação do
          PLAFOR, são datadas do ano de 2014, em reuniões do{" "}
          <a target="blank" href="https://forgep.wixsite.com/forgep/noticias">
            FORGEP
          </a>
          . No website da página de notícias do FORGEP é divulgado os seguintes
          informativos:
        </p>

        <div style={{ margin: "0 0 0 30%" }}>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "8%",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            RSC e Progressão para Professor Titular e Plano de Formação
            Continuada serão temas importantes a serem tratados na Décima
            Segunda reunião ordinária do FORGEP
          </p>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "8%",
              fontSize: "12px",
            }}
          >
            No período de 27 de março de 2014 a 28 de março de 2014, será
            realizada no Instituto Federal de Educação, Ciência e Tecnologia de
            Sergipe (IFS) em Aracaju-SE a décima segunda reunião do FORGEP,
            entre os assuntos a serem tratados está o Reconhecimento de Saberes
            e Competências (RSC) cujas diretrizes gerais foram publicadas
            recentemente, a progressão para professor titular também será
            abordada na reunião, o SIGEPE, novo sistema informatizado de gestão
            de pessoas que está sendo criado pelo governo federal e o Plano de
            Formação Continuada para Servidores (PLAFOR). Serão compartilhadas
            experiências pelas áreas de pessoal de algumas instituições federais
            e serão tratados outros assuntos referentes à área de pessoal. Serão
            convidados para reunião além dos integrantes das Instituições
            federais, os representantes(s) do Ministério da Educação (MEC) e do
            CONIF (
            <a target="blank" href="https://forgep.wixsite.com/forgep/noticias">
              FORGEP
            </a>
            , s.d).
          </p>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "8%",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Pontos principais da décima terceira reunião do FORGEP foram
            divulgados
          </p>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "8%",
              fontSize: "12px",
            }}
          >
            No período de 21 de agosto de 2014 a 22 de agosto de 2014, será
            realizada no Instituto Federal de Educação, Ciência e Tecnologia de
            Brasília (IFB) em Brasília-DF a décima terceira reunião do FORGEP,
            entre os assuntos a serem tratados está o PLAFOR, Professor
            Visitante lei 12998/2014, gestão estratégica de pessoas e os grupos
            de trabalho solicitados pelo CONIF. Serão compartilhadas
            experiências pelas áreas de pessoal de algumas instituições federais
            e serão tratados outros assuntos referentes à área de pessoal. Serão
            convidados para reunião além dos integrantes das Instituições
            federais, os representante(s) do Ministério da Educação (MEC) e do
            CONIF (
            <a target="blank" href="https://forgep.wixsite.com/forgep/noticias">
              FORGEP
            </a>
            , s.d).
          </p>
        </div>

        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          As notícias indicam uma considerável movimentação entorno da
          necessidade de formação dos servidores da RFEPCT, uma vez que entre os
          temas discutidos em ambos os encontros apenas o PLAFOR se repetiu.
          Concluídas as argumentações para a entrada na agenda teve início a
          fase de formulação.
        </p>
      </Modal>

      <g
        id="3"
        onClick={() => {
          setModalGTIsVisible(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(408.123 181)"
        >
          Agosto de 2015
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(419.926 202)"
        >
          Criação do GT
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(435.84 217)"
        >
          PLAFOR
        </text>

        {/* base 3 */}
        <path
          onClick={() => {
            setModalGTIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#C234C2"
          fillRule="evenodd"
          d="M458.011 229C444.577 229 434 240.004 434 253.011 434 266.423 444.577 277 458.011 277c13.007 0 23.967-10.577 23.967-23.989 0-13.007-10.96-24.011-23.967-24.011z"
        ></path>

        {/* icon 3 */}
        <path
          onClick={() => {
            setModalGTIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          fill="#FFF"
          fillRule="evenodd"
          d="M457.632 253.44c.253 0 .779.545.779.827 0 .545-.526.807-.779.807-.527 0-1.053-.262-1.053-.807 0-.282.526-.827 1.053-.827zm-1.053-8.43v6.797c-.799.544-1.579 1.371-1.579 2.46 0 1.351 1.053 2.723 2.632 2.723 1.306 0 2.358-1.372 2.358-2.723 0-1.089-.779-1.916-1.579-2.46v-6.797zM457 262v1.989h1.989V262zM448.012 254.006V255H450v-.994zM465 254.006V255h2v-.994zM451.335 259l-1.323 1.333 1.323 1.655 1.665-1.655-1.665-1.333zM463.665 247.012L462 248.346l1.665 1.654 1.323-1.654-1.323-1.334zM463.665 259L462 260.333l1.665 1.655 1.323-1.655-1.323-1.333zM451.335 247.012l-1.323 1.334 1.323 1.654 1.665-1.654-1.665-1.334z"
        ></path>

        {/* haste 3 */}
        <path
          fill="none"
          stroke="#4A696C"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M459.5 311.5v-34.982z"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M458.297 240.584v1.584h-1.85v-1.584zm-.787 3.451c5.846 0 10.64 4.751 10.64 10.559 0 6.061-4.794 10.812-10.64 10.812-6.122 0-10.906-4.751-10.906-10.812 0-5.808 4.784-10.559 10.906-10.559zM453.258 239v1.584h1.594v1.857c-1.594.528-3.189 1.056-4.783 2.122l-1.339-1.34 1.063-1.31-1.063-1.055-3.445 3.421 1.063 1.34 1.063-1.34 1.319 1.34c-2.382 2.366-3.72 5.533-3.72 8.975 0 6.863 5.59 12.396 12.5 12.396 6.634 0 12.49-5.533 12.49-12.396 0-3.168-1.319-6.609-3.976-8.975l1.309-1.34 1.073 1.34 1.338-1.34-3.72-3.421-1.073 1.055 1.073 1.31-1.349 1.34c-1.319-1.066-2.913-1.594-4.783-2.122v-1.857h1.594V239z"
        ></path>
      </g>

      {/*modal 3*/}
      <Modal
        onCancel={() => {
          setModalGTIsVisible(false);
        }}
        open={modalGT}
        destroyOnClose={true}
        closable={false}
        title={<h2>Criação da GT PLAFOR </h2>}
        footer={[
          <Button
            type="primary"
            key={"back"}
            onClick={() => {
              setModalGTIsVisible(false);
            }}
          >
            Fechar
          </Button>,
        ]}
      >
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Para o desenvolvimento do PLAFOR, foi instituído, por meio da{" "}
          <a
            target="blank"
            href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=22011-portaria-n28-2015-setec-pdf&category_slug=setembro-2015-pdf&Itemid=30192"
          >
            Portaria SETEC/MEC nº 28, de 26 de agosto de 2015
          </a>
          , um Grupo de Trabalho (GT) que foi constituído por um representante
          da SETEC/MEC, e 12 representantes de Institutos Federais, e teria 180
          dias para conclusão de seus trabalhos, podendo ser prorrogado por mais
          90 dias, segundo decisão do Secretário da SETEC.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Para a formulação do PLAFOR, o GT elaborou a{" "}
          <a
            target="blank"
            href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40981-nt-67-setec-12maio2016-pdf&category_slug=maio-2016-pdf&Itemid=30192"
          >
            Nota Técnica nº 67/2016/CGDP/DDR/SETEC/SETEC
          </a>
          , no qual em seu tópico 1, nomeado de Sumário Executivo, expõe o
          plano, e no tópico 2, com nome de Análise, apresenta a RFEPCT, em que
          contextualiza sua expansão mediante criação de novas unidades, e
          consequentemente a ampliação de seu quadro de pessoal, “[...] passando
          de 36.005 em 2010 para 61.298 em 2015, sendo 33.036 docentes e 28.262
          técnico‐administrativos em educação (TAE), tendo um aumento percentual
          na ordem de 70%.” (BRASIL, 2016) que justifica a criação do plano com
          a finalidade de:
        </p>
        <div style={{ margin: "0 0 0 30%" }}>
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              textIndent: "8%",
              fontSize: "12px",
            }}
          >
            [...] de preparar os recém‐chegados ao serviço público, e
            especialmente na Educação Profissional e Tecnológica (EPT), e
            capacitar aos servidores remanescentes visando o fortalecimento e
            aprimoramento das competências do servidor público para atuar,
            promover e proporcionar o desenvolvimento de trabalhos com
            qualidade, atendendo às demandas e propiciando um diferencial no
            serviço prestado à sociedade no âmbito da RFEPCT. Soma‐se a esse
            fato a importância de preservar a identidade, missão e visão da Rede
            Federal, bem como fortalecer a relação ensino/aprendizagem e a
            formação profissional dos educandos na EPT (
            <a
              target="blank"
              href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40981-nt-67-setec-12maio2016-pdf&category_slug=maio-2016-pdf&Itemid=30192"
            >
              BRASIL
            </a>
            , 2016).
          </p>
        </div>

        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Ainda no tópico 2 da Nota Técnica nº 67/2016, em seu subtópico 2.5, é
          informado que a Coordenação‐Geral de Desenvolvimento de Pessoal
          promoveu algumas ações voltadas a capacitação dos servidores da RFEPCT
          entre os anos de 2013 e 2015, ações estas que podem ser consideradas
          protótipos,com vistas a embasar os argumentos utilizados para a
          entrada do PLAFOR na agenda política e para sua formulação. São elas:
        </p>

        <ul style={{ listStyle: "lower-roman" }}>
          <li>Curso de Capacitação de Gestores;</li>
          <li>PRONATEC Serviços Públicos;</li>
          <li>Curso de Aulas Práticas;</li>
          <li>Capacitação em Tecnologia da Informação;</li>
          <li>Idioma sem Fronteira:</li>
          <ul style={{ listStyle: "lower-alpha" }}>
            <li>Capacitação em Língua inglesa</li>
            <li>O curso My English Online</li>
            <li>Teste de Proficiência em inglês (teste TOEFL)</li>
          </ul>
          <li>Especialização em Educação Profissional e Tecnológica;</li>
          <li>Programas de Mestrado:</li>
          <ul style={{ listStyle: "lower-alpha" }}>
            <li>Mestrado Profissional em Educação;</li>
            <li>Mestrado Profissional em Gestão Pública;</li>
            <li>
              Mestrado Profissional em Tecnologia da Informação (
              <a
                target="blank"
                href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40981-nt-67-setec-12maio2016-pdf&category_slug=maio-2016-pdf&Itemid=30192"
              >
                BRASIL
              </a>
              , 2016).
            </li>
          </ul>
        </ul>

        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Essas ações serviram de base para a estruturação da política PLAFOR.
        </p>
      </Modal>

      <g
        id="4"
        onClick={() => {
          setModalPlaforIsVisible(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(586.471 124)"
          x="-68.97"
          y="-1.38"
        >
          Maio de 2016
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(575.224 142)"
          x="-68.97"
          y="-1.38"
        >
          Instituição do Plafor
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(569.971 157)"
          x="-68.97"
          y="-1.38"
        >
          Total de 644 unidades
        </text>
        <path
          d="m551.89,167.85c-13.03,0 -23.99,10.56 -23.99,23.97c0,13.01 10.96,24.01 23.99,24.01c13.43,0 24.01,-11 24.01,-24.01c0,-13.41 -10.58,-23.97 -24.01,-23.97z"
          fill="#9AE167"
          id="svg_31"
        />
        <path
          d="m562.39,184.19l0,3.44l-1.01,-1.33l-5.06,5.53l-5.8,-4.48l-9.36,6.84l0,-1.83l9.36,-6.84l5.55,4.21l4.3,-4.49l-1.02,-1.05l3.04,0zm-18.2,9.47l0,6.58l-3.03,0l0,-4.47l3.03,-2.11zm5.56,-4.2l0,10.78l-4.28,0l0,-7.63l4.28,-3.15zm1.51,0.27l4.31,3.15l0,7.36l-4.31,0l0,-10.51zm9.87,-1.05l0,11.56l-4.31,0l0,-7.1l4.31,-4.46zm-21.22,-11.85l0,24.99l23.99,0l0,-1.58l-1.51,0l0,-10.78l1.51,1.57l0,-8.42l-8.09,0l2.52,2.63l-2.26,2.64l-5.55,-4.22l-9.36,6.85l0,-13.68l-1.25,0z"
          fill="#FFF"
          id="svg_32"
        />
        <path
          d="m553.4,251.31l0,-34.96l0,34.96z"
          fill="none"
          id="svg_33"
          stroke="#4A696C"
        />
      </g>

      {/*modal 4*/}
      <Modal
        onCancel={() => {
          setModalPlaforIsVisible(false);
        }}
        open={modalPlafor}
        destroyOnClose={true}
        closable={false}
        title={<h2>Instituição do PLAFOR</h2>}
        footer={[
          <Button
            type="primary"
            key={"back"}
            onClick={() => {
              setModalPlaforIsVisible(false);
            }}
          >
            Fechar
          </Button>,
        ]}
      >
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Em de 11 de maio de 2016, a Secretaria de Educação Profissional e
          Tecnológica (SETEC) junto com o MEC, instituiu o Plano de Formação
          Continuada dos Servidores da Rede Federal de Educação Profissional,
          Científica e Tecnológica (
          <a target="blank" href="http://portal.mec.gov.br/apresentacao-plafor">
            PLAFOR
          </a>
          ), através da{" "}
          <a
            target="blank"
            href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40991-portaria-15-2016-setec-12maio-pdf&Itemid=30192"
          >
            Portaria nº 15/2016, de 11 de maio de 2016
          </a>
          .
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Essa política visa potencializar a formação contiuada dos servidores
          da RFEPFCT para a construção de suas competências relativas aos
          processos educacionais dentro da realidade institucional que envolve
          atividades de ensino, pesquisa, extensão e inovação, além das
          atividades de autogestão caracteristica de entidades autarquicas,
          respeitando a proposta institucional de educação integral, inclusiva,
          ambientalmente consciente e de aceitação a diversidade. Fomentar
          política de acesso a eventos de capacitação/qualificação (internos e
          externos) e promover capacitação no exterior, também estão entre as
          finalidades do PLAFOR.
        </p>
      </Modal>

      <g
        id="5"
        onClick={() => {
          setModalPlaforeduIsVisible(true);
        }}
        style={{ cursor: "pointer" }}
        transform="matrix(1 0 0 1 0 0)"
      >
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          transform="translate(758.902 288)"
          x="-93.29"
          y="-130.28"
        >
          Abril de 2022
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(760.356 306)"
          x="-93.29"
          y="-130.28"
        >
          Lançamento do
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          transform="translate(774.856 321)"
          x="-93.29"
          y="-130.28"
        >
          PlaforEDU
        </text>
        <path
          onClick={() => {
            setModalPlaforeduIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          d="m708.72,196.74c-13.01,0 -24.01,10.57 -24.01,23.96c0,13.43 11,24 24.01,24c13.41,0 23.99,-10.57 23.99,-24c0,-13.39 -10.58,-23.96 -23.99,-23.96z"
          fill="#8585FF"
          id="svg_37"
        />
        <path
          onClick={() => {
            setModalPlaforeduIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          d="m713.56,213.04l0.89,1.31l1.75,0.23l-1.17,1.04l0.28,1.54l-1.75,-0.76l-1.45,0.76l0.28,-1.54l-1.17,-1.04l1.75,-0.23l0.59,-1.31zm0,-3.32l-1.75,3.32l-4.09,0.52l2.92,2.57l-0.58,3.59l3.5,-1.79l3.8,1.79l-0.58,-3.59l2.92,-2.57l-4.09,-0.52l-2.05,-3.32z"
          fill="#FFF"
          id="svg_38"
        />
        <path
          onClick={() => {
            setModalPlaforeduIsVisible(true);
          }}
          style={{ cursor: "pointer" }}
          d="m699.81,211.56l0,5.15l-0.86,0a2.54,2.54 0 0 1 -2.53,-2.56c0,-1.44 1.13,-2.59 2.53,-2.59l0.86,0zm18.66,0c1.4,0 2.53,1.15 2.53,2.59a2.54,2.54 0 0 1 -2.53,2.56l-0.86,0l0,-5.15l0.86,0zm-2.56,-3.13l0,7.44c0,3.99 -3.09,7.42 -7.35,7.42c-3.95,0 -7.35,-3.43 -7.35,-7.42l0,-7.44l14.7,0zm-6.49,16.28l0,3.42l-1.42,0l0,-3.42l1.42,0zm3.67,5.14l1.13,3.15l-11.02,0l1.13,-3.15l8.76,0zm-14.98,-23.13l0,1.71l1.7,0l0,1.72l-0.86,0c-2.26,0 -4.23,1.71 -4.23,4c0,2.29 1.97,4 4.23,4l1.13,0c0.86,3.13 3.12,5.41 6.22,6.28l0,3.7l-3.1,0l-1.69,4.87l-1.7,0l0,1.71l17.8,0l0,-1.71l-1.7,0l-1.69,-4.87l-3.1,0l0,-3.7c3.1,-0.87 5.36,-3.15 6.22,-6.28l1.13,0c2.27,0 4.24,-1.71 4.24,-4c0,-2.29 -1.97,-4 -4.24,-4l-0.86,0l0,-1.72l1.7,0l0,-1.71l-21.2,0z"
          fill="#FFF"
          id="svg_39"
        />
        <path
          d="m709.21,299.2l0,-53.98l0,53.98z"
          fill="none"
          id="svg_40"
          stroke="#4A696C"
        />
      </g>

      {/*modal 5*/}
      <Modal
        onCancel={() => {
          setModalPlaforeduIsVisible(false);
        }}
        open={modalPlaforedu}
        destroyOnClose={true}
        closable={false}
        title={<h2>Criação da plataforma PlaforEDU </h2>}
        footer={[
          <Button
            type="primary"
            key={"back"}
            onClick={() => {
              setModalPlaforeduIsVisible(false);
            }}
          >
            Fechar
          </Button>,
        ]}
      >
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Lançada pelo MEC, em cerimônia transmitida pelo youtube, no dia 13 de
          abril de 2022, sua criação foi possibilitada através de um projeto
          executado entre o IFRN, o IFCE e o IFSul, tendo como envolvidos a
          coordenadora-geral de Desenvolvimento de Pessoas, Silvilene Silva e o
          coordenador da{" "}
          <a target="blank" href="https://plaforedu.mec.gov.br/">
            PlaforEdu
          </a>
          , Fábio Ribeiro, ambos do MEC; coordenadora-geral do PLAFOR,
          professora Patrícia de Albuquerque Maia, do Campus Lajes do IFRN. O
          desenvolvimento da plataforma digital foi realizado pelo IFRN, com a
          coordenação do professor Thiago Medeiros, do Campus Natal-Zona Leste,
          pelo IFCE, com a coordenação do professor Otávio Alcântara de Lima Jr.
          e pelo IFSul, com a coordenação do professor Raymundo Carlos Machado.
        </p>
        <p
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          “Feito na Rede, pela Rede, com a Rede e para a Rede” (IFRN, 2022),
          embora a PlaforEDU seja a plataformização do PLAFOR, que é destinado a
          formação inicial e continuada dos servidores da RFEPCT, qualquer
          pessoa, de qualquer lugar do mundo, pode usufruir dos 283 cursos
          gratuitos ofertados no site. Esses cursos são divididos por
          competências e distribuídos em 5 itinerários formativos, sendo eles
          Iniciação ao Serviço Público; Técnico-Administrativo em Educação;
          Docente; Gerencial; e Preparação para Aposentadoria.
        </p>
      </Modal>

      <g>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="14"
          fontWeight="700"
          x="750.13"
          y="282.2"
        >
          Novembro de 2022
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          x="748.59"
          y="300.2"
        >
          Portaria N° 633 de 7 de
        </text>
        <text
          fontFamily="Roboto,Roboto_MSFontService,sans-serif"
          fontSize="12"
          fontWeight="400"
          x="759.09"
          y="315.2"
        >
          novembro de 2022
        </text>
        <path
          d="m800.55,320.19c-13.01,0 -24.01,10.57 -24.01,23.96c0,13.43 11,24 24.01,24c13.41,0 23.99,-10.57 23.99,-24c0,-13.39 -10.58,-23.96 -23.99,-23.96z"
          fill="#8585FF"
          id="svg_45"
          transform="matrix(1 0 0 1 0 0)"
        />
        <path
          d="m800.64,424.41l0,-53.98l0,53.98z"
          fill="none"
          id="svg_48"
          stroke="#4A696C"
        />
        <path
          d="m810,355.18l-18.38,0l0,-22.97l12.25,0l0,6.13l6.13,0l0,16.85l0,0zm-4.59,-22.66l4.28,4.28l-4.28,0l0,-4.28zm5.45,3.29l-4.46,-4.46c-0.43,-0.43 -1.01,-0.67 -1.63,-0.67l-14.68,0l0,26.04l21.44,0l0,-19.28c0,-0.61 -0.24,-1.19 -0.67,-1.62l0,0zm-16.18,11.71l10.72,0l0,-1.53l-10.72,0l0,1.53zm0,-6.13l12.25,0l0,-1.53l-12.25,0l0,1.53zm0,9.19l6.13,0l0,-1.53l-6.13,0l0,1.53zm0,-6.13l9.19,0l0,-1.53l-9.19,0l0,1.53zm0,-6.13l6.13,0l0,-1.53l-6.13,0l0,1.53z"
          fill="#ffffff"
          fillRule="evenodd"
          id="svg_46"
          transform="matrix(1 0 0 1 0 0)"
        />
      </g>
    </svg>
  );
}

export default function HistoryPlaforPage() {
  return (
    <div
      style={{ display: "grid", justifyContent: "center", margin: "2% 0 3% 0" }}
    >
      <Icon />
      <div
        style={{
          backgroundColor: "#3183C4",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "78px",
          padding: "10px, 0px",
        }}
      >
        <Title
          level={3}
          style={{
            margin: "0px",
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "25px",
            textAlign: "center",
            color: "#FFFFFF",
            width: "70%",
          }}
        >
          Plano de Formação Continuada dos Servidores da Rede Federal de
          Educação Profissional, Científica e Tecnológica
        </Title>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          margin: "5% 10% 0 10%",
        }}
      >
        <Paragraph
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          O Plano de Formação Continuada dos Servidores da Rede Federal de
          Educação Profissional e Tecnológica (PLAFOR) consiste na promoção e
          fomento de ações de capacitação dos servidores, bem como na motivação
          e mobilização para a formação continuada com a finalidade de
          potencializar a atuação da Educação Profissional no âmbito da Rede
          Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).
        </Paragraph>
        <Paragraph
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          O Plano objetiva contribuir com o aprimoramento das competências do
          servidor público para atuar, promover e proporcionar o desenvolvimento
          de trabalhos com qualidade, atendendo às demandas e propiciando um
          diferencial no serviço prestado à sociedade no âmbito da RFEPCT.
        </Paragraph>
        <Paragraph
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            textAlign: "justify",
            textJustify: "inter-word",
            textIndent: "8%",
          }}
        >
          Entre seus objetivos estão a contribuição para a construção de
          competências dos servidores relativas aos processos educacionais, o
          provimento a ações de capacitação do servidor para atuar em funções de
          planejamento, de gestão e de liderança, o fomento a capacitação nas
          diversas áreas do conhecimento a fim de aprimorar o ensino, a
          pesquisa, a extensão e a inovação na educação profissional e a
          capacitação no exterior.
        </Paragraph>
      </div>
      <DocumentsVisualization />
    </div>
  );
}
