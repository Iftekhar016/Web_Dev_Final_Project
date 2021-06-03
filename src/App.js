import React, { useRef, useEffect, useState } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';
import InputForm from './InputForm.jsx';
import Intro from './Intro.jsx';
import PieChart from './PieChart.jsx';
import ProgressBar from './ProgressBar.jsx';
import Button from './Buttons.jsx';
import ToolTip from './ToolTip.jsx';



/* App */
function App() {

	let revenueData = [ { name: "Medical Center", value: 45, color: '#f0bf00' }, 
						{ name: "State Unrestricted", value: 8, color: '#f6e50e' }, 
						{ name: "Tuition", value: 11, color: '#fff688' }, 
						{ name: "Student Fees", value: 4, color: '#5f63ec' }, 
						{ name: "Grants and Contracts", value: 13, color: '#71A8FF' }, 
						{ name: "Pell Grants", value: 1, color: '#0f7ab4' }, 
						{ name: "Non-educational Services", value: 11,  color: '7F8187'}, 
						{ name: "Gifts, Endowments, Interest, Etc.", value: 7, color: '#DC143C' } ]

	let expenditureData = [ { name: "Medical Center", value: 43, color: '#f0bf00' }, 
							{ name: "Teaching and Teaching Support", value: 23, color: '#f6e50e' },
							{ name: "Research", value: 11, color: '#7FFFD4' }, 
							{ name: "Student Services and Financial Aid", value: 8, color: '#5f63ec' }, 
							{ name: "Operations and Maintenance (Buildings, etc)", value: 2, color: '71A8FF' }, 
							{ name: "Administration", value: 3, color: '#0f7ab4' }, 
							{ name: "Non-Educational Services", value: 2 , color: '7F8187'}, 
							{ name: "Public Service", value: 2 , color: '#DC143C'}, 
							{ name: "Depreciation, Interest, etc.", value: 6, color: 'white' } ]


	const [revenue, setRevenue] = useState([
		{
			name: 'Medical Center',
			value: 0,
			color: '#f0bf00'
		},
		{
			name: "State Unrestricted",
			value: 0,
			color: '#f6e50e'
		},
		{
			name: 'Tuition',
			value: 0,
			color: '#fff688'
		},
		{
			name: "Student Fees",
			value: 0,
			color: '#5f63ec'
		},
		{
			name: 'Grants and Contracts',
			value: 0,
			color: '#71A8FF'
		},
		{
			name: 'Sales and Service, Auxillary',
			value: 0,
			color: '#0f7ab4'
		},
		{
			name: "Gifts, Endowments and Interest",
			value: 0,
			color: '#DC143C'
		},
		{
			name: "Other",
			value: 0,
			color: '#d4e4ff'
		}
	])

	function handleRevUpdate(category, value) {

		let updatedRevenue = revenue.map(item => {

			if(item.name === category) {
				return {...item, value: value}
			}

			else {
				return item;
			}

		})
		setRevenue(updatedRevenue);
	}

	const [expenses, setExpenses] = useState([
		{
			name: 'Medical Center',
			value: 0,
			color: '#f0bf00'
		},
		{
			name: 'Instruction and Academic Support',
			value: 0,
			color: '#f6e50e'
		},
		{
			name: 'Research',
			value: 0,
			color: '#7FFFD4'
		},
		{
			name: 'Student Services and Financial Aid',
			value: 0,
			color: '#5f63ec'
		},
		{
			name: 'Depreciation/Interest Expenses',
			value: 0,
			color: '#71A8FF'
		},
		{
			name: 'Institutional Support',
			value: 0,
			color:'#DC143C'

		},
		{
			name: 'Other',
			value: 0,
			color: '#00008B'
		}
	]);

	function handleExpUpdate(category, value) {

		let updatedExpenses = expenses.map(item => {

			if(item.name === category) {
				return {...item, value: value}
			}
			else {
				return item;
			}

		})

		setExpenses(updatedExpenses);
	} 

	const [page, setPage] = useState(0);
	function handlePageUpdate(command) {
		if (command === 'increment') {
			setPage(page+1)
		}

		else if (command === 'decrement') {
			setPage(page-1)
		}
		
		else {
			setPage(0)
		}
	}

	if (page === 0) {
		return (
			<div>
				<h1 className='mainTitle'> Slice The Pie </h1>
				<Intro/>
				<ProgressBar page={page}/>
				<h1 class = 'graphTitle'>UC Davis Revenues</h1>
				<PieChart data={revenue}/>
				<ToolTip/>
				<InputForm data={revenue} onChange={handleRevUpdate}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}
	

	else if (page === 1) {
		return (
			<div>
				<h1 className='mainTitle'> Slice the Pie! </h1>
				<Intro/>
				<ProgressBar page={page}/>
				<h1 className = 'graphTitle'>UC Davis Expenditure</h1>
				<PieChart data={expenses}/>
				<InputForm data={expenses} onChange={handleExpUpdate}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}

	else if (page===2) {
		return (
			<div>
				<h1 className='mainTitle'> Slice The Pie </h1>
				<Intro/>
				<ProgressBar page={page}/>
				<h1 className = 'resultTitle'>Results</h1>
				<h1 class = 'graphTitle'>Your Revenue Guess</h1>
				<PieChart data={revenue}/>
				<h1 class = 'graphTitle'>Actual Revenue</h1>
				
				<PieChart data={revenueData}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}

	else if (page === 3) {
		return (
			<div>
				<h1 className='mainTitle'> Slice The Pie </h1>
				<Intro/>
				<ProgressBar page={page}/>
				<h1 className = 'resultTitle'>Results</h1>
				<h1 class = 'graphTitle'>Your Expenses Guess</h1>
				<PieChart data={expenses}/> 
				
				<h1 class = 'graphTitle'>Actual Expenses</h1>
				<PieChart data={expenditureData}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}
}

export default App;