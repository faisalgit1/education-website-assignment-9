import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { HomeDataContext } from '../../Layout/Main';

const Statics = () => {
    const datas = useContext(HomeDataContext)
    const data = datas.data
    return (
        <div>
            <div className='p-7'>
                <h1 className='text-5xl'>This sites is about to the all total questiones details show to this chart  </h1>
            </div>
            <div className='flex  justify-center'>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statics;