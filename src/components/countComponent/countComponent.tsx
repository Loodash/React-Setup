import React from 'react'
import Count from './subComponents/Count'
import Buttons from './subComponents/Buttons'
import Data from './subComponents/Data'
export default function CountComponent (): JSX.Element {
  return (
        <div>
            <Count />
            <Buttons />
            <Data />
        </div>
  )
}
