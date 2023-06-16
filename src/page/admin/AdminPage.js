import React from 'react'
import AdminLogin from './login/AdminLogin'
import AdminDashboard from './dashboard/AdminDashboard';

function AdminPage() {
  const loggedIn = false;

  return (
    loggedIn ? <AdminLogin/> : <AdminDashboard/>
  )
}

export default AdminPage