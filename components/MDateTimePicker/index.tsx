import React, { forwardRef } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { MDateTimePickerProps } from "./type"
import { TextField } from "@mui/material"

const MDateTimePicker = forwardRef((props:MDateTimePickerProps, ref: React.Ref<HTMLDivElement> )=>{
	const { onChange, renderInput: _renderInput, ...restField } = props
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker
				ref={ref}
				onChange={(event) => {
					onChange(event)
				}}
				renderInput={
					_renderInput !== undefined
						? _renderInput
						: (params) => <TextField {...params} />
				}
				{...restField}
			/>
		</LocalizationProvider>
	)
})
MDateTimePicker.displayName="MDateTimePicker"

export default MDateTimePicker
