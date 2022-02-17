import 'antd/dist/antd.css'
import './App.less';
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import VLibras from '@djpfs/react-vlibras'
import { Routes, Route } from "react-router-dom";

import AboutPage from '../pages/AboutPage.jsx'
import CoursesPage from '../pages/CoursesPage.jsx'
import HeaderGov from '../components/header/HeaderGov.jsx';
import HomePage from '../pages/HomePage.jsx';
import FooterGov from '../components/footer/FooterGov.jsx';

import {
  Layout
} from 'antd'

function App() {

  var s = document.createElement("script");
  s.setAttribute("data-account","yPtwRHQcX8");
  s.setAttribute("src","https://cdn.userway.org/widget.js");
  document.body.appendChild(s);

  return (
    <StoreProvider store={store}>
      <Layout style={{minHeight:'100vh'}}>
        <HeaderGov/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/cursos' element={<CoursesPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
        <VLibras/>
        <FooterGov/>
      </Layout>
    </StoreProvider>
  );
}



export default App;
