import React from 'react';

function ProgressBar(props) {
	const firstOption = {
		height: '25px',
		width: '25px',
		'backgroundColor': '#0f7ab4',
		'borderRadius': '50%',
		margin: '0px'
	}
	const main = {
		display: 'flex',
		'flexDirection': 'column',
		'justifyContent': 'space-evenly'
	}
	const bar = {
		display: 'flex',
		'flexDirection': 'row',
		'justifyContent': 'center',
	}

	const headings = {
		display: 'flex',
		'flexDirection': 'row',
		'justifyContent': 'space-between'
	}
	const line = {
		width: '100px',
		height: '6px',
		'backgroundColor': '#0f7ab4',
		'margin': '10px 0px 0px 0px'
	}

	if (props.page === 0) {

		return (
			<div style={main}>
				<div style={headings}> 
					<span style={{color: 'white'}}> Revenue </span>
					<span style={{color: 'white'}}> Expenses </span>
					<span style={{color: 'white'}}> Compare </span>
				</div>
				<div style={bar}>
					<div style={firstOption}></div>
					<div style={{...line, 'backgroundColor': 'gray'}}></div>
					<div style={{...firstOption, 'backgroundColor': 'gray'}}></div>
					<div style={{...line, 'backgroundColor': 'gray'}}></div>
					<div style={{...firstOption, 'backgroundColor': 'gray'}}></div>
				</div>
			</div>
		)
	}
	

	else if (props.page === 1) {
		return (
			<div style={main}>
				<div style={headings}> 
					<span style={{color: 'white'}}> Revenue </span>
					<span style={{color: 'white'}}> Expenses </span>
					<span style={{color: 'white'}}> Compare </span>
				</div>
				<div style={bar}>
					<div style={firstOption}></div>
					<div style={line}></div>
					<div style={firstOption}></div>
					<div style={{...line, 'backgroundColor': 'gray'}}></div>
					<div style={{...firstOption, 'backgroundColor': 'gray'}}></div>
				</div>
			</div>
		)
	}

	else {
		return (
			<div style={main}>
				<div style={headings}> 
					<span style={{color: 'white'}}> Revenue </span>
					<span style={{color: 'white'}}> Expenses </span>
					<span style={{color: 'white'}}> Compare </span>
				</div>
				<div style={bar}>
					<div style={firstOption}></div>
					<div style={line}></div>
					<div style={firstOption}></div>
					<div style={line}></div>
					<div style={firstOption}></div>
				</div>
			</div>
		)
	}
}

export default ProgressBar;
