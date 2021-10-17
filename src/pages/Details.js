import React from 'react';
import {Redirect} from 'react-router-dom';

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

import '../assets/styles/details.scss';


const Details = (props) => {

  if (!props.location.Name) {
    return  <Redirect  to="/portifolio" />
  }
  return(
    <>
      <Header />
      <Container>
        <h1>{props.location.Name}</h1>
        <img src={props.location.urlImage} className="img" alt="" />
        <p className="description">{props.location.Description}</p>
        <a href={props.location.urlLink} target="_blank" rel="noopener noreferrer" className="button">Visit</a>
        <a href="/portifolio" className="button">Back</a>
        <a href="/favorites" className="button">Favorite</a>
      </Container>
      <Footer />
    </>
  )
}

export default Details