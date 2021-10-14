import React from "react";
import { Link } from 'react-router-dom'

import '../../assets/styles/components.scss'

class PortifolioPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	loadData() {
		fetch('https://projettiweb.com.br/TEMP/feed.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}

	componentDidMount() {
		this.loadData()
	}

  render() {
    return <ul className="list-portifolio">

      {
      this.state.data.map((item, i) => {
				return <li key={item.Id} className='item'>
						<div>
							<Link to={{ pathname: '/details/'+item.Id+'/'+item.NameLink}} key={item.Id}>
								<img src={item.urlImage} alt={item.Name} />
							</Link>
						</div>
						<p>{item.Name}</p>
				</li>
        })
      }
    </ul>;
  }
}

export default PortifolioPage
