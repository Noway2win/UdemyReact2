import React, { Component } from 'react';
import styled from 'styled-components';
export default class CharDetails extends Component {

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

		return (
			<CharDetailed>
				<h4>John Snow</h4>
				<Properties>
					<OneProperty>
						<Term>Gender</Term>
						<span>male</span>
					</OneProperty>
					<OneProperty>
						<Term>Born</Term>
						<span>1783</span>
					</OneProperty>
					<OneProperty>
						<Term>Died</Term>
						<span>1820</span>
					</OneProperty>
					<OneProperty>
						<Term>Culture</Term>
						<span>First</span>
					</OneProperty>
				</Properties>
			</CharDetailed>
		);
	}
}