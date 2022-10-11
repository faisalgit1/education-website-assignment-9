import React from 'react';


const HomeItem = ({ item }) => {
    const { name, total, logo, id } = item


    return (
        <div class="max-w-xs rounded-md p-6 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img className='bg-black' src={logo} />
            <div class="flex flex-col justify-between p-6 space-y-8">
                <div class="space-y-2">
                    <h2 class="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className='font-semibold'>Total: {total}</p>
                </div>
                <button type="button" class="flex items-center justify-center w-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 p-3 font-bold tracking-wide rounded-md ">Start Questions</button>
            </div>
        </div>
    );
};

export default HomeItem;