import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export const HomeDataContext = createContext([])
const Main = () => {
    const datas = useLoaderData()
    return (
        <HomeDataContext.Provider value={datas}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </HomeDataContext.Provider>
    );
};

export default Main;