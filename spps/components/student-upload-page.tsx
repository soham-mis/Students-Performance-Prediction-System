"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function StudentUploadPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  const handleFileSelect = () => {
    setSelectedFile("sample-students.csv")
  }

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-2xl">
        <Card className="bg-card">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Upload Student Data</h2>
            <p className="text-muted-foreground mb-6">
              Upload a CSV file containing student information for analysis and prediction.
            </p>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <div className="text-4xl mb-3">📂</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Drag and drop your CSV file</h3>
              <p className="text-muted-foreground text-sm mb-6">or click the button below to select a file</p>
              <Button onClick={handleFileSelect} className="bg-primary text-primary-foreground hover:opacity-90">
                Select CSV File
              </Button>
            </div>

            {selectedFile && (
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground">
                  ✓ Selected: <span className="font-semibold">{selectedFile}</span>
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Data Preview */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Data Preview</h2>
        <Card className="bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Roll No</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Marks</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Aarav Sharma", roll: "CS001", marks: 85, attendance: 95 },
                  { name: "Priya Verma", roll: "CS002", marks: 72, attendance: 88 },
                  { name: "Rohan Gupta", roll: "CS003", marks: 45, attendance: 60 },
                  { name: "Ananya Singh", roll: "CS004", marks: 92, attendance: 98 },
                  { name: "Vikram Kumar", roll: "CS005", marks: 68, attendance: 85 },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{row.roll}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{row.marks}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{row.attendance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Upload Button */}
      <div className="flex gap-4">
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Upload Data</Button>
        <Button variant="outline" className="bg-card text-foreground border-border hover:bg-muted">
          Cancel
        </Button>
      </div>
    </div>
  )
}
