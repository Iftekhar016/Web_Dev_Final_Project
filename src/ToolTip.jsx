import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import './App.css';
import {useEffect, useRef} from 'react'

function ToolTip() {
  const node = useRef();
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setTooltipIsOpen(!tooltipIsOpen)
  };
  return (
    <div ref={node} className="App">
     <Tooltip arrow
        placement='top-mid'
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