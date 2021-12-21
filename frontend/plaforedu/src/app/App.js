import 'antd/dist/antd.css'
import './App.less';
import { StoreProvider } from 'easy-peasy';
import store from '../store';

import { Routes, Route } from "react-router-dom";

import CoursesPage from '../pages/CoursesPage'
import HeaderGov from '../components/header/HeaderGov.jsx';
import HomePage from '../pages/HomePage.jsx';
import FooterGov from '../components/footer/FooterGov.jsx';

import {
  Layout
} from 'antd'

function App() {

  return (
    <StoreProvider store={store}>
      <Layout style={{minHeight:'100vh'}}>
        <HeaderGov/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/editor' element={<CoursesPage/>}/>
        </Routes>
        <FooterGov/>
      </Layout>
    </StoreProvider>
  );
}

export default App;
