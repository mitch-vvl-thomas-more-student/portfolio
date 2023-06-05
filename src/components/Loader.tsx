import React from 'react'
import { HashLoader } from 'react-spinners'

export interface LoaderProps {
  color: string
  size: number
}

export const Loader = (props: LoaderProps) => {
  return (
    <>
      <HashLoader color={props.color} size={props.size} />
    </>
  )
}
