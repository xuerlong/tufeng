import React from 'react'

import Scroller from '../../../component_dev/scroller/src'

class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
	render() {
		return(
			<Scroller>
				<div className="product-list">{this.state.list}</div>				
	      	</Scroller>
		)
	}
	componentDidMount() {
		let url = 'https://app.toursforfun.com/search/multiday-tour/product_list/1.0?page=1&page_size=10'
		fetch(url).then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res.data)
				var reg = /^\d+/g;				
				var imgList = res.data.product_list.map(function(item,index){
					if(reg.test(item.image)){
						item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
						console.log(item.image)
					}else if(reg.test(item.image)){
						item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
						console.log(item.image)
					}	

					return (
						<a className="product-item">
							<div className="product-img">
								<img src={item.image} />
							</div>
							<div className="product-info">
								<h4 className="title">
									{item.product_name}
								</h4>
								<div className="price-wrap">
									<div className="list-tag">
										<i className="confirm"></i>
									</div>
									<div className="count">
										已售
										<span className="value">
											{item.order_count}
										</span>
									</div>
									<div className="price">
										<span>$</span>
										<span className="value">{item.default_price}</span>
										<span className="price-qi">起</span>
									</div>
								</div>
							</div>
						</a>
					)
					console.log(item.image)
				})
				this.setState({
					list: imgList
				})
			})
			.catch((e) => {
				console.log(e.message)
			})
	}
}

export default List



 