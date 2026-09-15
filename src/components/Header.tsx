import {Link} from "react-router-dom";

function Header() {
    let userId = localStorage.getItem("userId")
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
                        (<header><Link to={`/profile/${Number(userId)}`}>Mon profil</Link></header>)
                        :
                        (<header><Link to={"/connexion"}>Connexion</Link></header>)
                    }
                </li>
            </ul>
        </header>
    );
}

export default Header