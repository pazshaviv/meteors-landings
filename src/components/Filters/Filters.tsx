import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import './style.scss'

interface Props {
  yearOptions: string[]
  yearFilter: string
  onYearFilterUpdate(value: string): void
  onMassFilterUpdate(value: number): void
}

const VALID_YEAR_LENGTH = 4

const MeteorsApp: React.FC<Props> = ({ yearOptions, yearFilter, onYearFilterUpdate, onMassFilterUpdate }) => {
  const [yearSelectedValue, setYearSelectedValue] = useState<string>(yearFilter)
  const [yearInputValue, setYearInputValue] = useState<string>(yearFilter)
  const [massInputValue, setMassInputValue] = useState('')
  const [massInputDisabled, setMassInputDisabled] = useState(true)

  const isValidYearInput = (input: string) => {
    return input?.length >= VALID_YEAR_LENGTH && parseInt(input) > 0
  }

  const disableMassInput = () => {
    setMassInputDisabled(true)
  }

  const enableMassInput = () => {
    setMassInputDisabled(false)
  }

  useEffect(() => {
    setYearInputValue(yearFilter)
    setYearSelectedValue(yearFilter)
  }, [yearFilter])

  const handleYearFilterChange = (newSelectedValue: string | null) => {
    if (!newSelectedValue) return

    setYearSelectedValue(newSelectedValue)

    if (isValidYearInput(newSelectedValue)) {
      onYearFilterUpdate(newSelectedValue)
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
    <div className="filters">
      <div className="input-container">
        <Autocomplete
          autoSelect={true}
          disableClearable={true}
          value={yearSelectedValue}
          onChange={(event: any, newSelectedValue: string | null) => {
            handleYearFilterChange(newSelectedValue)
          }}
          inputValue={yearInputValue}
          onInputChange={(event: any, newInputValue: string) => {
            setYearInputValue(newInputValue)
          }}
          options={yearOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Type a year..." />}
        />
      </div>

      <div className="input-container">
        <TextField
          label="Minimum Mass"
          variant="outlined"
          type="number"
          value={massInputValue}
          disabled={massInputDisabled}
          onChange={handleMassFilterChange}
        />
      </div>
    </div>
  )
}

export default MeteorsApp
