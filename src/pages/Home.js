import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import Slider from '../components/general/CarouselHome'

import '../assets/styles/home.scss';

const Home = () => (
    <>
        <Header />
        <Slider />
        <Footer />
    </>
)

export default Home