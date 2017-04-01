import React from 'react'
import Carousel from '../../component_dev/carousel/src/'
import ActionSheet from 'action-sheet'
import { Link } from 'react-router'

import Boutique from './../../image/home/tff-boutique.png'
import Main from './../../image/home/home2017.png'

const as = new ActionSheet({
	buttons: {
		"7*24小时服务热线": (e) => {
			console.log("0")
		},
		"(中国)400-635-6555": function(e) {
			console.log("save")
		},
		"(美国)866-638-6888": function(e) {
			console.log('copy')
		}
	}
})


class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [<div/>],
			show: true
		}
	}
	onwheel(){
		this.offsetHeight = 0 ? this.show : this.show
	}
	render() {
		return(
			<div className="m-board">
		      	<div className="header" >
			      <div className="yo-header yo-header-a">
			      	<p className="leftico iconfont">&#xe63f;</p>
			        <h2 className="title">首 页</h2>
			        <span className="rightico iconfont" onClick={this.handleWheel}>&#xe620;</span>
			      </div>
		    	</div>
		        <div className="swiper">
		        	<Carousel delay={3}>
		        		{this.state.list}
		        	</Carousel>
		        </div>
		        <div className="main">
		        	<div className="searchBox">
		        		<div className="searchLeft">
		        			<Link to="/searchMain">
				        		<i className="iconfont search-ico">&#xe63f;</i>
				        		<span className="searchText">搜索关键词、产品ID</span>
			        		</Link>
			        	</div>
			        		<i className="iconfont hot-phone" onClick={this.handleWheel}>&#xe620;</i>
		        	</div>
		        	<div className="row">
		        		<Link to="hot/1?search=multiday-tour" className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">多日游</h4>
		        		</Link>
		        		<Link to="hot/2?search=daytour" className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">一日游</h4>
		        		</Link>
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">票务</h4>
		        		</a>
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">定制包团</h4>
		        		</a>
		        	</div>
		        	<div className="row row2">
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">游轮游</h4>
		        		</a>
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">通讯</h4>
		        		</a>
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">签证</h4>
		        		</a>
		        		<a className="home-kind">
		        			<div className="home-nav"></div>
		        			<h4 className="title">接送</h4>
		        		</a>
		        	</div>
		        </div>
		    	<div className="boutique">
		    		<img src={Boutique} />
		    	</div>
		    	<div className="pageNav">
		    		<ul>
		    			<li className="active">
		    				<Link to="/board/quality" activeClassName="active">
		    					<h3>品质精选</h3>
		    				</Link>
		    			</li>
		    			<li className="active">
		    				<Link to="/board/star" activeClassName="active">
		    					<h3>销量明星</h3>
		    				</Link>
		    			</li>
		    			<li className="active">
		    				<Link to="/board/timeLimit" activeClassName="active">
		    					<h3>限时特惠</h3>
		    				</Link>
		    			</li>
		    		</ul>
		    	</div>
		    	<div className="weekly">
		    		<div className="product-list">
		    			{this.props.children}
		    		</div>
		    	</div>
		    </div>
		)
	}
	handleWheel() {
		console.log(1)
		as.show()
	}

	componentDidMount() {
		fetch('https://app.toursforfun.com/config/index/v1')
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				var dataList = res.data.banner.map(function(item, index) {
					return(
						<li className="item">
  							<img className="img" src={'http://dn-toursforfun.qbox.me/images/'+item.picture+'?imageView2/1/w/720/h/404/q/90/format/jpg'} alt={item.name} />
  						</li>
					)
				})
				this.setState({
					list: dataList
				})
			})
			.catch((e) => {
				console.log(e.message)
			})
	}

}

export default Board