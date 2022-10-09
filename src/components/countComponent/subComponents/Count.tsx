import React from 'react'

import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../../hooks'
import { selectCount, selectNumberOfAs } from '../../../reducers/countSelectors'

import getFactorail from '../../adons/getFactorial'
export default function Count (): JSX.Element {
  const count = useAppSelector(selectCount)
  const numOfAs = useAppSelector(selectNumberOfAs)
  return (
    <Box style={{ margin: '1rem' }} sx={{ minWidth: 275 }}>
    <Card variant="outlined">
    <Typography>Buttons Component</Typography>
    <CardContent>
        <div>Count:{count}</div>
        <div>Number of A-s: {numOfAs}</div>
        <div>Factorial of 50: {getFactorail(count)}</div>
        </CardContent>
        </Card>
      </Box>
  )
}
