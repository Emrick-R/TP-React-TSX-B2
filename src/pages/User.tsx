import {Navigate, useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import USERS from "../data/users.json"

function User() {
    let navigate = useNavigate();
    let {userid} = useParams();
    const userData = USERS.users.find(u => u.id === Number(userid));
    if (!userData) {
        // un composant react doit toujours retourner du JSX ou null. JSX de Navigate
        return <Navigate to={"/404"}/>
    }
    return (
        <div id="center" className="detail-card">
            <img src={userData.image} alt={`Image de l\'user n°${userData.id}`} className="detail-img"/>
            <h1>{userData.username}</h1>
            <button className="btn-back" onClick={() => navigate(-1)}> Retour</button>
        </div>
    );
}

export default User;