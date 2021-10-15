import React from 'react';

const MorningMeal = ({ morningMeal }) => {
    const { breakfastImg, breakfastName, breakfastAbout, breakfastPrice } = morningMeal;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div style={{ width: "18rem" }}>
                <img src={breakfastImg} class="card-img-top" alt="..." />
                <h3>{breakfastName}</h3>
                <div class="card-body">
                    <p class="card-text">{breakfastAbout}</p>
                    <h2>$ {breakfastPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default MorningMeal;