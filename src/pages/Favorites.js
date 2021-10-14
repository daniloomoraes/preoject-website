import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

import '../assets/styles/favorites.scss';

const Favorites = () => (
    <>
        <Header />
        <Container>
            <h1>Favorites</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit non sem at rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </Container>
        <Footer />
    </>
)

export default Favorites