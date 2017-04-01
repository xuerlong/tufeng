import React, { Component } from 'react'
import MultiList from '../../../component_dev/multilist/src/'
import "babel-polyfill"
import {
	trafficData,
	localData,
	distanceData,
	reginData,
	toturistAttractionData,
	subWayData,
	american,
	hot,
	Austrilia,
	Europe
} from '../../../component_dev/multilist/test/testdata.js';

const originalData = {
	subList: [{
		name: '热门',
		value: 'distance',
		subItemType: 'RADIO',
		subList: hot,
		defaultValue: 0
	}, {
		name: '美洲',
		value: 'downtown',
		subItemType: 'RADIO',
		subList: [{
			value: 'city',
			name: '加拿大',
			subItemType: 'MENU',
			defaultValue: 0,
			subList: american.canada
		}, {
			value: 'nearby',
			name: '美国',
			subItemType: 'MENU',
			defaultValue: 0,
			subList: american.american
		}, {
			value: '3',
			name: '墨西哥',
			subItemType: 'MENU',
			defaultValue: 0,
			subList: american.Mexico
		}],
		defaultValue: 0
	}, {
		name: '澳新',
		value: 'region',
		subItemType: 'MENU',
		subList: [{
			value: 'city',
			name: '澳大利亚',
			subItemType: 'RADIO',
			defaultValue: 0,
			subList: Austrilia.Austrilia
		}, {
			value: 'nearby',
			name: '新西兰',
			subItemType: 'RADIO',
			defaultValue: 0,
			subList: Austrilia.Newzl
		}, {
			value: '3',
			name: 'French Polynesia',
			subItemType: 'RADIO',
			defaultValue: 0,
			subList: Austrilia.French
		}],

		defaultValue: 0
	}, {
		name: '欧洲',
		value: 'scenic',
		subItemType: 'MENU',
		subList: [{
				value: 'city',
				name: 'Andorra',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Andorra
			}, {
				value: 'nearby',
				name: '奥地利',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Austria
			}, {
				value: '1',
				name: '比利时',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Belgium
			}, {
				value: '2',
				name: '瑞士',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Swit
			}, {
				value: '3',
				name: '捷克',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Czech
			}, {
				value: '4',
				name: '德国',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Germany
			}, {
				value: '5',
				name: '丹麦',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Denmark
			}, {
				value: '6',
				name: '英格兰',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.England
			}, {
				value: '7',
				name: '西班牙',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.Spain
			}, {
				value: '8',
				name: '法国',
				subItemType: 'RADIO',
				defaultValue: 0,
				subList: Europe.French
			}

		]
	}],
	subItemType: 'MENU',
	onItemTapType: 'DEFAULT',
	defaultValue: 'downtown'
};

class Place extends Component {
	constructor(props) {
		super(props);
		this.state = {
			multiValue: [],
			dataSource: originalData
		};
	}
	handleUpdateData() {}
	handleValueChange({ newValue, newItems }) {
		let value;
		if(newValue[newValue.length - 1] === 0) {
			value = [];
		} else {
			value = newValue;
		}
		console.log(newItems.map(item => Array.isArray(item) ? item.map(i => i.name).join('_') : item.name).join(','));
		this.setState({
			multiValue: value
		});
	}
	handleRenderContent() {}
	async handleAsyncData(item) {
		console.log('触发了一次异步加载回调');
	}
	render() {
		return(
			<MultiList
                dataSource={this.state.dataSource}
                value={this.state.multiValue}
                onItemTap={() => this.handleItemTap()}
                onChange={this.handleValueChange.bind(this)}
                renderContent={() => this.handleRenderContent()}
                onUpdateData={this.handleAsyncData.bind(this)}
            />
		);
	}
	componentDidMount() {

	}
}
export default Place