import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material'

// Only include size, clickable, and color
type ChipBaseProps = Pick<MUIChipProps, 'size' | 'clickable' | 'color'>

export interface ChipProps extends ChipBaseProps {
  label: string
}

const TestChip = ({ ...rest }: ChipProps) => <MUIChip {...rest} />

export default TestChip
