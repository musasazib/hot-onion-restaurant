import React, { useEffect, useState } from 'react';
import HaveLunch from '../../HaveLunch/HaveLunch';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data));
    }, [])
    return (
        <div className="container">

            <h2>This is Lunch</h2>
            <div className="row">
                {
                    lunch.map(haveLunch => <HaveLunch
                        key={haveLunch.id}
                        haveLunch={haveLunch}
                    ></HaveLunch>)
                }
            </div>
        </div>
    );
};

export default Lunch;