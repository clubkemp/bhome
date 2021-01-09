import React, {useState} from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
        <HomeWorkIcon />
      </ToggleButton>
      <ToggleButton value="Substance use" aria-label="Substance use">
        <HealingIcon />
      </ToggleButton>
      <ToggleButton value="Food" aria-label="Food">
        <RestaurantIcon />
      </ToggleButton>
      <ToggleButton value="Mental Health" aria-label="Mental Health">
        <EmojiEmotionsIcon />
      </ToggleButton>
      <ToggleButton value="Multi" aria-label="Multi">
        <DoneAllIcon />
      </ToggleButton>
      <ToggleButton value="Other" aria-label="Other">
        <MoreVertIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
