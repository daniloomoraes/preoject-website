import React from 'react'

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import ContactForm from '../components/general/ContactForm';

import '../assets/styles/contact.scss';

const Contact = () => (
    <>
        <Header />
        <Container>
            <h1>Contact</h1>
            <div className="contact">
                <div className="contact__info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit non sem at rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae dolor quis augue interdum tempus. Pellentesque sodales rhoncus erat at egestas. Donec sapien purus.</p>
                </div>
                <div className="contact__form">
                    <ContactForm />
                </div>
            </div>
        </Container>
        <Footer />
    </>
)

export default Contact