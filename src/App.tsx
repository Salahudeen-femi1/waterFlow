import React from 'react'
import './App.css'
import MainLayout from './Layout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
          children={<Home />}
          />
        }
      />

    </Routes>
  )
}

export default App
