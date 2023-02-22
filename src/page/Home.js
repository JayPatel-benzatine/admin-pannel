import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Table from '../component/AttemptTable/Table'
import Dashboard from '../component/dasboard/Dashboard'
import Equipment from '../component/Equipment/Equipment'
import Login from '../component/login/Login'
import Aside from '../component/Mainpage/Aside'
import Register from '../component/Register/Register'
import Signup from '../component/signup/Signup'
import Visit from '../component/Visits/Visit'

const Home = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='/' element={<Aside />} >
                    <Route index path='dash' element={<Dashboard />} />
                    <Route path='register' element={<Register />} />
                    <Route path='visit' element={<Visit />} />
                    <Route path='equipment' element={<Equipment />} />
                    <Route path='table' element={<Table />} />
                </Route>
                <Route path="*" element={<main style={{ padding: "1rem" }}> <p>There's nothing here!</p></main>} />
            </Routes>
            <Outlet />
        </>
    )
}

export default Home