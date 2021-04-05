import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../loader/loader';

const ListGroup = styled.ul`
cursor: pointer;
width: 100%;
background: white;
border-radius: 5px;`;

export default class ItemList extends Component {
	state = {
		itemList: null
	}

	componentDidMount() {
		const { getData } = this.props;
		getData()
			.then((itemList) => this.setState({
				itemList
			}))
	}


	renderItems(list) {
		const ListItem = styled.li`
		cursor: pointer;
		line-height: 2;
		border-bottom: solid 1px black;
		padding: 15px;`;
		return list.map((item) => {
			console.log(item);
			return <ListItem key={item.id}
				onClick={() => { this.props.onItemSelected(item.id) }}
			>{item.name}</ListItem>
		})
	}

	render() {

		const { itemList } = this.state;

		if (!itemList) {
			return <Loader />
		}
		const items = this.renderItems(itemList);
		return (
			<ListGroup>
				{items}
			</ListGroup>
		);
	}
}