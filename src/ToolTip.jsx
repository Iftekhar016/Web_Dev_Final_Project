import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import './App.css';

function ToolTip() {
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
  return (
    <div className="App">
      <Tooltip arrow
        placement="top-start"
        open={tooltipIsOpen}
        onOpen={() => setTooltipIsOpen(true)}
        onClose={() => setTooltipIsOpen(false)}
        title="A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare."><Button><AiOutlineInfoCircle/></Button>
        
      
      </Tooltip>
        <Button
          onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
        ></Button>
    </div>
  );
}
export default ToolTip;