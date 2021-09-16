import React from 'react'
import Layout from '../core/Layout';
import { API } from '../config'
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';

import Outproduct from '../components/outproduct'


const Home = () => {

    return (
        <div className="Layout">
            <Header />
            <Products />
            <Outproduct />
            <Footer />
        </div>
    )
}

export default Home
