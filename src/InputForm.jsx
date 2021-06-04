import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Tooltip from "@material-ui/core/Tooltip";

function InputForm(props) {
	//console.log("INSIDE INPUT FORM WITH " + props.data[3].name)
	function findSum(name='') {

		let sum = 0;
		props.data.forEach((element) => {
			if(element.name != name) {
				sum +=  element.value
			}
		})

		return sum;
	}

	function updateValue(e) {

		const name = e.target.name;
		let value = e.target.value;

		if (value === '') {
			value = 0
		}
		
		if (typeof value === 'string') {
			value = parseInt(value)
		}

		let sum = findSum(name);
		
		if (value + sum > 100) {
			value = 100 - sum
			document.getElementById(name).value = value
		}

		props.onChange(name, value);
	}

	if (props.data.length === 8) {
		return (
			<div>
				<div className='main-container'> 
					<h4 className='left'> Function </h4>
					<h4 className='right'> Percentage(%) </h4>
				</div> 

				<div className='container'>
					<li className = "bp1"></li>
					<h4 className='left'> {props.data[0].name} 
					{/* <Tooltip
						id='tooltip1'
						name='tooltip1'
						placement='top'
						open={tooltipIsOpen}
						onOpen={() => setTooltipIsOpen(true)}
						onClose={() => setTooltipIsOpen(false)}
						title="I'm a controlled tooltip"
					>
					<span></span>
					</Tooltip> */}
					<AiOutlineInfoCircle/> 
					</h4>
					<div className='input'>
					<input  name={props.data[0].name} id={props.data[0].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[0].value}/>
					</div>
				</div>

				<div className='container'> 
					<li className = "bp2"></li>
					<h4 className='left'> {props.data[1].name} 
					{/* <Tooltip
						placement='top'
						open={tooltipIsOpen}
						onOpen={() => setTooltipIsOpen(true)}
						onClose={() => setTooltipIsOpen(false)}
						title="I'm a controlled tooltip"
					>
					<span></span>
					</Tooltip> */}
					<AiOutlineInfoCircle/>  </h4>
					<div className='input'>
					<input  name={props.data[1].name} id={props.data[1].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[1].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp3"></li> 
					<h4 className='left'> {props.data[2].name} <AiOutlineInfoCircle/></h4>
					<div className='input'>
					<input  name={props.data[2].name} id={props.data[2].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[2].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp4"></li> 
					<h4 className='left'> {props.data[3].name} <AiOutlineInfoCircle/> </h4>
					<div className='input'>
					<input  name={props.data[3].name} id={props.data[3].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[3].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp5"></li>
					<h4 className='left'> {props.data[4].name} <AiOutlineInfoCircle/> </h4>
					<div className='input'>
					<input  name={props.data[4].name} id={props.data[4].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[4].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp6"></li> 
					<h4 className='left'> {props.data[5].name} <AiOutlineInfoCircle/> </h4>
					<div className='input'>
					<input  name={props.data[5].name} id={props.data[5].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[5].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp7"></li> 
					<h4 className='left'> {props.data[6].name} <AiOutlineInfoCircle/> </h4>
					<div className='input'>
					<input  name={props.data[6].name} id={props.data[6].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[6].value}/>
					</div>
				</div>

				<div className='container'>
					<li className = "bp8"></li> 
					<h4 className='left'> {props.data[7].name} <AiOutlineInfoCircle/></h4>
					<div className='input'>
					<input  name={props.data[7].name} id={props.data[7].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[7].value}/>
					</div>
				</div>

				<div className='container'> 
					<h4 className='left'>  </h4>
					<div className='input'>
					<input disabled placeholder='0%' className='large' value={findSum('')}/>
					</div>
				</div>
			</div>
		);
	}
	
	else {
		return (
		<div>
			<div className='main-container'> 
				<h4 className='left'> Function </h4>
				<h4 className='right'> Percentage(%) </h4>
			</div> 

			<div className='container'>
				<li className = "bp1"></li>
				<h4 className='left'> {props.data[0].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[0].name} id={props.data[0].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[0].value}/>
				</div>
			</div>

			<div className='container'> 
				<li className = "bp2"></li>
				<h4 className='left'> {props.data[1].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[1].name} id={props.data[1].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[1].value}/>
				</div>
			</div>

			<div className='container'>
				<li className = "bp3"></li> 
				<h4 className='left'> {props.data[2].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[2].name} id={props.data[2].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[2].value}/>
				</div>
			</div>

			<div className='container'>
				<li className = "bp4"></li> 
				<h4 className='left'> {props.data[3].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[3].name} id={props.data[3].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[3].value}/>
				</div>
			</div>

			<div className='container'>
				<li className = "bp5"></li>
				<h4 className='left'> {props.data[4].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[4].name} id={props.data[4].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[4].value}/>
				</div>
			</div>

			<div className='container'>
				<li className = "bp6"></li> 
				<h4 className='left'> {props.data[5].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[5].name} id={props.data[5].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[5].value}/>
				</div>
			</div>

			<div className='container'>
				<li className = "bp7"></li> 
				<h4 className='left'> {props.data[6].name} <AiOutlineInfoCircle/></h4>
				<div className='input'>
				<input  name={props.data[6].name} id={props.data[6].name} onChange={updateValue} placeholder='0%' className='large' value={props.data[6].value}/>
				</div>
			</div>

			<div className='container'> 
				<h4 className='left'>  </h4>
				<div className='input'>
				<input disabled placeholder='0%' className='large' value={findSum('')}/>
				</div>
			</div>
		</div>
	);
	}
}

export default InputForm;