import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import '../../assets/styles/components.scss'

const idFavorites = localStorage.getItem('favorites');
const idFavorites1 = idFavorites.replace('[', '');
const idFavorites2 = idFavorites1.replace(']', '');
const idFavorites3 = idFavorites2.replace(/"/g, '');
const URLfavorites = `https://projettiweb.com.br/TEMP/feed.php?id=${idFavorites3}`;
const URLfavoritesOK = URLfavorites.replace(' ', '');

class FavoritePage extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(URLfavoritesOK)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul className="list-portifolio">
        { this.state.persons.map(item =>
          <li key={item.Id} className='item'>
						<div>
							<Link 
              to={{
                pathname: '/Favorite/'+item.Id+'/'+item.NameLink,
                Id: item.Id,
                NameLink: item.NameLink,
                Name: item.Name,
                Description: item.Description,
                urlImage: item.urlImage,
                urlLink: item.urlLink,
              }}
              >
								<img src={item.urlImage} alt={item.Name} />
							</Link>
						</div>
						<p>{item.Name}</p>
				</li>
        )}
      </ul>
    )
  }
}

export default FavoritePage