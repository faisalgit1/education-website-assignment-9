import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questione from '../Questione/Questione';

const Questiones = () => {
    const questiones = useLoaderData()
    const { name } = questiones.data;
    const quizes = questiones.data.questions;
    console.log(questiones)
    return (
        <div>
            <div className='text-center text-white my-4'>
                <h1 className='text-4xl font-semibold'>{name} Questions </h1>
            </div>
            <div>
                {
                    quizes.map(quiz => <Questione
                        key={quiz.id}
                        quiz={quiz}
                    ></Questione>)
                }
            </div>
        </div>
    );
};

export default Questiones;