import React from 'react'

import Scroller from '../../../component_dev/scroller/src'

class Product extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
	render() {
		return(
			<Scroller>
				<div className="product-list">
					<ul className="content">
						{this.state.list}
					</ul>
				</div>
	      	</Scroller>
		)
	}
	componentDidMount() {
		let url = 'https://app.toursforfun.com/search/multiday-tour/product_list/1.0?page=1&page_size=10'
		fetch(url).then((res) => {
				return res.json()
			})
			.then((res) => {

				var keys = [];
				var values = [];
				for(var key in res.data.filter_condition.tag) {
					keys.push(key);
					values.push(res.data.filter_condition.tag[key])
				}
				console.log(values)
				var proList = values.map(function(item, index) {
					return(
						<li className="p-item">{item.name}</li>
					)
				})
				this.setState({
					list: proList
				})
			})
			.catch((e) => {
				console.log(e.message)
			})
	}
}

export default Product