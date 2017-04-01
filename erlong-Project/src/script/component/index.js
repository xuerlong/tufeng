import React from 'react'

import { Link } from 'react-router'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '去国外'
    }
  }
  clickHandler(type) {
    this.setState({
      title: type
    })
  }
	
	onWheel(){
		
	}
  render() {
    return (
      <div className="m-index">
				
      	<section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li className="active">
              <Link to="/board/quality" onClick={this.clickHandler.bind(this, '')} activeClassName="active">
                <i className="iconfont">&#xe604;</i>
                <b>首页</b>
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={this.clickHandler.bind(this, '目的地')} activeClassName="active">
                <i className="iconfont">&#xe60c;</i>
                <b>目的地</b>
              </Link>
            </li>
            <li>
            <Link to="/my" onClick={this.clickHandler.bind(this, '我的')} activeClassName="active">
              <i className="iconfont">&#xe64f;</i>
              <b>我的</b>
            </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
  componentDidUpdate() {
    let title = this.props.routes[1].title
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
}

//export default Index
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index) 