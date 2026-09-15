// Page de connexion : Formulaire permettant de se connecter. La validation se fait
// côté client en vérifiant que les identifiants saisis correspondent bien à un utilisateur
// existant dans le deuxième fichier JSON (users.json).
import {type SyntheticEvent, useState} from "react";
import USERS from "../data/users.json"
import {useNavigate} from "react-router-dom";

function Connexion() {
    let [username, setUsername] = useState("")
    let [mdp, setMdp] = useState("")
    let navigate = useNavigate();

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        // console.log({username, mdp})
        e.preventDefault()
        let usernameVerif = USERS.users.find((u) => u.username === username)
        if (usernameVerif) {
            if (usernameVerif.password === mdp) {
                navigate(`/profile/${usernameVerif.id}`)
                localStorage.setItem("userId", String(usernameVerif.id))
                return
            }
        }
    }

    return (
        <section className="page">
            <div className="auth-card">
                <h1>Connexion</h1>
                <form
                    onSubmit={(e) => handleSubmit(e)}>
                    <label className="form-field">
                        Nom d'utilisateur :
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(u) => setUsername(u.target.value)}
                        />
                    </label>
                    <label className="form-field">
                        Mot de passe :
                        <input
                            type="password"
                            name="mdp"
                            value={mdp}
                            onChange={(m) => setMdp(m.target.value)}
                        />
                    </label>
                    <button type="submit" disabled={!username || !mdp} className="btn-primary">Connexion</button>
                </form>
            </div>
        </section>
    )
}

export default Connexion;