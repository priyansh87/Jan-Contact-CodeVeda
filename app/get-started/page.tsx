"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, FileText, Users, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function GetStartedPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    employerName: "",
    employerAadhaar: "",
    employerPhone: "",
    workerName: "",
    workerAadhaar: "",
    workerPhone: "",
    workType: "",
    startDate: "",
    endDate: "",
    paymentAmount: "",
    paymentFrequency: "",
    conditions: "",
    purpose: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store form data in localStorage for the next page
    localStorage.setItem("contractFormData", JSON.stringify(formData))
    router.push("/contract-draft")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Jan-Contract</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Create Your Contract</h1>
            <p className="text-xl text-muted-foreground">
              Fill in the details below to generate a secure, legally-binding digital agreement
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Party A (Employer) Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Party A (Employer) Details
                </CardTitle>
                <CardDescription>Information about the person or business hiring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employerName">Full Name *</Label>
                    <Input
                      id="employerName"
                      placeholder="e.g., Suresh Kumar Sharma"
                      value={formData.employerName}
                      onChange={(e) => handleInputChange("employerName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="employerAadhaar">Aadhaar Number *</Label>
                    <Input
                      id="employerAadhaar"
                      placeholder="XXXX-XXXX-1234"
                      value={formData.employerAadhaar}
                      onChange={(e) => handleInputChange("employerAadhaar", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="employerPhone">Phone Number *</Label>
                  <Input
                    id="employerPhone"
                    placeholder="+91 98765 43210"
                    value={formData.employerPhone}
                    onChange={(e) => handleInputChange("employerPhone", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Party B (Worker) Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Party B (Worker) Details
                </CardTitle>
                <CardDescription>Information about the worker or service provider</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workerName">Full Name *</Label>
                    <Input
                      id="workerName"
                      placeholder="e.g., Ravi Kumar Singh"
                      value={formData.workerName}
                      onChange={(e) => handleInputChange("workerName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="workerAadhaar">Aadhaar Number *</Label>
                    <Input
                      id="workerAadhaar"
                      placeholder="XXXX-XXXX-5678"
                      value={formData.workerAadhaar}
                      onChange={(e) => handleInputChange("workerAadhaar", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="workerPhone">Phone Number *</Label>
                  <Input
                    id="workerPhone"
                    placeholder="+91 87654 32109"
                    value={formData.workerPhone}
                    onChange={(e) => handleInputChange("workerPhone", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Work Details Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Work Details
                </CardTitle>
                <CardDescription>Specify the type and duration of work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="workType">Work Type *</Label>
                  <Select value={formData.workType} onValueChange={(value) => handleInputChange("workType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="domestic">Domestic Help</SelectItem>
                      <SelectItem value="delivery">Delivery Services</SelectItem>
                      <SelectItem value="gardening">Gardening</SelectItem>
                      <SelectItem value="cleaning">Cleaning Services</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date *</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange("endDate", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Details Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  Payment Details
                </CardTitle>
                <CardDescription>Specify payment amount and frequency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paymentAmount">Payment Amount (₹) *</Label>
                    <Input
                      id="paymentAmount"
                      type="number"
                      placeholder="e.g., 15000"
                      value={formData.paymentAmount}
                      onChange={(e) => handleInputChange("paymentAmount", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="paymentFrequency">Payment Frequency *</Label>
                    <Select
                      value={formData.paymentFrequency}
                      onValueChange={(value) => handleInputChange("paymentFrequency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="lump-sum">Lump Sum (Upon Completion)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Terms Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Additional Terms
                </CardTitle>
                <CardDescription>Optional conditions and notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="conditions">Conditions (Optional)</Label>
                  <Textarea
                    id="conditions"
                    placeholder="e.g., If payment not done within 7 days, 2% penalty will apply"
                    value={formData.conditions}
                    onChange={(e) => handleInputChange("conditions", e.target.value)}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="purpose">Purpose/Notes (Optional)</Label>
                  <Textarea
                    id="purpose"
                    placeholder="e.g., House renovation work including painting and electrical repairs"
                    value={formData.purpose}
                    onChange={(e) => handleInputChange("purpose", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="px-12 py-6 text-lg">
                Generate AI Contract Draft
                <FileText className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
