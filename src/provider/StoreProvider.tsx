'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import makeStore, { type TStore } from '../store/store'

interface IProps {
  children: React.ReactNode
}

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const storeRef = useRef<TStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
