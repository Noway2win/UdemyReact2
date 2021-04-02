import React, { Component } from 'react';
import styled from 'styled-components';
import ThronesApi from '../../services/getRequest';
import Loader from '../loader/loader';

export default class ItemList extends Component {
	gotService = new ThronesApi();

	state = {
		charList: null
	}

	componentDidMount() {
		this.gotService.getAllChar()
			.then((charList) => this.setState({
				charList
			}))
	}


	renderItems(list) {
		const ListItem = styled.li`
		cursor: pointer;
		line-height: 2;
		border-bottom: solid 1px black;
		padding: 15px;`;
		return list.map((item, i) => {
			return <ListItem key={i}
				onClick={() => { this.props.onCharSelected(41 + i) }}
			>{item.name}</ListItem>
		})
	}
	render() {
		const ListGroup = styled.ul`
		cursor: pointer;
		width: 100%;
		background: white;
		border-radius: 5px;`;


		const { charList } = this.state;

		if (!charList) {
			return <Loader />
		}
		const items = this.renderItems(charList);
		return (
			<ListGroup>
				{items}
			</ListGroup>
		);
	}
}