import React, { useContext } from 'react';
import { HomeDataContext } from '../../Layout/Main';
import HomeItem from '../HomeItem/HomeItem';

const Home = () => {
    const datas = useContext(HomeDataContext)
    console.log(datas)
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-4 row-gap-5 mt-0 mb-8 lg:grid-cols-4 md:grid-cols-2 lg:row-gap-8'>
                {datas.data.map(item => <HomeItem
                    key={item.id}
                    item={item}
                ></HomeItem>)}
            </div>
        </div>
    );
};

export default Home;