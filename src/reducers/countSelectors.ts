import { RootState } from '../store'
import { FetchState, Joke } from '../types/counterSliceTypes'
import { createSelector } from '@reduxjs/toolkit'
import _filter from 'lodash/filter'
import _concat from 'lodash/concat'
import _join from 'lodash/join'

export const selectCount = (state: RootState): number => state.counterSlice.count
export const selectJokes = (state: RootState): Joke[] => state.counterSlice.jokes
export const selectFetchState = (state: RootState): FetchState => state.counterSlice.fetchState

export const selectNumberOfAs = createSelector(
  selectJokes,
  (jokes: Joke[]) => {
    console.log('I Am running!')
    const punchlines: string[] = jokes.map((el: Joke) => el.punchline)
    const setup: string[] = jokes.map((el: Joke) => el.setup)
    return _filter(_join(_concat(punchlines, setup)), (el: string) => el === 'a').length
  }
)
