import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'disableRipple'>

export interface ButtonProps extends ButtonBaseProps {
  label: string
}

const Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>

export default Button
