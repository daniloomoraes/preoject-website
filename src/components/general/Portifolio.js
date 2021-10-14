import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import '../../assets/styles/components.scss'

class PortifolioPage extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://projettiweb.com.br/TEMP/feed.php`)
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
                pathname: '/details/'+item.Id+'/'+item.NameLink,
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

export default PortifolioPage