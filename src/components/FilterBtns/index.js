import React from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import HealingIcon from '@material-ui/icons/Healing';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function FilterBtns(props) {
  const [formats, setFormats] = React.useState(() => ['Housing', 'Substance use','Food', 'Mental Health', 'Multi', 'Other']);

  const handleFormat = (event, newFormats) => {
    props.handleFilters(newFormats)
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
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
