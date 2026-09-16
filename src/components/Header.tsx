import {Link} from "react-router-dom";
import {type Dispatch, type SetStateAction} from "react";

//On récupère les props donné par le layout, le setter est de type Dispatch<SetStateAction<string | null>> et peut donc recevoir un string ou rien.
function Header({userId, setUserId} : {userId : string | null, setUserId: Dispatch<SetStateAction<string | null>>}) {

    return (
        <header className="main-header">
            <ul className="nav-list">
                <li>
                    <header><Link to={"/"}>Home</Link></header>
                </li>
                <li>
                    <header><Link to={"/userList"}>Liste des utilisateurs</Link></header>
                </li>
                <li>
                    {userId ?
                        (<header><Link to={`/profile/${userId}`}>Mon profil</Link></header>)
                        :
                        (<header><Link to={"/connexion"}>Connexion</Link></header>)
                    }
                </li>
                <li>
                    {userId ?
                        ((<header><Link to={"/"} onClick={() => {localStorage.removeItem("userId"); setUserId("");}}>Déconnexion</Link></header>))
                        :
                        (<></>)
                    }
                </li>
            </ul>
        </header>
    );
}

export default Header