import React from 'react'
import Home from './pages/Home/Home.jsx'
import { NavigationProvider } from './context/NavigationContext.jsx'

import './App.css'

function App() {
  

  return (
    <NavigationProvider>
      <Home />
    </NavigationProvider>
  )
}

export default App
