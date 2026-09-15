import {createRoot} from 'react-dom/client'
import {createBrowserRouter} from "react-router"
import {RouterProvider} from "react-router/dom"
import './pages/css/index.css'

import App from './App.tsx'
import UserList from './pages/UserList.tsx'
import User from './pages/User.tsx'
import Recette from './pages/Recette.tsx'
import Profile from './pages/Profile.tsx'
import Connexion from './pages/Connexion.tsx'
import Err404 from "./pages/Err404.tsx";

import {Outlet} from 'react-router'
import Header from "./components/Header.tsx";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)
const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/userList",
                element: <UserList/>
            },
            {
                path: "/user/:userid",
                element: <User/>
            },
            {
                path: "/recette/:recetteid",
                element: <Recette/>
            },
            {
                path: "/connexion",
                element: <Connexion/>
            },
            {
                path: "/profile/:userid",
                element: <Profile/>
            },
            {
                path: "/404",
                element: <Err404/>
            },
            {
                path: "*",
                element: <Err404/>
            }
        ]
    }
]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
