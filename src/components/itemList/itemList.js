import React, { Component } from 'react';
import styled from 'styled-components';

export default class ItemList extends Component {

	render() {
		const ListGroup = styled.ul`
		cursor: pointer;
		width: 100%;
		background: white;
		border-radius: 5px;`,
			ListItem = styled.li`
		cursor: pointer;
		line-height: 2;
		border-bottom: solid 1px black;
		padding: 15px;`;

		return (
			<ListGroup>
				<ListItem>
					John Snow
                </ListItem>
				<ListItem>
					Brandon Stark
                </ListItem>
				<ListItem>
					Geremy
                </ListItem>
			</ListGroup>
		);
	}
}