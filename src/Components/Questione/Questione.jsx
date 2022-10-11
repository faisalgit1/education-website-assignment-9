import React from 'react';

const Questione = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    return (
        <div>
            <h1>{question}</h1>
        </div>
    );
};

export default Questione;