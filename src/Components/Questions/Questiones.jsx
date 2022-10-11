import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Questiones = () => {
    const questiones = useLoaderData()
    const { name } = questiones.data;
    const quizes = questiones.data.questions;
    console.log(questiones)
    return (
        <div>

        </div>
    );
};

export default Questiones;