import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import '../../assets/styles/components.scss'

var URLfavoritesOK = '';
if(!localStorage.getItem('favorites')){
  const URLfavorites = `https://projettiweb.com.br/TEMP/feed.php?id=0`;
  URLfavoritesOK = URLfavorites.replace(' ', '');
}else{
  if(JSON.parse(localStorage.getItem('favorites')).length === 0){
    const URLfavorites = `https://projettiweb.com.br/TEMP/feed.php?id=0`;
    URLfavoritesOK = URLfavorites.replace(' ', '');  
  }else{
    const idFavorites = localStorage.getItem('favorites');
    const idFavorites1 = idFavorites.replace('[', '');
    const idFavorites2 = idFavorites1.replace(']', '');
    const idFavorites3 = idFavorites2.replace(/"/g, '');
    const URLfavorites = `https://projettiweb.com.br/TEMP/feed.php?id=${idFavorites3}`;
    URLfavoritesOK = URLfavorites.replace(' ', '');
  }
}
class FavoritePage extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`${URLfavoritesOK}`)
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
                pathname: '/favorite/'+item.Id+'/'+item.NameLink,
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