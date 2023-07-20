import { Chip, ChipProps } from '@mui/material'

// Only include size, clickable, and color
type ChipBaseProps = Pick<ChipProps, 'size' | 'clickable' | 'color'>

export interface TestChipProps extends ChipBaseProps {
  label: string
}

const TestChip = ({ ...rest }: TestChipProps) => <Chip {...rest} />
export default TestChip
