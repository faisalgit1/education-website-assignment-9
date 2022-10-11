import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Optiones from '../Optiones/Optiones';

import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const Questione = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;

    const [showIcon, setIcon] = useState(false)

    const checkAnswer = (selectedOption) => {
        if (correctAnswer === selectedOption) {
            toast.success('Right', { autoClose: 500 })
        }
        else {
            toast.warning('Wrong Answer!', { autoClose: 500 })

        }
    }
    return (
        <div>
            <div className='font-semibold text-white text-center'>
                <div className='px-10 md:mr-60 md:ml-60 '>
                    <div className='flex items-center justify-between md:px-10 px-2 bg-black my-4'>
                        <div>
                            <p className='my-5  '> Question:{question}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon onClick={() => setIcon(true)} icon={faEye} />

                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 md:px-10 px-0'>
                        {
                            options.map(option => <Optiones
                                key={option.id}
                                option={option}
                                checkAnswer={checkAnswer}
                            ></Optiones>)
                        }


                    </div>
                    <div>
                        <p className={`${showIcon ? 'block text-red-500 font-bold' : 'hidden'}`}>
                            Correct Ans: {correctAnswer}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questione;