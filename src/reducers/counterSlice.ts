import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CounterSliceInitial, FetchState } from '../types/counterSliceTypes'
import axios from 'axios'

const initialState: CounterSliceInitial = {
  count: 0,
  fetchState: FetchState.INITIAL,
  jokes: []
}

export const getJokes = createAsyncThunk('count/getJokes', async () => {
  const result = await axios.get('https://official-joke-api.appspot.com/random_ten')
  return { result }
})

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count++
    },
    decreaseCount: (state) => {
      state.count--
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getJokes.pending, (state) => {
        state.fetchState = FetchState.LOADING
      })
      .addCase(getJokes.fulfilled, (state, { payload }) => {
        state.fetchState = FetchState.SUCCESS
        state.jokes = payload.result.data.map((el: any) => { return { setup: el.setup, punchline: el.punchline } })
      })
      .addCase(getJokes.rejected, (state) => {
        state.fetchState = FetchState.ERROR
      })
  }
})

export const { increaseCount, decreaseCount } = counterSlice.actions
export default counterSlice.reducer
