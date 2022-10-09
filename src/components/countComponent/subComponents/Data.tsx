import React from 'react'

import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../../hooks'

import Backdrop from '@mui/material/Backdrop'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CircularProgress from '@mui/material/CircularProgress'
import { selectJokes, selectFetchState } from '../../../reducers/countSelectors'
import { FetchState, Joke } from '../../../types/counterSliceTypes'
import nextId from 'react-id-generator'

export default function Data (): JSX.Element {
  const jokes = useAppSelector(selectJokes)
  const state = useAppSelector(selectFetchState)

  return (
    <Box style={{ margin: '1rem' }} sx={{ minWidth: 275 }}>
    <Card variant="outlined">
    <Typography>Data Component</Typography>
    <CardContent>

    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state === FetchState.LOADING}
      >
        <CircularProgress color="inherit" />
    </Backdrop>

    <Snackbar open={state === FetchState.ERROR} >
        <Alert severity="error" sx={{ width: '100%' }}>
          Something went wrong!
        </Alert>
      </Snackbar>

      {(state === FetchState.SUCCESS) &&
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {jokes.map((el: Joke): JSX.Element => {
            return (
              <ListItem key={nextId('list-item-')}>
                <ListItemText primary={el.setup} secondary={el.punchline} />
              </ListItem>
            )
          })}
        </List>
      }

        </CardContent>
        </Card>
      </Box>
  )
}
