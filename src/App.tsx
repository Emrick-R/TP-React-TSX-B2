import './pages/css/App.css'
import RECIPES from "./data/recipes.json"
import {Link} from "react-router-dom";

function App() {

    return (
        <>
            <section className="page">
                <div>
                    <h1>Bienvenue Emrick RIVET !</h1>
                </div>
                <div >
                    <h2>Liste des recettes</h2>
                    <div className="card-grid">
                        {RECIPES.recipes.map((recipe) =>
                            <Link to={`/recette/${recipe.id}`} className="card">
                                <div>
                                    <img src={recipe.image} alt="Image de la recette" className="card-img"/>
                                    <h3> {recipe.name}</h3>
                                    <p className="card-subtitle">Temps de
                                        préparation: {recipe.prepTimeMinutes} minutes</p>
                                </div>
                            </Link>
                        )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
