import React from 'react';

const Optiones = ({ option, checkAnswer }) => {
    return (
        <div>
            <button onClick={() => checkAnswer(option)} type="button" className="px-8 py-3 bg-black w-80 font-semibold border rounded dark:border-gray-100 hover:bg-slate-900 dark:text-gray-100">{option}</button>
        </div >
    );
};

export default Optiones;