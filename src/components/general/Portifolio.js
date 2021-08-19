import React from "react";

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
							<a target="_blank" href={item.urlLink} rel="noreferrer">
								<img src={item.urlImage} alt="" />
          		</a>
						</div>
						<p>{item.Name}</p>
				</li>
        })
      }
    </ul>;
  }
}

export default PortifolioPage
