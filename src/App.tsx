import React from 'react'
import './App.css'
import ComponentForRouterExample from './components/componentForRouterExample/ComponentForRouterExample'
import CountComponent from './components/countComponent/countComponent'
import { Link, Routes, Route } from 'react-router-dom'
function App (): JSX.Element {
  return (
    <div className="App">
      <div>
      <Link style={{ margin: '1rem' }} to="/">Counter</Link>
      <Link style={{ margin: '1rem' }} to="/example">Example</Link>
      </div>
      <Routes>
        <Route path="/" element={<CountComponent/>}></Route>
        <Route path="/example" element={<ComponentForRouterExample/>}></Route>
      </Routes>
    </div>
  )
}

export default App
