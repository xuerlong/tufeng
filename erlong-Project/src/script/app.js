require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Board from './component/board'
import Search from './component/search'
import My from './component/my'
import Quality from './component/home/quality'
import Star from './component/home/star'
import Time from './component/home/timeLimit'

import Hot from './component/menu/hot'
import List from './component/degital/list'

import SearchMain from './component/degital/searchMain'
import Place from './component/degital/place'
import Choose from './component/degital/choose'
import Product from './component/degital/product'

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path="/" component={Index}>
	      <IndexRoute component={Board}></IndexRoute>
	      <Route path="board" title="首页" component={Board}>
	      	<IndexRoute component={Quality}></IndexRoute>
	      	<Route path="quality" component={Quality}></Route>
	      	<Route path="star" component={Star}></Route>
	      	<Route path="timeLimit" component={Time}></Route>
	      </Route>
	      <Route path="search" title="目的地" component={Search}>
	      </Route>
	      <Route path="my" title="我的" component={My}></Route>
	    </Route>
	    <Route path="/hot/:type" component={Hot}>
	    	<IndexRoute component={List}></IndexRoute>
	    	<Route path="place" component={Place}></Route>
	    	<Route path="choose" component={Choose}></Route>
	    	<Route path="product" component={Product}></Route>
	    </Route>
	    <Route path="/searchMain" component={SearchMain}>
	    </Route>
	  </Router>
	</Provider>,
	document.getElementById('root')
)