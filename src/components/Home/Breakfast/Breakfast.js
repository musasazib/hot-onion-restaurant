import React, { useEffect, useState } from 'react';
import MorningMeal from '../../MorningMeal/MorningMeal';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data));
    },[])
    return (
        <div className="container">

            <h2>This is Breakfast</h2>
            <div className="row">
                {
                    breakfast.map(morningMeal => <MorningMeal
                        key={morningMeal.id}
                        morningMeal={morningMeal}
                    ></MorningMeal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;