import React from 'react'
import {Link} from 'react-router'

class SearchMain extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '搜索关键词、产品ID',
			list: []
		}
		this.changeValue = this.changeValue.bind(this);
	}
	render() {
		return(
			<div className="search-main">
				<div className="search-header">
					<label>
						<i className="iconfont">&#xe600;</i>
						<input type="search" placeholder={this.state.value}/>
					</label>
					<button className="btn">
						<Link to="/board">
							取消
						</Link>
					</button>
				</div>
				<section>
					<div className="row">
						<div className="col">
							<h5>热门搜索</h5>
						</div>
					</div>
					<div className="hot-search">
						<div className="col">
							{this.state.list}
						</div>
					</div>
				</section>
			</div>
		)
	}
	changeValue(e){
		console.log(this.refs.app)
		this.setState({
			value: e.target.innerHTML
		})
	}
	componentDidMount() {
		let that = this;
		let url = "https://app.toursforfun.com/resource/popularSearch"
		fetch(url).then((res)=>{
			return res.json()
		})
		.then((res)=>{
			console.log(res)
			var hotList = res.data.map(function(item,index){
				return (
					<span onClick={that.changeValue} className="button-calm">{item}</span>					
				)
			})
			this.setState({
				list: hotList
			})
		})
		.catch((e)=>{
			console.log(e.message)
		})
	}
}

export default SearchMain



 