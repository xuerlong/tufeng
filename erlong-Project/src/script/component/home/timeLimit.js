import React from 'react'

class Time extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [<div/>]
		}
	}
	render() {
		return(
			<div className="product-list">
				{this.state.list}
	      	</div>
		)
	}
	componentDidMount() {
		let url = 'https://app.toursforfun.com/config/index/v1'
		fetch(url).then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res.data)
				var reg = /^\d+/g;
				var imgList = res.data.recommend_products[1].products_info.map(function(item,index){
//					console.log(item.image)
//					if(reg.test(item.image)){
//						item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
//						console.log(item.image)
//					}else if(reg.test(item.image)){
//						item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
//						console.log(item.image)
//					}	
					switch (true) {
						case reg.test(item.image):item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
						break;
						case reg.test(item.image):item.image = 'http://dn-toursforfun.qbox.me/images/'+item.image;
						break;
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
									<div className="count">
										已售
										<span className="value">
											{item.order_count}
										</span>
									</div>
									<div className="price">
										<span>¥</span>
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

export default Time



 