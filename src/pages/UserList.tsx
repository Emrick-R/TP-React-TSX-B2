import {Link} from "react-router-dom";
import USERS from "../data/users.json"

function UserList() {

    return (
        <section className="page">
            <h2>Liste des utilisateurs</h2>
            <div className="card-grid">
                {USERS.users.map((user) =>
                    <Link to={`/user/${user.id}`}>
                            <img src={user.image} alt="Image de l'utilisateur" className="card-img-round"/>
                            <p>Username : {user.username}</p>
                    </Link>
                )}
            </div>
        </section>
    );
}

export default UserList;