import { DayPicker, SelectSingleEventHandler } from 'react-day-picker'

import 'react-day-picker/dist/style.css'

interface IDayPickerProps {
  selected: Date
  onSelect: SelectSingleEventHandler
}

export const DatePicker = ({ selected, onSelect }: IDayPickerProps) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      captionLayout="dropdown"
      fromYear={1900}
      toYear={2025}
    />
  )
}
