import React from 'react';
import Hero from '../Hero';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import StatCard from "../../Components/StatCard/index";
import "./Home.css";

const Home = () => {

    return (
        <>
            <Header />
            <div id="home">
                <Hero />
            </div >
            <StatCard />
            <Footer />
        </>
    )
}

export default Home;