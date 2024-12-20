import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import StateHook from './Pages/StateHookPage/StateHook';
import EffectHook from './Pages/EffectHookPage/EffectHook';
import RefHook from './Pages/RefHook/RefHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';
import User from './components/User';
import ErrorPage from './Pages/Error/Error';
import './global.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom'

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<Welcome />} />
            <Route path='/statehooks' element={<StateHook/>} />
            <Route path='/effecthook' element={<EffectHook/>} />
            <Route path='/refhook' element={<RefHook/>} />
            <Route path='/community' element={<Community/>} />
            <Route path='/resources' element={<Resources/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/users' loader={getUsers} element={<Users />} />
            <Route path='/users/:id' loader={loader} element={<User/>} errorElement={<ErrorPage/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

async function loader({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json()
    return user;
}

async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = response.json();
    return users;
}