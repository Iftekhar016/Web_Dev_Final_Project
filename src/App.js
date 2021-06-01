import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import InputForm from './InputForm.jsx';
import Intro from './Intro.jsx';
import PieChart from './PieChart.jsx';
import ProgressBar from './ProgressBar.jsx';
import Button from './Buttons.jsx';


/* App */
function App() {

	let revenueData = [ { name: "Medical Center", value: 45, color: 'red' }, { name: "State Unrestricted", value: 8 }, { name: "Tuition", value: 11 }, { name: "Student Fees", value: 4 }, { name: "Grants and Contracts", value: 13 }, { name: "Pell Grants", value: 1 }, { name: "Non-educational Services", value: 11 }, { name: "Gifts, Endowments, Interest, Etc.", value: 7 } ]

	let expenditureData = [ { name: "Medical Center", value: 43 }, { name: "Teaching and Teaching Support", value: 23 }, { name: "Research", value: 11 }, { name: "Student Services and Financial Aid", value: 8 }, { name: "Operations and Maintenance (Buildings, etc)", value: 2 }, { name: "Administration", value: 3 }, { name: "Non-Educational Services", value: 2 }, { name: "Public Service", value: 2 }, { name: "Depreciation, Interest, etc.", value: 6 } ]


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
			color: '71A8FF'
		},
		{
			name: 'Sales and Service, Auxillary',
			value: 0,
			color: '#0f7ab4'
		},
		{
			name: "Gifts, Endowments and Interest",
			value: 0,
			color: '#0f7ab4'
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
			value: 0
		},
		{
			name: 'Research',
			value: 0
		},
		{
			name: 'Student Services and Financial Aid',
			value: 0
		},
		{
			name: 'Depreciation/Interest Expenses',
			value: 0
		},
		{
			name: 'Institutional Support',
			value: 0
		},
		{
			name: 'Other',
			value: 0
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
				<h1 className='mainTitle'> Slice the Pie! </h1>
				<Intro/>
				<ProgressBar/>
				<PieChart data={revenue}/>
				<InputForm data={revenue} onChange={handleRevUpdate}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}
	

	else if (page === 1) {
		return (
			<div>
				<h1 className='mainTitle'> Hello World!!! </h1>
				<Intro/>
				<ProgressBar/>
				<PieChart data={expenses}/>
				<InputForm data={expenses} onChange={handleExpUpdate}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}

	else if (page===2) {
		return (
			<div>
				<PieChart data={revenueData}/>
				<PieChart data={revenue}/>
				<Button pageNum={page} onPress={handlePageUpdate}/>
			</div>
		)
	}

	else if (page === 3) {
		return (
			<div>
				<PieChart data={expenditureData}/>
				<PieChart data={expenses}/>
			</div>
		)
	}
}

export default App;