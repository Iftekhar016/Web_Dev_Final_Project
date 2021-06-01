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
				<button onClick={nextButton}>NEXT</button>
				<button onClick={backButton}>BACK</button>
			</div>
		)
	}

	else if (props.pageNum === 0 || props.pageNum === 3) {
		return (
			<div className='button'>
				<button  onClick={nextButton}>NEXT</button>
			</div>
		)
	}

	else {
		return (
			<div className='button'>
				<button onClick={restartButton}>RESTART</button>
			</div>
		)
	}
} 

export default Button;