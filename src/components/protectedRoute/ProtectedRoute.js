import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isAthendicated, children}) => {
  return (
    isAthendicated ? children : <Navigate to='/login'/>
  )
}

export default ProtectedRoute