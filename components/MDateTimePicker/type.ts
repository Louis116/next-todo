import { DateTimePickerProps } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { DateTime } from "../../assets/types/frontend.type"

type TypedDateTimePickerProps = DateTimePickerProps<dayjs.Dayjs,dayjs.Dayjs>
// type TypedDateTimePickerProps = DateTimePickerProps<DateTime,dayjs.Dayjs>
export interface MDateTimePickerProps extends Omit< TypedDateTimePickerProps,"renderInput">{
    renderInput?:TypedDateTimePickerProps["renderInput"]
}