import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const HomeDataContext = createContext([])
const Main = () => {
    const datas = useLoaderData()
    return (
        <HomeDataContext.Provider value={datas}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </HomeDataContext.Provider>
    );
};

export default Main;