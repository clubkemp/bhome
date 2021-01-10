import React, {useState} from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { red, green, blue, yellow, purple, teal  } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';


import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HealingIcon from '@material-ui/icons/Healing';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// takes in handleFilters and filter
export default function FilterBtns(props) {
  // fire on change of the toggle buttons, sends filters back up to app.js
  const handleFormat = (event, newFormats) => {
    props.handleFilters(newFormats)
  };

  return (
    <ToggleButtonGroup value={props.filter} onChange={handleFormat} aria-label="text formatting">
      <ToggleButton value="Housing" aria-label="Housing">
        <Tooltip  title="Housing" placement="top-start">
          <HomeWorkIcon style={{color:red[500]}}/>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="Substance use" aria-label="Substance use">
        <Tooltip  title="Substance use" placement="top-start">
          <HealingIcon style={{color:green[500]}}/>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="Food" aria-label="Food">
        <Tooltip  title="Food" placement="top-start">
          <RestaurantIcon style={{color:purple[500]}}/>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="Mental Health" aria-label="Mental Health">
        <Tooltip  title="Mental Health" placement="top-start">  
          <EmojiEmotionsIcon style={{color:teal[500]}}/>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="Multi" aria-label="Multi">
        <Tooltip  title="Multi" placement="top-start">  
          <DoneAllIcon style={{color:yellow[800]}}/>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="Other" aria-label="Other">
        <Tooltip  title="Other" placement="top-start">
          <MoreVertIcon style={{color:blue[500]}}/>
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
