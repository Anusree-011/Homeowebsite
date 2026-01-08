import React from 'react'
import Login from './components/Login'
import PatientDetails from './components/PatientDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientDetails" element={<PatientDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App