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
        placement='top-start'
        open={tooltipIsOpen}
        onOpen={() => setTooltipIsOpen(true)}
        onClose={() => setTooltipIsOpen(false)}
        title="I'm a controlled tooltip"
      >
      <span></span>
      </Tooltip>
      <AiOutlineInfoCircle onClick={() => setTooltipIsOpen(!tooltipIsOpen)}/>
    </div>
  );
}
export default ToolTip;