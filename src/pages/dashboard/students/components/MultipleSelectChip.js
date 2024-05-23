import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, FormControl, InputLabel, MenuItem, Select, Chip, OutlinedInput } from '@mui/material';

const names = ['Software development', 'Machine Learning', 'Mathematics'];

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(Array.isArray(value) ? value : [value]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={{
                fontWeight: personName.indexOf(name) !== -1 ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
