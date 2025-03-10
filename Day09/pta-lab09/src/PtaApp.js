import React from 'react'
import PtaUseState from './components/PtaUseState'
import PtaEffect1 from './components/PtaEffect1'
import PtaUseStateListObject from './components/PtaUseStateListObject'

export default function PtaApp() {
  return (
    <div className='container border my=t-3'>
      <h1> React Hook</h1>
      <hr/>
      <PtaUseState/>
      <PtaEffect1/>
      <PtaUseStateListObject/>
    </div>
  )
}