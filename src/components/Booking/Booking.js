import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { mealsId } = useParams();
    return (
        <div>
            <h2>This is meal {mealsId}</h2>
        </div>
    );
};

export default Booking;