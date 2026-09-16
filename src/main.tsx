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
import {useState} from "react";

const Layout = () => {
    // Objéctif : Faire en sorte que lorsque le local storage est modifié, le header affiche soit connexion, soit profile et déconnexion
    //On déclare le state userid (localstorage) et on va le passer au header (lors de la déconnexion) et a la page connexion (lors de la connexion)
    let [userid, setUserid] = useState(localStorage.getItem("userId"))
    // On met en tant que props userid et son setter. Pour l'outlet, comme c'est déjà un hook on le met en tant que contexte
    return (<>
        <Header userId={userid} setUserId={setUserid}/>
        <Outlet context={{userid, setUserid}}/>
    </>)
}
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
