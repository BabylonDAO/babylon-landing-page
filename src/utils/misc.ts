import { useCallback, useState } from 'react'

export function abbreviateNumber(num: number, fixed: number): String {
  if (!num) {
    return '0'
  }

  fixed = !fixed || fixed < 0 ? 0 : fixed
  const b = num.toPrecision(2).split('e')
  const k = b.length === 1 ? 0 : Math.floor(Math.min(Number(b[1].slice(1)), 14) / 3)
  const c = Number(k < 1 ? num.toFixed(fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed))
  const d = c < 0 ? c : Math.abs(c)
  return d + ['', 'K', 'M', 'B', 'T'][k]
}

export function capitalizeFirstLetter(s: string): string {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

export function ellipseNumber(x: number | string | undefined, length: number = 15): string {
  x = String(x)
  return x.length > length ? x.slice(0, length).concat('...') : x
}

export function monetaryFormatValue(n: number): string {
  return isNaN(n) ? '0' : Intl.NumberFormat('en-US').format(n)
}

export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

export function useLocalStorageState(key: string, defaultState?: string) {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key)
    return storedState ? JSON.parse(storedState) : defaultState
  })

  const setLocalStorageState = useCallback(
    (newState) => {
      if (state !== newState) {
        setState(newState)
        if (newState === null) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(newState))
        }
      }
    },
    [state, key]
  )

  return [state, setLocalStorageState]
}
