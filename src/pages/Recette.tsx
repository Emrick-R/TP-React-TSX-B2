//Vue détaillée : Consultation complète d’une recette sélectionnée via son identifiant
// (visuel grand format, ingrédients, étapes).
import {Navigate, useNavigate, useParams} from "react-router-dom";
import RECIPES from "../data/recipes.json"

function Recette() {
    let navigate = useNavigate()
    let {recetteid} = useParams()
    const recette = RECIPES.recipes.find(r => r.id === Number(recetteid))
    if (!recette) {
        return <Navigate to={"/404"}/>
    }
    return (
        <section className="page">
            <div className="recipe-detail">
                <img src={recette.image} alt="Image de la recette" className="recipe-img"/>
                <h1>{recette.name}</h1>
                <p className="recipe-meta">{`Temps de préparation : ${recette.prepTimeMinutes} minutes \| Temps de cuissons : ${recette.cookTimeMinutes} minutes`}</p>
                <div className="recipe-columns">
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                            {recette.ingredients.map((ingredient) =>
                                <li>{ingredient}</li>
                            )
                            }
                        </ul>
                    </div>
                    <div>
                        <h2>Instruction</h2>
                        <ul>
                            {recette.instructions.map((instruction) =>
                                <li>{instruction}</li>
                            )
                            }
                        </ul>
                    </div>
                </div>
                <button onClick={() => navigate(-1)} className="btn-back"> Retour</button>
            </div>
        </section>
    );
}

export default Recette;