import React from 'react'

class My extends React.Component {
  render() {
    return (
      <div className="m-my scroll">
        <div className="my-header">
        		<p className="tips">未登录</p>
        		<div className="user-layout">
        			<i className="iconfont icon-user">&#xe702;</i>
        		</div>
        		<p className="login">点击头像登录~</p>
        </div>
        <ul className="my-navs">
        		<li className="nav-item">
        			<a>
        				<i className="iconfont">&#xe618;</i>
        				<p>全部订单</p>
        			</a>
        		</li>
        		<li className="nav-item">
        			<a>
        				<i className="iconfont">&#xe619;</i>
        				<p>待付款</p>
        			</a>
        		</li>
        		<li className="nav-item">
        			<a>
        				<i className="iconfont">&#xe648;</i>
        				<p>未出行</p>
        			</a>
        		</li>
        		<li className="nav-item">
        			<a>
        				<i className="iconfont">&#xe68a;</i>
        				<p>待评价</p>
        			</a>
        		</li>
        </ul>
        
        <div className="user-content">
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe61e;</i>
        		常用旅客
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe603;</i>
        		我的收藏
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe691;</i>
        		优惠券
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe602;</i>
        		意见反馈
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe70f;</i>
        		在线客服
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        	<h2 className="clipboard">
        		<i className="iconfont icon-left">&#xe601;</i>
        		设置
        		<i className="iconfont icon-right">&#xe63d;</i>
        	</h2>
        </div>
      </div>
    )
  }
}

export default My
