import React, { useEffect, useState } from 'react';
import HaveDinner from '../../HaveDinner/HaveDinner';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data));
    }, [])
    return (
        <div className="container">
            <h2>This is Dinner</h2>
            <div className="row">
                {
                    dinner.map(haveDinner => <HaveDinner
                        key={haveDinner.id}
                        haveDinner={haveDinner}
                    ></HaveDinner>)
                }
            </div>
        </div>
    );
};

export default Dinner;