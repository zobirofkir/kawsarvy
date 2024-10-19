import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomeScreen/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App