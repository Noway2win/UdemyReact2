import React from 'react';
import img from './Error.jpg';


const ErrorMessage = () =>{
	return (<>
		<img src={img} alt='error'></img>
		<span>Error</span>
	</>)
}

export default ErrorMessage;