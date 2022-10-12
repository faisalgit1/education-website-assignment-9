import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questione from '../Questione/Questione';

const Questiones = () => {
    const questiones = useLoaderData()
    const { name } = questiones.data;
    const quizes = questiones.data.questions;

    const [correctAns, setCorrectAns] = useState([0])
    const [wrongAns, setWrongAns] = useState([0])

    const handleWrongAns = () => {
        let newAns = parseFloat(wrongAns) + 1;
        setWrongAns(newAns)
    }
    const handleCorrectAns = () => {
        let newAns = parseFloat(correctAns) + 1;
        setCorrectAns(newAns)
    }
    return (
        <div>
            <div className='text-center text-white my-4'>
                <h1 className='text-black text-4xl font-semibold'>{name} Questions </h1>
                <h4 className='text-green-500 text-2xl'>Right: {correctAns}</h4>
                <h4 className='text-red-500 text-2xl'>Wrong: {wrongAns}</h4>
            </div>
            <div>
                {
                    quizes.map(quiz => <Questione
                        key={quiz.id}
                        quiz={quiz}
                        handleCorrectAns={handleCorrectAns}
                        handleWrongAns={handleWrongAns}
                    ></Questione>)
                }
            </div>
        </div>
    );
};

export default Questiones;