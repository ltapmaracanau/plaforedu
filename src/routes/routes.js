import { useStoreState } from 'easy-peasy';
import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage.jsx'
import CoursesPage from '../pages/CoursesPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import FaleConosco from '../pages/FaleConosco.jsx'
import FAQ from '../pages/FAQ.jsx'
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ForgetPassword from '../pages/ForgetPassword.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import UpdatePassword from '../pages/UpdatePassword.jsx';


export default function CustomRoutes() {

    const authenticated = useStoreState(state => state.adm.isAuthenticated)
    const user = useStoreState(state => state.adm.user)

    const RequireNoAuth = ({ children }) => {
        if (authenticated) {
            return (<Navigate to={'/'} />)
        }

        return children;
    }

    const RequireAuth = ({ children }) => {

        if (authenticated) {
            return children
        }

        return (<Navigate to={'/login'} />)

    }

    const RequireAdmin = ({ children }) => {

        if (user.roles.includes("ADMINISTRADOR")) {
            return children
        }

        return (<Navigate to={'/login'} />)

    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faleconosco" element={<FaleConosco />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
                path="/cursos"
                element={
                    <RequireAuth>
                        <CoursesPage />
                    </RequireAuth>
                }
            />
            <Route
                path="/login"
                element={
                    <RequireNoAuth>
                        <Login />
                    </RequireNoAuth>
                }
            />
            <Route
                path="/register"
                element={
                    <RequireAuth>
                        <RequireAdmin>
                            <Register />
                        </RequireAdmin>
                    </RequireAuth>
                }
            />
            <Route
                path="/forget"
                element={
                    <RequireNoAuth>
                        <ForgetPassword />
                    </RequireNoAuth>
                }
            />
            <Route
                path="/reset-password/:api_token"
                element={
                    <RequireNoAuth>
                        <ResetPassword />
                    </RequireNoAuth>
                }
            />
            <Route
                path="/update-password"
                element={
                    <RequireAuth>
                        <UpdatePassword />
                    </RequireAuth>
                }
            />
        </Routes>
    );
}