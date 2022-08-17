import React, {useCallback, useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMealsHandler = (async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://foodms-6bf9d-default-rtdb.firebaseio.com/meals.json')
            if (!response.ok) throw new Error('Something went wrong!')

            const data = await response.json()
            const loadedMeals = []
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedMeals)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }, [])
    useEffect(() => {
        fetchMealsHandler()
    }, []);

    let content = <p>Found no meals</p>

    if (meals.length > 0) {
        content = meals.map(meal =>
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}/>
        )
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (<section className={classes.meals}>
        <Card>
            <ul>
                {content}
            </ul>
        </Card>
    </section>);
};

export default AvailableMeals;
