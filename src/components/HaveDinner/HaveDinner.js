import React from 'react';

const HaveDinner = ({ haveDinner }) => {
    const { dinnerImg, dinnerName, dinnerAbout, dinnerPrice } = haveDinner;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div style={{ width: "18rem" }}>
            <img src={dinnerImg} class="card-img-top" alt="..." />
                <h3>{dinnerName}</h3>
                <div class="card-body">
                    <p class="card-text">{dinnerAbout}</p>
                    <h2>$ {dinnerPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default HaveDinner;