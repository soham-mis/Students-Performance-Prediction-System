"use client"

import { Card } from "@/components/ui/card"

export function DashboardHome() {
  const summaryCards = [
    { label: "Total Students", value: 1245, color: "bg-primary" },
    { label: "High-Risk Students", value: 87, color: "bg-destructive" },
    { label: "Medium-Risk Students", value: 234, color: "bg-accent" },
    { label: "Low-Risk Students", value: 924, color: "bg-chart-3" },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <Card key={index} className="bg-card">
            <div className="p-6">
              <div className={`w-12 h-12 rounded-lg ${card.color} text-white flex items-center justify-center mb-4`}>
                📊
              </div>
              <p className="text-muted-foreground text-sm mb-2">{card.label}</p>
              <p className="text-4xl font-bold text-foreground">{card.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Predictions Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Recent Predictions</h2>
        <Card className="bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Student Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Roll No</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Risk Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Aarav Sharma", roll: "CS001", risk: "Low", score: 85 },
                  { name: "Priya Verma", roll: "CS002", risk: "Medium", score: 72 },
                  { name: "Rohan Gupta", roll: "CS003", risk: "High", score: 45 },
                  { name: "Ananya Singh", roll: "CS004", risk: "Low", score: 92 },
                  { name: "Vikram Kumar", roll: "CS005", risk: "Medium", score: 68 },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{row.roll}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          row.risk === "High"
                            ? "bg-destructive/20 text-destructive-foreground"
                            : row.risk === "Medium"
                              ? "bg-accent/20 text-accent-foreground"
                              : "bg-chart-3/20 text-foreground"
                        }`}
                      >
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground font-semibold">{row.score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Simple Chart Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Performance Distribution</h3>
            <div className="space-y-3">
              {[
                { label: "High Performers", value: 75, percentage: 60 },
                { label: "Average Performers", value: 40, percentage: 32 },
                { label: "At Risk", value: 10, percentage: 8 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-foreground">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-card">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Department Summary</h3>
            <div className="space-y-3">
              {[
                { dept: "Computer Science", count: 342, status: "Good" },
                { dept: "Engineering", count: 298, status: "Good" },
                { dept: "Commerce", count: 256, status: "Needs Attention" },
                { dept: "Arts", count: 349, status: "Good" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.dept}</p>
                    <p className="text-xs text-muted-foreground">{item.count} students</p>
                  </div>
                  <span className="text-xs font-semibold text-primary">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
