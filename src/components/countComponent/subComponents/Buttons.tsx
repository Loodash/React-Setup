import React from 'react'
import { Button } from '@mui/material'

import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { increaseCount, decreaseCount, getJokes } from '../../../reducers/counterSlice'
import { useAppDispatch } from '../../../hooks'

export default function Buttons (): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Box style={{ margin: '1rem' }} sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        <Typography>Buttons Component</Typography>
        <CardContent>
            <Button onClick={() => { dispatch(decreaseCount()) }} variant="contained">-</Button>
            <Button onClick={() => { dispatch(increaseCount()) }} variant="outlined">+</Button>
            <Button onClick={() => {
              dispatch(getJokes())
                .unwrap()
                .then()
                .catch((err) => { console.log(err) })
            }} variant="contained">Fetch</Button>
        </CardContent>
        </Card>
      </Box>
  )
}
