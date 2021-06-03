import React from 'react';

function Button(props) {
	function nextButton() {
		props.onPress('increment')
	}

	function backButton() {
		props.onPress('decrement')
	}

	function restartButton() {
		props.onPress('restart')
	}

	if (props.pageNum > 0 && props.pageNum < 3) {
		return (
			<div className='button'>
				<button className='next-button' onClick={nextButton}>NEXT</button>
				<button className='back-button' onClick={backButton}>BACK</button>
			</div>
		)
	}

	else if (props.pageNum === 0 || props.pageNum === 2) {
		return (
			<div className='button'>
				<button className='next-button' onClick={nextButton}>NEXT</button>
			</div>
		)
	}

	else {
		return (
			<div className='button'>
				<button className='restart-button' onClick={restartButton}>RESTART</button>
			</div>
		)
	}
} 

export default Button;