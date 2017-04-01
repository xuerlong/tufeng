import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/store'

import MenuImg from './../../../image/list/swtich_small_img.png'


const ACTIVE = { color: "#0090f2" }

class ManyDay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			manyList: []
		};
	}
	render() {
		
		return(
			<div className="my-list">
				<div className="many-header">
					<Link to="/" className="icon-left">
						<i className="iconfont icon-txt">&#xe605;</i>
					</Link>
					<h1 className="title">多日游</h1>
					<span className="icon-right">
						<img src={MenuImg} />
					</span>
				</div>
				<ul className="many-nav">
					<li className="bourn nav-common active">
						<Link to="hot/multiday-tour/place" activeStyle={ACTIVE}>
							目的地
						</Link>
					</li>
					<li className="filtrate nav-common active">
						<Link to="hot/multiday-tour/choose" activeStyle={ACTIVE}>
							筛选
						</Link>
					</li>
					<li className="recommend nav-common active">
						<Link to="hot/multiday-tour/product" activeStyle={ACTIVE}>
							推荐产品
						</Link>
					</li>
				</ul>
				<section>
					{this.props.children}
				</section>
			</div>
		)
	}
	componentDidMount() {
		function getUrlSearch(url, name) {
			var position = url.indexOf("?");
			if(position != -1) {
				var search = url.substr(position + 1);
				var username = search.substr(search.indexOf("=") + 1)
				return username;
			}
			return "";
		}
		var urlId = getUrlSearch(window.location.href, "search")

		const url = 'https://app.toursforfun.com/search/' + urlId + '/product_list/1.0?page=1&page_size=10'
		fetch(url).then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res)
				var proList = res.data.product_list.map(function(item, index) {
					return(
						<div>
						<img src={item.image} />
					</div>
					)
				})
				this.setState({
					manyList: proList
				})
			})
			.catch((e) => {
				console.log(e.message)
			})
	}
}

export default ManyDay
//export default connect(
//mapStateToProps,
//mapDispatchToProps
//)(ManyDay)