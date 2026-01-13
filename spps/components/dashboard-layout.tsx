"use client"

import { useState } from "react"
import { DashboardHome } from "./dashboard-home"
import { StudentUploadPage } from "./student-upload-page"
import { PredictionResultsPage } from "./prediction-results-page"
import { ReportsPage } from "./reports-page"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  onLogout: () => void
}

type Page = "home" | "upload" | "predictions" | "reports"

export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const navItems = [
    { id: "home", label: "Dashboard", icon: "📊" },
    { id: "upload", label: "Upload Data", icon: "📤" },
    { id: "predictions", label: "Predictions", icon: "🎯" },
    { id: "reports", label: "Reports", icon: "📈" },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <h2 className="text-2xl font-bold text-sidebar-foreground">SPPS</h2>
          <p className="text-xs text-sidebar-foreground/70">Performance System</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as Page)}
              className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/20"
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4 space-y-2">
          <Button
            onClick={onLogout}
            className="w-full bg-destructive text-destructive-foreground hover:opacity-90 text-sm"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            {navItems.find((item) => item.id === currentPage)?.label}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Admin User</span>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {currentPage === "home" && <DashboardHome />}
          {currentPage === "upload" && <StudentUploadPage />}
          {currentPage === "predictions" && <PredictionResultsPage />}
          {currentPage === "reports" && <ReportsPage />}
        </div>

        {/* Footer */}
        <div className="bg-card border-t border-border px-8 py-4 text-center text-sm text-muted-foreground">
          © 2025 Student Performance Prediction System
        </div>
      </div>
    </div>
  )
}
