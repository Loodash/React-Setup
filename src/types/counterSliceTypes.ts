export interface Joke {
  setup: string
  punchline: string
}

export interface CounterSliceInitial {
  count: number
  fetchState: FetchState
  jokes: Joke[]
}
export enum FetchState {
  LOADING = 0,
  SUCCESS = 1,
  ERROR = 2,
  INITIAL = 3
}
