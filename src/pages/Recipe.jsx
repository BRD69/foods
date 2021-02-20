import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({})
    const {goBack} = useHistory()

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id]);

    return (
        <>
            <button className="btn" onClick={goBack}>Назад</button>
            {
                !recipe.idMeal ?
                    (<Preloader/>)
                    :
                    (
                        <div className="recipe">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                            <h2>{recipe.strMeal}</h2>
                            <h6>Категория: {recipe.strCategory}</h6>
                            {recipe.strArea ? <h6>Страна: {recipe.strArea}</h6> : null}
                            <p>{recipe.strInstructions}</p>
                            <table className="highlight">
                                <thead>
                                    <tr>
                                        <th>Ингредиент</th>
                                        <th>Количество</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if(key.includes('strIngredient') && recipe[key]){
                                            return(
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>{
                                                        recipe[`strMeasure${key.slice(13)}`]
                                                    }</td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    })
                                }
                                </tbody>
                            </table>
                            {recipe.strYoutube ? (
                                <div className="row">
                                    <h5>Видео</h5>
                                    <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allowFullScreen/>
                                </div>
                            ) : null}
                        </div>
                    )
            }
        </>
    )
}

export {Recipe}