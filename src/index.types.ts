import type { BoxProps as MuiBoxProps } from '@mui/material/Box'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

type TextFieldProps = Omit<
  MuiTextFieldProps,
  'onChange' | 'select' | 'multiline' | 'defaultValue' | 'value'
>

type BoxProps = Omit<MuiBoxProps, 'onChange'>

export interface BaseMuiOtpInputProps {
  value?: string
  length?: number
  TextFieldsProps?: TextFieldProps
  numbersOnly?: boolean
  onComplete?: (value: string) => void
  validateChar?: (character: string, index: number) => boolean
  onChange?: (value: string) => void
}

export type MuiOtpInputProps = BoxProps & BaseMuiOtpInputProps
