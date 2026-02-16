import React from 'react'
import './App.css'
import MainLayout from './Layout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MapView from './pages/MapView'
import ReportIssues from './pages/ReportIssues'
import History from './pages/History'

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
      <Route
        path="/map-view"
        element={
          <MainLayout
          children={<MapView />}
          />
        }
      />
      <Route
        path="/report-issue"
        element={
          <MainLayout
          children={<ReportIssues />}
          />
        }
      />
      <Route
        path="/history"
        element={
          <MainLayout
          children={<History />}
          />
        }
      />

    </Routes>
  )
}

export default App
