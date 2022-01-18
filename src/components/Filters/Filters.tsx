import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './style.scss'

interface Props {
    yearOptions: string[];
    yearFilter: string;
    onYearFilterUpdate(value: string): void;
    onMassFilterUpdate(value: number): void;
}

const VALID_YEAR_LENGTH = 4

const MeteorsListContainer: React.FC<Props> = ({ yearOptions, yearFilter, onYearFilterUpdate, onMassFilterUpdate }) => {
  const [yearInputValue, setYearInputValue] = useState(yearFilter);
  const [massInputValue, setMassInputValue] = useState('');
  const [massInputDisabled, setMassInputDisabled] = useState(true);

  const isValidYearInput = (input: string) => {
    return input?.length >= VALID_YEAR_LENGTH && parseInt(input) > 0;
  }

  const disableMassInput = () => {
    setMassInputDisabled(true)
  }

  const enableMassInput = () => {
    setMassInputDisabled(false)
  }

  useEffect(() => {
    if(isValidYearInput(yearFilter)) setYearInputValue(yearFilter)
  }, [yearFilter])

  const handleYearFilterChange = (newInputValue: string) => {
    setYearInputValue(newInputValue)
    
    if(isValidYearInput(newInputValue)) {
      onYearFilterUpdate(newInputValue)
      enableMassInput()
    } else {
      onYearFilterUpdate('')
      disableMassInput()
    }
  }

  const handleMassFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMassInputValue(event.target.value)
    onMassFilterUpdate(parseInt(event.target.value) || 0)
  }

  return (
    <div className='filters'>
      <div className='input-container'>
        <Autocomplete
          inputValue={yearInputValue}
          value={yearInputValue}
          onInputChange={(event, newInputValue) => {
            handleYearFilterChange(newInputValue);
          }}
          options={yearOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Type a year..." />}
        />
      </div>

      <div className='input-container'>
        <TextField
          label="Minimum Mass"
          variant="outlined"
          type="number"
          value={massInputValue || ''}
          disabled={massInputDisabled}
          onChange={handleMassFilterChange}
        />
      </div>
    </div>
  )
}

export default MeteorsListContainer;
