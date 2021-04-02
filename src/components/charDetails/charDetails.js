import React, { Component } from 'react';
import styled from 'styled-components';
import ThronesApi from '../../services/getRequest';


export default class CharDetails extends Component {

	gotService = new ThronesApi();

	state = {
		char: null
	}

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps) {
			this.updateChar();
		}
	}

	updateChar() {
		const { charId } = this.props;
		if (!charId) {
			return
		}
		this.gotService.getCharacter(charId)
			.then((char) => {
				this.setState({
					char
				})
			})
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

		if (!this.state.char) {
			return <span>Not selected</span>
		}
		const { name, gender, born, died, culture } = this.state.char;
		return (
			<CharDetailed>
				<h4>{name}</h4>
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
				</Properties>
			</CharDetailed>
		);
	}
}