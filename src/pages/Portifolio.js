import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import PortifolioPage from '../components/general/Portifolio'

import '../assets/styles/portifolio.scss';

const Portifolio = () => (
    <>
        <Header />
        <Container>
            <h1>Portifólio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit non sem at rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <PortifolioPage />
        </Container>
        <Footer />
    </>
)

export default Portifolio