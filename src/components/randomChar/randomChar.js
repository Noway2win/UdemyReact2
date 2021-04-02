import React, { Component } from 'react';
import styled from 'styled-components';
import ThronesApi from '../../services/getRequest';
import Loader from '../loader/loader';
import ErrorMessage from '../../components/Error/error';

export default class RandomChar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			char: {},
			loading: true,
			error: false
		}
		this.updateChar()
	}
	gotService = new ThronesApi();
	onError = (err) => {
		this.setState({
			loading: false,
			error: true
		})
	}
	updateChar() {
		const id = Math.floor(Math.random() * 140 + 25);
		// const id = 13000;
		this.gotService.getCharacter(id)
			.then((char) => {
				console.log(char);
				this.setState({
					char,
					loading: false
				}
				)
			})
			.catch(this.onError);
	}
	render() {
		const CharDetailed = styled.div`
		border-radius: 0.25rem !important;
		background-color: #fff;
    	padding: 25px 25px 15px 25px;
    	margin-bottom: 40px;
		& > h4{
			margin-bottom: 20px;
			text-align: center;
		}`,
			Properties = styled.ul`
		display: flex;
    	flex-direction: column;
    	padding-left: 0;
    	margin-bottom: 0;`,
			OneProperty = styled.li`
			border-top-width: 0;
			border-right-width: 0;
    		border-left-width: 0;
    		border-radius: 0;
			display: flex !important;
			position: relative;
    		padding: 0.75rem 1.25rem;
    		background-color: #fff;
			justify-content: space-between;
    		border-bottom: 1px solid rgba(0, 0, 0, 0.125);
			box-sizing: border-box;
		`,
			Term = styled.span`
		font-weight: bold;`;


		const { char, loading, error } = this.state;

		const Content = ({ char }) => {
			const { name, gender, born, died, culture } = char;
			return (<>
				<h4>Random char: {name}</h4>
				<Properties>
					<OneProperty>
						<Term>Gender</Term>
						<span>{gender}</span>
					</OneProperty>
					<OneProperty>
						<Term>Born</Term>
						<span>{born}</span>
					</OneProperty>
					<OneProperty>
						<Term>Died</Term>
						<span>{died}</span>
					</OneProperty>
					<OneProperty>
						<Term>Culture</Term>
						<span>{culture}</span>
					</OneProperty>
				</Properties></>)
		};

		const errorMsg = error ? <ErrorMessage /> : null,
			load = loading ? <Loader /> : null,
			content = !(loading || error) ? <Content char={char} /> : null;

		return (
			<CharDetailed>
				{errorMsg}
				{load}
				{content}
			</CharDetailed>

		);
	}
}
