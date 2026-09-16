// Page de connexion : Formulaire permettant de se connecter. La validation se fait
// côté client en vérifiant que les identifiants saisis correspondent bien à un utilisateur
// existant dans le deuxième fichier JSON (users.json).
import {type Dispatch, type SetStateAction, type SyntheticEvent, useState} from "react";
import USERS from "../data/users.json"
// On récupère les
import {useNavigate, useOutletContext} from "react-router-dom";

function Connexion() {
    let [username, setUsername] = useState("")
    let [mdp, setMdp] = useState("")
    let navigate = useNavigate();
    // On précise qu'useOutletContext() contient et est typé comme pour le header, il faut que les nom soient exactement comme dans le contexte de l'outlet
    let { setUserid } = useOutletContext<{userid : string | null, setUserid: Dispatch<SetStateAction<string | null>>}>()

    // le type de l'event est un submit de formulaire HTML
    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        // on empêche le rafraichissement automatique
        e.preventDefault()
        let usernameVerif = USERS.users.find((u) => u.username === username)
        if (usernameVerif) {
            if (usernameVerif.password === mdp) {
                localStorage.setItem("userId", String(usernameVerif.id))
                setUserid(String(usernameVerif.id))
                navigate(`/profile/${usernameVerif.id}`)
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