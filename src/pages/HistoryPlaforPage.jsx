import React, { useState } from "react";
import HeaderHome from "../components/header/HeaderHome";
import { Button, Grid, Modal } from "antd";
function Icon() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [modalCriacao, setModalCriacaoIsVisible] = useState(false);
  const [modalForgep, setModalForgepIsVisible] = useState(false);
  const [modalGT, setModalGTIsVisible] = useState(false);
  const [modalPlafor, setModalPlaforIsVisible] = useState(false);
  const [modalPlaforedu, setModalPlaforeduIsVisible] = useState(false);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="450" style={{height: `${screens.md ? '420px' : 'auto'}`,}} viewBox="40 0 849 478">

      <defs>
        <clipPath id="clip0">
          <path d="M0 0H960V540H0z"></path>
        </clipPath>
      </defs>

      <g clipPath="url(#clip0)">
        {/* fundo */}
        <path fill="#FFF" d="M0 0H960V540H0z"></path>
        {/* sombra */}
        <path fill="#2C56A2" fillRule="evenodd" d="M-27.407 236.77l1.026 15.446 230.304 46.025 2.913.621 1.675.703 2.51.67 1.7 1.086 1.704 1.131 1.296 1.135.892 1.162.919 1.59-4.107-18.951-.486-1.189-.916-1.183-1.272-1.114-1.704-1.131-2.129-1.08-2.109-1.104-1.647-.275-2.936-.619-227.633-42.923zm347.045 37.438l.35 5.269-.886 5.397-1.654 5.402-3.697 5.967-4.936 6.05-6.13 6.128-5.023 4.043-9.369 6.728-31.343 20.491-2.752 1.811-2.323 1.805-2.321 2.167-1.486 2.156-1.059 2.106-.725 1.677-.675 2.103.135 2.026 4.242 20.978-.134-2.027.291-2.077.676-2.081 1.486-2.156 1.51-2.113 1.895-1.777 2.319-2.212 2.726-2.194 30.889-20.867 8.962-6.724 5.026-3.998 6.529-6.585 4.508-6.021 3.698-5.967 1.648-5.832.838-5.777-.35-5.269-2.865-18.627zm426.805 20.293l-1.214 6.233-1.373 4.184-4.027 6.804-38.149 53.215-1.106 2.087-1.03 2.533-.266 2.46-.968 22.568.265-2.483.65-2.486 1.507-2.158 37.614-54.808 4.072-6.807 1.706-4.614.834-6.184 1.485-20.544zm-169.528-23.462l-4.028.652-3.237.644-3.645.627-3.211 1.027-3.188 1.026-3.21 1.05-2.35 1.4-2.758 1.381-1.59.92-1.966 1.375-110.426 97.252-10.097 8.021-11.318 7.694-13.036 7.017-13.827 7.025-15.145 5.913-15.982 5.561-16.82 5.21-17.713 4.026-17.74 3.62-18.246 2.455-18.253 2.026-18.357.789-17.553-.034-17.226-.914-16.091-2.211-10.745-1.73-14.527-3.513-13.339-4.023-11.389-4.966-9.368-5.529-7.75-6.022-5.727-6.54-4.13-6.692-2.514-7.206 5.534 21.706 2.49 7.185 4.536 6.665 5.801 6.988 7.75 6.021 9.372 5.914 10.961 4.995 13.387 4.403 14.507 3.56 10.362 1.755 16.069 2.213 16.84.895 17.556.078 17.928-.783 17.874-1.593 18.221-2.838 17.335-3.594 17.304-4.043 16.822-5.188 15.984-5.539 14.688-6.312 13.85-7.026 12.604-7.395 11.316-7.717 9.714-7.996 109.428-100.013 1.945-1.373 1.54-1.324 2.35-1.399 2.828-1.002 2.735-1.381 3.21-1.05 3.211-1.027 3.216-.62 3.643-.649 3.62-.67 11.821-.785 3.676.186 4.103.134 3.724.567 4.129.54 3.702.569 2.486.649 3.318.594 2.942 1.049 2.945 1.432 2.513 1.055 2.156 1.485 2.109 1.104 1.346 1.539 1.303 1.565.966 1.948.919 1.59.108 1.621.298-20.035-.49-1.596-.535-1.592-.92-1.59-1.324-1.541-1.729-1.513-2.131-1.103-2.134-1.487-2.512-1.054-2.942-1.049-2.917-1.005-3.347-1.022-2.487-.671-3.747-.566-4.107-.541-3.673-.141-4.104-.157-4.101-.112zm-10.77 108.617l.246 22.442 1.378 8.503 2.644 8.825 4.241 8.698 6.318 8.966 7.935 8.475 9.561 8.773 11.178 8.26 13.199 7.695 14.798 7.612 16.386 6.647 18.01 6.584 19.956 5.234 318.265 78.159-1.97-29.677-315.489-73.481-19.979-5.232-18.387-6.13-16.792-6.643-14.771-7.184-13.2-7.718-11.56-8.234-9.533-8.346-7.936-8.474-6.291-8.584-4.235-8.268-3.027-8.8-.945-8.102z"></path>
        {/* caminho */}
        <path fill="#E0EEF8" fillRule="evenodd" d="M-13.077 199.836l-.784.459-2.071.138-.356.43-.81.054-12.362 4.914 2.053 30.939 227.633 42.923 2.936.619 1.647.275 2.109 1.104 2.129 1.08 1.704 1.131 1.272 1.114.916 1.183.486 1.189.513 1.594-.323 1.266-.298 1.648-.726 1.676-1.112 1.296-1.514 1.728-1.941 1.758-2.346 1.806-2.755 1.427-33.074 18.932-10.611 6.426-6.642 4.535-8.534 6.695-7.312 7.044-6.073 7.324-4.837 6.857-3.588 7.611-2.401 7.103-.323 7.394.885 6.862 2.514 7.206 4.13 6.692 5.727 6.54 7.75 6.022 9.368 5.53 11.389 4.965 13.339 4.023 14.527 3.513 10.745 1.73 16.091 2.211 17.226.915 17.553.033 18.357-.789 18.253-2.026 18.246-2.455 17.74-3.62 17.713-4.025 16.82-5.211 15.982-5.561 15.145-5.913 13.827-7.024 13.036-7.017 11.318-7.695 10.097-8.021 110.426-97.252 1.966-1.375 1.59-.919 2.758-1.382 2.35-1.4 3.21-1.05 3.188-1.026 3.211-1.027 3.645-.627 3.237-.644 4.028-.652 11.393-.756 4.101.112 4.104.157 3.673.141 4.107.541 3.747.566 2.487.672 3.347 1.021 2.917 1.005 2.942 1.049 2.512 1.055 2.134 1.486 2.132 1.103 1.728 1.513 1.324 1.541.92 1.59.535 1.593.49 1.595-.275 1.647-.701 1.698-.726 1.676-1.513 1.729-46.625 48.87-6.049 7.345-3.346 5.13-3.561 8.016-2.326 7.89-.241 8.632.945 8.102 3.027 8.801 4.235 8.267 6.291 8.584 7.936 8.475 9.533 8.345 11.56 8.234 13.2 7.718 14.771 7.184 16.792 6.643 18.387 6.13 19.979 5.232 315.489 73.481-6.24-94.009-264.215-51.961-5.377-1.272-3.296-.595-4.638-1.728-4.211-1.778-4.187-1.735-3.402-1.855-3.398-1.787-2.595-2.293-2.188-2.297-2.21-2.296-1.357-2.375-.972-2.378-.59-2.426-.136-2.049.266-2.461 1.03-2.533 1.106-2.086 38.149-53.216 4.027-6.804 1.373-4.184 1.214-6.232-.431-6.508-2-5.589-2.858-5.917-4.431-5.428-5.67-5.345-6.455-4.909-7.237-4.427-8.453-4.347-9.257-3.864-10.043-3.426-10.83-3.352-11.228-2.535-11.991-2.46-12.824-2.044-13.17-1.138-8.594-.674-12.741-.805-13.091.055-12.641.025-25.242 1.675-12.15 1.621-12.122 2.049-11.713 2.428-11.286 2.378-10.804 3.159-10.395 3.54-9.555 3.914-9.124 4.292-8.691 4.67-7.405 4.97-122.003 89.45-3.157 1.837-1.946 1.351-3.563 1.865-3.993 1.509-3.974 1.462-3.993 1.509-4.405 1.107-4.449 1.109-4.404 1.129-4.48.298-4.861.707-4.459.296-4.528-.084-4.487-.132-4.08-.136-4.13-.54-3.775-.993-3.704-.953-2.126-.673-2.896-1.052-2.562-1.458-2.159-1.508-1.728-1.513-.946-1.973-.918-1.568-.541-2.022-.135-2.026.675-2.103.725-1.677 1.059-2.105 1.486-2.157 2.321-2.167 2.323-1.805 2.752-1.811 31.343-20.491 9.369-6.728 5.023-4.042 6.13-6.129 4.936-6.05 3.697-5.967 1.654-5.402.886-5.397-.35-5.269-1.945-4.778-2.752-4.318-3.966-4.215-4.729-3.779-5.968-3.698-7.15-2.782-7.94-2.752-9.129-2.267-9.934-1.783-272.312-44.457z"></path>

        {/* titulo */}
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="37" fontWeight="700" transform="translate(337.463 51)">
          Histórico Plafor
        </text>
      </g>

      <g id="1">
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(84.438 89)">
          Dezembro
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(91.184 106)">
          de 2008
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(57.021 128)">
          Instituição da RFEPCT
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(67.268 143)">
          com 144 unidades
        </text>

        {/* base 1 */}
        <path onClick={() => {setModalCriacaoIsVisible(true)}} style={{cursor: "pointer"}} fill="#00B3D9" fillRule="evenodd" d="M116.989 164.022c-13.412 0-23.989 10.572-23.989 24 0 13.001 10.577 23.956 23.989 23.956 13.007 0 24.011-10.955 24.011-23.956 0-13.428-11.004-24-24.011-24z"></path>

        {/* icon 1 */}
        <path onClick={() => {setModalCriacaoIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M113.472 176.652l-.836 1.652h-1.917l-.836-1.652zm-.286 3.038c.551 0 .836.551.836.816 0 .551-.285.846-.836.846h-3.018c-.551 0-.836-.295-.836-.846 0-.265.285-.816.836-.816zm15.162 7.984v3.304h-9.656v-3.304zm0 4.956v3.038h-9.656v-3.038zm-15.427-9.626c1.917 1.101 3.304 2.753 4.405 4.67v11.298h-12.664v-2.753c0-6.342 1.652-10.747 5.771-13.215zm15.427 14.316v3.018h-9.656v-3.018zM107.13 175l1.937 3.589c-.836.265-1.387 1.101-1.387 1.917 0 .846.286 1.397.836 1.948-4.405 3.303-5.506 8.259-5.506 13.765v4.119h14.316v1.652H130v-15.682h-11.858c-.816-1.652-1.917-3.039-3.304-3.854.551-.551.836-1.102.836-1.948 0-.816-.551-1.652-1.387-1.917l1.938-3.589zM90.411 187.011v1.139c-.935.295-1.402 1.139-1.402 2.278 0 1.435.935 2.279 1.87 2.279.467 0 .71.569.71.865 0 .569-.243.844-.71.844-.225 0-.468-.275-.468-.844H89.01c0 1.139.467 1.983 1.402 2.278v1.139h1.178v-1.139c.935-.295 1.402-1.139 1.402-2.278 0-1.14-.935-2.279-2.112-2.279-.225 0-.468-.569-.468-.865 0-.569.243-.844.468-.844.467 0 .71.275.71.844h1.402c0-1.139-.467-1.983-1.402-2.278v-1.139z"></path>

        {/* haste 1 */}
        <path fill="none" stroke="#4A696C" strokeLinejoin="round" strokeMiterlimit="10" d="M118.5 237.482V212.5z"></path>
        <Modal
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
          <text>Em 2008, ...
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11892.htm">Lei n° 11.892</a>
          </text>
        </Modal>
      </g>

      <g id="2">
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(243.119 144)">
          Março/Agosto
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(262.786 161)">
          de 2014
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(239.393 181)">
          Discussões FORGEP
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(261.639 196)">
          sobre Plafor
        </text>

        {/* haste 2*/}
        <path fill="none" stroke="#4A696C" strokeLinejoin="round" strokeMiterlimit="10" d="M286.5 297.5v-35z"></path>
        {/* base 2*/}
        <path onClick={() => {setModalForgepIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFC335" fillRule="evenodd" d="M285.773 214.022c-13.111 0-23.773 10.572-23.773 24 0 13.001 10.662 23.956 23.773 23.956 13.543 0 24.204-10.955 24.204-23.956 0-13.428-10.661-24-24.204-24z"></path>
        {/* icon 2*/}
        <path onClick={() => {setModalForgepIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M298.388 226l-3.377 1.625.612 1.375 3.377-1.625-.612-1.375zM295.623 237.01l-.612 1.354 3.377 1.636.612-1.354-3.377-1.636zM296.01 232.012V234H299v-1.988zM273.853 226l-.842 1.375 3.41 1.625.568-1.375-3.136-1.625zM276.421 237.01l-3.41 1.636.842 1.354 3.136-1.636-.568-1.354zM272.01 232.012V234H275v-1.988zM283 250v.994h4.989V250zM285.361 233.716c.557 0 .825.296.825.867 0 .275-.268.571-.825.571-.289 0-.558-.296-.558-.571 0-.571.269-.867.558-.867zm0-8.003c3.912 0 7.256 3.161 7.256 7.157 0 2.855-1.672 5.414-4.469 6.556l-.289.296v3.425h-1.673v-6.576c.847-.275 1.673-1.142 1.673-1.988 0-1.438-1.115-2.579-2.498-2.579-1.115 0-2.23 1.141-2.23 2.579 0 .846.558 1.713 1.672 1.988v6.576h-1.672v-3.425l-.557-.296c-2.519-1.142-4.191-3.701-4.191-6.556 0-3.996 3.344-7.157 6.978-7.157zm2.498 19.147v1.713h-4.728v-1.713zM285.361 224c-4.748 0-8.361 3.996-8.361 8.87 0 3.426 1.672 6.281 4.459 7.697v2.58h-1.404v1.713h1.404v3.129h7.814v-3.129h1.672v-1.713h-1.672v-2.58c3.055-1.416 4.727-4.271 4.727-7.697 0-4.874-3.912-8.87-8.639-8.87z"></path>

        <Modal
          open={modalForgep}
          destroyOnClose={true}
          closable={false}
          title={<h2>Primeiras Discussões no FORGEP sobre formação dos Servidores da RFEPCT</h2>}
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
          <text>Em 2008, ...
            <a href="https://forgep.wixsite.com/forgep/noticias">Noticias Forgep</a>
          </text>
        </Modal>
      </g>

      <g id="3">
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(408.123 181)">
          Agosto de 2015
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(419.926 202)">
          Criação do GT
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(435.84 217)">
          PLAFOR
        </text>

        {/* base 3 */}
        <path onClick={() => {setModalGTIsVisible(true)}} style={{cursor: "pointer"}}fill="#C234C2" fillRule="evenodd" d="M458.011 229C444.577 229 434 240.004 434 253.011 434 266.423 444.577 277 458.011 277c13.007 0 23.967-10.577 23.967-23.989 0-13.007-10.96-24.011-23.967-24.011z"></path>

        {/* icon 3 */}
        <path onClick={() => {setModalGTIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M457.632 253.44c.253 0 .779.545.779.827 0 .545-.526.807-.779.807-.527 0-1.053-.262-1.053-.807 0-.282.526-.827 1.053-.827zm-1.053-8.43v6.797c-.799.544-1.579 1.371-1.579 2.46 0 1.351 1.053 2.723 2.632 2.723 1.306 0 2.358-1.372 2.358-2.723 0-1.089-.779-1.916-1.579-2.46v-6.797zM457 262v1.989h1.989V262zM448.012 254.006V255H450v-.994zM465 254.006V255h2v-.994zM451.335 259l-1.323 1.333 1.323 1.655 1.665-1.655-1.665-1.333zM463.665 247.012L462 248.346l1.665 1.654 1.323-1.654-1.323-1.334zM463.665 259L462 260.333l1.665 1.655 1.323-1.655-1.323-1.333zM451.335 247.012l-1.323 1.334 1.323 1.654 1.665-1.654-1.665-1.334z"></path>

        {/* haste 3 */}
        <path fill="none" stroke="#4A696C" strokeLinejoin="round" strokeMiterlimit="10" d="M459.5 311.5v-34.982z"></path>
        <path fill="#FFF" fillRule="evenodd" d="M458.297 240.584v1.584h-1.85v-1.584zm-.787 3.451c5.846 0 10.64 4.751 10.64 10.559 0 6.061-4.794 10.812-10.64 10.812-6.122 0-10.906-4.751-10.906-10.812 0-5.808 4.784-10.559 10.906-10.559zM453.258 239v1.584h1.594v1.857c-1.594.528-3.189 1.056-4.783 2.122l-1.339-1.34 1.063-1.31-1.063-1.055-3.445 3.421 1.063 1.34 1.063-1.34 1.319 1.34c-2.382 2.366-3.72 5.533-3.72 8.975 0 6.863 5.59 12.396 12.5 12.396 6.634 0 12.49-5.533 12.49-12.396 0-3.168-1.319-6.609-3.976-8.975l1.309-1.34 1.073 1.34 1.338-1.34-3.72-3.421-1.073 1.055 1.073 1.31-1.349 1.34c-1.319-1.066-2.913-1.594-4.783-2.122v-1.857h1.594V239z"></path>

        <Modal
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
          <text>Em 2015, ...
            <a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=22011-portaria-n28-2015-setec-pdf&category_slug=setembro-2015-pdf&Itemid=30192">
              Portaria nº 28, de 26 de agosto de 2015
            </a>
            <a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40981-nt-67-setec-12maio2016-pdf&category_slug=maio-2016-pdf&Itemid=30192">
              Nota Técnica nº 67/2016/CGDP/DDR/SETEC/SETEC
            </a>
          </text>
        </Modal>
      </g>

      <g id="4">
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(586.471 124)">
          Maio de 2016
        </text>

        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(575.224 142)">
          Instituição do Plafor
        </text>
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(569.971 157)">
          Total de 644 unidades
        </text>

        {/* base 4*/}
        <path onClick={() => {setModalPlaforIsVisible(true)}} style={{cursor: "pointer"}} fill="#9AE167" fillRule="evenodd" d="M628.989 178.023c-13.03 0-23.989 10.554-23.989 23.966C605 214.996 615.959 226 628.989 226 642.423 226 653 214.996 653 201.989c0-13.412-10.577-23.966-24.011-23.966z"></path>

        {/* icon 4*/}
        <path onClick={() => {setModalPlaforIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M639.485 194.36v3.436l-1.01-1.324-5.06 5.53-5.799-4.478-9.353 6.834v-1.83l9.353-6.834 5.555 4.205 4.294-4.488-1.011-1.051zm-18.192 9.472v6.581h-3.03v-4.478l3.03-2.103zm5.556-4.205v10.786h-4.284v-7.632l4.284-3.154zm1.515.272l4.302 3.154v7.36h-4.302v-10.514zm9.868-1.051v11.565h-4.312v-7.107l4.312-4.458zM617.009 187v24.99H641v-1.577h-1.515v-10.786l1.515 1.577v-8.421h-8.09l2.525 2.628-2.264 2.638-5.555-4.215-9.353 6.844V187z"></path>

        {/* haste 4*/}
        <path fill="none" stroke="#4A696C" strokeLinejoin="round" strokeMiterlimit="10" d="M630.5 261.482v-34.964z"></path>

        <Modal
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

          <text>Em 2016, ...
            <a href="http://portal.mec.gov.br/apresentacao-plafor">Apresentação</a>
            <a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=40991-portaria-15-2016-setec-12maio-pdf&Itemid=30192">
              Portaria nº 15/2016, de 11 de maio de 2016
            </a>
          </text>
        </Modal>
      </g>

      <g id="5">
        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="14" fontWeight="700" transform="translate(758.902 288)">
          Abril de 2022
        </text>

        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(760.356 306)">
          Lançamento do
        </text>

        <text fontFamily="Roboto,Roboto_MSFontService,sans-serif" fontSize="12" fontWeight="400" transform="translate(774.856 321)">
          PlaforEDU
        </text>

        {/* base 5*/}
        <path onClick={() => {setModalPlaforeduIsVisible(true)}} style={{cursor: "pointer"}}fill="#8585FF" fillRule="evenodd" d="M802.011 327.022c-13.007 0-24.011 10.572-24.011 23.956 0 13.428 11.004 24 24.011 24 13.412 0 23.989-10.572 23.989-24 0-13.384-10.577-23.956-23.989-23.956z"></path>

        {/* icon 5 */}
        <path onClick={() => {setModalPlaforeduIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M806.849 343.324l.886 1.301 1.752.237-1.168 1.035.281 1.539-1.751-.76-1.449.76.281-1.539-1.168-1.035 1.752-.237.584-1.301zm0-3.324l-1.752 3.324-4.086.513 2.919 2.573-.584 3.59 3.503-1.785 3.805 1.785-.584-3.59 2.919-2.573-4.086-.513-2.054-3.324z"></path>
        <path  onClick={() => {setModalPlaforeduIsVisible(true)}} style={{cursor: "pointer"}} fill="#FFF" fillRule="evenodd" d="M793.099 341.843v5.149h-.858a2.542 2.542 0 01-2.534-2.558c0-1.449 1.131-2.591 2.534-2.591zm18.66 0c1.403 0 2.534 1.142 2.534 2.591a2.542 2.542 0 01-2.534 2.558h-.858v-5.149zm-2.555-3.13v7.434c0 3.996-3.099 7.422-7.351 7.422-3.958 0-7.35-3.426-7.35-7.422v-7.434zm-6.492 16.273v3.426h-1.424v-3.426zm3.665 5.139l1.131 3.151h-11.016l1.131-3.151zM791.403 337v1.713h1.696v1.713h-.858c-2.262 0-4.231 1.713-4.231 4.008 0 2.284 1.969 3.997 4.231 3.997h1.131c.858 3.129 3.12 5.413 6.22 6.28v3.701h-3.1l-1.696 4.864h-1.697v1.713h17.802v-1.713h-1.697l-1.696-4.864h-3.1v-3.701c3.1-.867 5.362-3.151 6.22-6.28h1.131c2.272 0 4.241-1.713 4.241-3.997 0-2.295-1.969-4.008-4.241-4.008h-.858v-1.713h1.696V337z"></path>

        {/* haste 5 */}
        <path fill="none" stroke="#4A696C" strokeLinejoin="round" strokeMiterlimit="10" d="M802.5 429.482V375.5z"></path>

        <Modal
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
          <text>Em 2022, ...
            <a href="https://plaforedu.mec.gov.br/">PlaforEdu</a>
          </text>
        </Modal>
      </g>

    </svg>
  );
}


export default function HistoryPlaforPage() {

  return (
    <>
      <HeaderHome />

      <div style={{ display: 'grid', justifyContent: 'center', margin: "2% 0 3% 0", }}>
        <Icon/>
      </div>

    </>
  );
}