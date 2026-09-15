//Page de profil : En cas de correspondance, redirection automatique de l'utilisateur
// vers sa page de profil (avec affichage de toutes ses informations fournies dans
// users.json).
import {Navigate, useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import USERS from "../data/users.json"

function Profile() {
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
            <div>
                <h1>{userData.username}</h1>
                <p className="badge">{userData.role}</p>
            </div>
            <div className="info-block">
                <p>{userData.lastName} {userData.firstName}</p>
                <p>{userData.email} | {userData.phone}</p>
                <p>né le {userData.birthDate} - {userData.age} ans - {userData.gender}</p>
            </div>
            <div className="info-block">
                <h2>Adresse</h2>
                <p>{userData.address.address}</p>
                <p>{userData.address.city} {userData.address.postalCode} {userData.address.country}</p>
            </div>
            <div className="info-block">
                <h2>Entreprise</h2>
                <p>{userData.company.name}</p>
                <p>Service {userData.company.department} - {userData.company.title}</p>
            </div>
            <button onClick={() => navigate(-1)} className="btn-back"> Retour</button>
        </div>
    );
}

export default Profile;