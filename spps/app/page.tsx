"use client"

import { useState } from "react"
import { LoginPage } from "@/components/login-page"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <DashboardLayout onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <LoginPage onLogin={() => setIsLoggedIn(true)} />
  )
}
