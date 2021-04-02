import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			randomCharVisible: true
		};
		this.onToogleRandomChar = this.onToogleRandomChar.bind(this);
	}
	onToogleRandomChar() {
		const { randomCharVisible } = this.state;
		this.setState({
			randomCharVisible: !randomCharVisible
		})
	}
	render() {
		const Container = styled.div`
		width: 100%;
    	padding-right: 15px;
    	padding-left: 15px;
    	margin-right: auto;
    	margin-left: auto;`,
			Row = styled.div`
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-right: -15px;
		margin-left: -15px;`,
			Col = styled.div`
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;`,
			ToogleButton = styled.button`
		background: blue;
		border: none;
		font-size: 20px;
		border-radius: 5px;
		min-width:200px;
		padding: 10px;
		margin-bottom: 15px;`;

		const { randomCharVisible } = this.state;
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col>
							{randomCharVisible ? <RandomChar /> : null}
							<ToogleButton onClick={this.onToogleRandomChar}>Hide</ToogleButton>
						</Col>
					</Row>
					<Row>
						<Col>
							<ItemList />
						</Col>
						<Col>
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	};
}