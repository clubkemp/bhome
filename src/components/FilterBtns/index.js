import React from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function FilterBtns(props) {
  const [formats, setFormats] = React.useState(() => ['Housing', 'Substance use','Food', 'Mental Health', 'Multi', 'Other']);

  const handleFormat = (event, newFormats) => {
    props.handleFilters(newFormats)
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
      <ToggleButton value="Housing" aria-label="Housing">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="Substance use" aria-label="Substance use">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="Food" aria-label="Food">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="Mental Health" aria-label="Mental Health">
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
