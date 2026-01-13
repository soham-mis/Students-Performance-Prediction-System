"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function ReportsPage() {
  const [selectedBatch, setSelectedBatch] = useState("2023")
  const [selectedDept, setSelectedDept] = useState("CS")
  const [selectedRisk, setSelectedRisk] = useState("All")

  const batches = ["2023", "2024", "2025"]
  const departments = ["CS", "Engineering", "Commerce", "Arts"]
  const riskLevels = ["All", "High", "Medium", "Low"]

  const performanceData = [
    { dept: "CS", avgScore: 82.3, students: 342 },
    { dept: "Engineering", avgScore: 79.1, students: 298 },
    { dept: "Commerce", avgScore: 75.8, students: 256 },
    { dept: "Arts", avgScore: 81.2, students: 349 },
  ]

  const riskDistribution = [
    { name: "Low Risk", value: 924, color: "var(--color-chart-3)" },
    { name: "Medium Risk", value: 234, color: "var(--color-accent)" },
    { name: "High Risk", value: 87, color: "var(--color-destructive)" },
  ]

  const monthlyTrend = [
    { month: "Jan", performance: 75, risk: 95 },
    { month: "Feb", performance: 77, risk: 92 },
    { month: "Mar", performance: 79, risk: 88 },
    { month: "Apr", performance: 78, risk: 90 },
    { month: "May", performance: 81, risk: 84 },
    { month: "Jun", performance: 82, risk: 82 },
  ]

  const COLORS = ["var(--color-chart-3)", "var(--color-accent)", "var(--color-destructive)"]

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Reports</h2>
        <p className="text-muted-foreground">
          View and filter performance reports by batch, department, and risk level
        </p>
      </div>

      {/* Filters */}
      <Card className="bg-card">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Batch</label>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Department</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Risk Level</label>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {riskLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button className="mt-6 bg-primary text-primary-foreground hover:opacity-90">Apply Filters</Button>
        </div>
      </Card>

      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card">
          <div className="p-6">
            <p className="text-muted-foreground text-sm mb-2">Total Students</p>
            <p className="text-4xl font-bold text-foreground">342</p>
            <p className="text-xs text-muted-foreground mt-3">
              Batch: {selectedBatch} | Dept: {selectedDept}
            </p>
          </div>
        </Card>

        <Card className="bg-card">
          <div className="p-6">
            <p className="text-muted-foreground text-sm mb-2">Average Performance</p>
            <p className="text-4xl font-bold text-primary">78.5%</p>
            <p className="text-xs text-muted-foreground mt-3">Department Average</p>
          </div>
        </Card>

        <Card className="bg-card">
          <div className="p-6">
            <p className="text-muted-foreground text-sm mb-2">At Risk Students</p>
            <p className="text-4xl font-bold text-destructive">34</p>
            <p className="text-xs text-muted-foreground mt-3">Require Intervention</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Department Performance</h3>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="dept" tick={{ fill: "var(--color-foreground)", fontSize: 12 }} />
                <YAxis tick={{ fill: "var(--color-foreground)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: `1px solid var(--color-border)` }}
                />
                <Bar dataKey="avgScore" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="bg-card">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Risk Distribution</h3>
          </div>
          <div className="p-6 flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="var(--color-primary)"
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="bg-card">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Performance Trend</h3>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fill: "var(--color-foreground)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--color-foreground)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "var(--color-card)", border: `1px solid var(--color-border)` }}
              />
              <Legend />
              <Line type="monotone" dataKey="performance" stroke="var(--color-primary)" strokeWidth={2} />
              <Line type="monotone" dataKey="risk" stroke="var(--color-destructive)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Detailed Table */}
      <Card className="bg-card">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Department Performance Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total Students</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Avg Score</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">High Risk</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { dept: "Computer Science", total: 342, avg: 82.3, risk: 12, status: "Good" },
                { dept: "Engineering", total: 298, avg: 79.1, risk: 18, status: "Needs Attention" },
                { dept: "Commerce", total: 256, avg: 75.8, risk: 22, status: "Needs Attention" },
                { dept: "Arts", total: 349, avg: 81.2, risk: 15, status: "Good" },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{row.dept}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{row.total}</td>
                  <td className="px-6 py-4 text-sm text-foreground font-semibold">{row.avg}%</td>
                  <td className="px-6 py-4 text-sm text-destructive font-medium">{row.risk}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === "Good" ? "bg-chart-3/20 text-foreground" : "bg-accent/20 text-accent-foreground"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
