import React from 'react';
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';

import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

import '../assets/styles/details.scss';

const Details = (props) => {
  if (!props.location.Name) {
    return  <Redirect  to="/portifolio" />
  }

  function handleFavorite() {

    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var id = props.location.Id,
    index = favorites.indexOf(id);
    if (!id) return;
    if (index === -1) {
      favorites.push(id);
      Swal.fire(
        'Favorite!',
        'Successfully added to your favorite',
        'success'
      )    
    } else {
      favorites.splice(index, 1);
      Swal.fire(
        'Favorite!',
        'Bookmark successfully removed',
        'warning'
      )    
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return(
    <>
      <Header />
      <Container>
        <h1>{props.location.Name}</h1>
        <img src={props.location.urlImage} className="img" alt={props.location.Name} />
        <p className="description">{props.location.Description}</p>
        <a href={props.location.urlLink} target="_blank" rel="noopener noreferrer" className="button">Visit</a>
        <a href="/portifolio" className="button">Back</a>
        <button onClick={handleFavorite} className="button">Favorite</button>
      </Container>
      <Footer />
    </>
  )
}

export default Details