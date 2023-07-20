import { Button, ButtonProps } from '@mui/material'

// Only include variant, size, and color
type ButtonBaseProps = Pick<ButtonProps, 'variant' | 'size' | 'color' | 'disableRipple'>

export interface TestButtonProps extends ButtonBaseProps {
  label: string
}

const TestButton = ({ label, ...rest }: TestButtonProps) => <Button {...rest}>{label}</Button>

export default TestButton
