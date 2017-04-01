import React from 'react'
import {Link} from 'react-router'
import Range from '../../../component_dev/range/src'
import Scroller from '../../../component_dev/scroller/src'

class Choose extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            value: [200, 300]
        };
    }
    render() {
        return (
        	<div className="box">
	        	<Scroller>
	        		<div className="price-main">
		        		<div className="price-cho">
		        			<h4 className="title">请选择价格区间</h4>
		        		</div>
			            <Range
			                max={500}
			                min={0}
			                step={100}
			                value={this.state.value}
			                scalePosition=  {'top'} 
			                onChange={value => this.setState({ value })}
			            />
			            <div className="days">
			            	<h4 className="title">请选择行程天数</h4>
			            	<ul className="content">
			            		<li className="p-item" activeClassName="active">2-3<span>天</span></li>
			            		<li className="p-item" activeClassName="active">4-5<span>天</span></li>
			            		<li className="p-item" activeClassName="active">6-7<span>天</span></li>
			            		<li className="p-item" activeClassName="active">8-9<span>天</span></li>
			            		<li className="p-item">10<span>天以上</span></li>
			            	</ul>
			            </div>
		            </div>		            
	            </Scroller>
            	<div className="footer">
		            <div className="re-btn">
		            	重置
		           	</div>
		            <div className="ce-btn">
		            	<Link to="">
		            		确定
		            	</Link>
		            </div>
		        </div>
            </div>
        )
    }
	componentDidMount() {
		
	}
}

export default Choose



 