import _memoized from 'lodash/memoize'
const factFunc = (n: number): number => {
  console.log('CALCULATING')
  let res = 1
  for (let i = 1; i <= n; i++) {
    res = res * i
  }
  return res
}

export default _memoized(factFunc)
