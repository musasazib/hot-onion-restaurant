import React from 'react';

const HaveLunch = ({ haveLunch }) => {
    const { lunchImg, lunchName, lunchAbout, lunchPrice } = haveLunch;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div style={{ width: "18rem" }}>
                <img src={lunchImg} class="card-img-top" alt="..." />
                <h3>{lunchName}</h3>
                <div class="card-body">
                    <p class="card-text">{lunchAbout}</p>
                    <h2>$ {lunchPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default HaveLunch;