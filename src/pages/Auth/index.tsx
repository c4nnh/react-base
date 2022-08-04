import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../../store'
import { Login } from './Login'

export const Auth: React.FC = () => {
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to="/" replace />
  }

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<Navigate to="login" />} />
    </Routes>
  )
}
