import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {filterByCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([])
    const {goBack} = useHistory()

    useEffect(() => {filterByCategory(name).then((data) => setMeals(data.meals))}, [name])

    return (
        <>
            <button className="btn" onClick={goBack}>Назад</button>
            {
                !meals.length ?
                    (<Preloader/>)
                    :
                    (<MealList meals={meals}/>)
            }
        </>
    )

}

export {Category}