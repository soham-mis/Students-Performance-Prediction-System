"use client"

import { Card } from "@/components/ui/card"

export function PredictionResultsPage() {
  const predictions = [
    { name: "Aarav Sharma", roll: "CS001", risk: "Low", remarks: "Performing well, no intervention needed" },
    { name: "Priya Verma", roll: "CS002", risk: "Medium", remarks: "Monitor closely, suggest tutoring" },
    { name: "Rohan Gupta", roll: "CS003", risk: "High", remarks: "Immediate intervention required" },
    { name: "Ananya Singh", roll: "CS004", risk: "Low", remarks: "Excellent performer, excellent performance" },
    { name: "Vikram Kumar", roll: "CS005", risk: "Medium", remarks: "Needs study support" },
    { name: "Zara Khan", roll: "CS006", risk: "Low", remarks: "Consistent performance" },
    { name: "Nikhil Patel", roll: "CS007", risk: "High", remarks: "Needs immediate attention" },
    { name: "Pooja Desai", roll: "CS008", risk: "Medium", remarks: "Borderline, needs guidance" },
  ]

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Prediction Results</h2>
        <p className="text-muted-foreground">Student performance predictions and risk assessments</p>
      </div>

      <Card className="bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Roll No</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Risk Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {predictions.map((pred, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{pred.name}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{pred.roll}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        pred.risk === "High"
                          ? "bg-destructive/20 text-destructive-foreground"
                          : pred.risk === "Medium"
                            ? "bg-accent/20 text-accent-foreground"
                            : "bg-chart-3/20 text-foreground"
                      }`}
                    >
                      {pred.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{pred.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
