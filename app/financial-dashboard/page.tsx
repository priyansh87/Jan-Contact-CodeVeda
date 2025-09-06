"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  ArrowLeft,
  Upload,
  FileImage,
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Calendar,
  Download,
  Eye,
  Sparkles,
} from "lucide-react"

const mockFinancialData = {
  revenue: {
    total: 2500000,
    monthly: [
      { month: "Jan", amount: 180000 },
      { month: "Feb", amount: 220000 },
      { month: "Mar", amount: 195000 },
      { month: "Apr", amount: 240000 },
      { month: "May", amount: 210000 },
      { month: "Jun", amount: 280000 },
    ],
    growth: 15.2,
  },
  expenses: {
    total: 1800000,
    categories: [
      { name: "Raw Materials", amount: 720000, percentage: 40 },
      { name: "Labor", amount: 540000, percentage: 30 },
      { name: "Utilities", amount: 180000, percentage: 10 },
      { name: "Marketing", amount: 144000, percentage: 8 },
      { name: "Transportation", amount: 108000, percentage: 6 },
      { name: "Others", amount: 108000, percentage: 6 },
    ],
  },
  profit: {
    gross: 700000,
    net: 520000,
    margin: 20.8,
  },
  assets: {
    current: 450000,
    fixed: 850000,
    total: 1300000,
  },
  liabilities: {
    current: 180000,
    longTerm: 320000,
    total: 500000,
  },
}

export default function FinancialDashboard() {
  const { t } = useLanguage()
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const fileInputRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        processImage()
      }
      reader.readAsDataURL(file)
    }
  }

  const processImage = () => {
    setIsProcessing(true)
    // Simulate OCR processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowDashboard(true)
    }, 3000)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </a>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Jan Genie - Financial Dashboard</span>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {!showDashboard ? (
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Financial Dashboard</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Upload your handwritten financial records and convert them to digital dashboard
                </p>
              </div>

              {/* Upload Section */}
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    Upload Financial Records
                  </CardTitle>
                  <CardDescription>
                    Take a photo of your handwritten balance sheet, income statement, or financial notebook
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {!uploadedImage ? (
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <FileImage className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg font-medium text-foreground mb-2">Upload Financial Document</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Click to upload or drag and drop your image
                        </p>
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose File
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="relative">
                          <img
                            src={uploadedImage || "/placeholder.svg"}
                            alt="Uploaded financial document"
                            className="w-full max-h-64 object-contain rounded-lg border"
                          />
                          <Badge className="absolute top-2 right-2 bg-green-500">Uploaded</Badge>
                        </div>
                        {isProcessing && (
                          <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-2">
                              <Sparkles className="w-5 h-5 text-primary animate-spin" />
                              <span className="text-sm font-medium">Processing with AI OCR...</span>
                            </div>
                            <Progress value={66} className="w-full" />
                            <p className="text-xs text-muted-foreground">
                              Converting handwritten text to digital format
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Financial Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Generated from your handwritten records</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Source
                  </Button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {formatCurrency(mockFinancialData.revenue.total)}
                      </span>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{mockFinancialData.revenue.growth}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {formatCurrency(mockFinancialData.expenses.total)}
                      </span>
                      <div className="flex items-center text-red-600">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">8.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Net Profit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {formatCurrency(mockFinancialData.profit.net)}
                      </span>
                      <Badge variant="secondary">{mockFinancialData.profit.margin}% margin</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        {formatCurrency(mockFinancialData.assets.total)}
                      </span>
                      <div className="flex items-center text-blue-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Healthy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Trend */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Monthly Revenue Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockFinancialData.revenue.monthly.map((month, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium w-12">{month.month}</span>
                          <div className="flex-1 mx-4">
                            <Progress value={(month.amount / 300000) * 100} className="h-2" />
                          </div>
                          <span className="text-sm text-muted-foreground w-20 text-right">
                            {formatCurrency(month.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Expense Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-primary" />
                      Expense Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockFinancialData.expenses.categories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{category.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {category.percentage}% • {formatCurrency(category.amount)}
                            </span>
                          </div>
                          <Progress value={category.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Balance Sheet Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Balance Sheet Summary
                  </CardTitle>
                  <CardDescription>Assets, Liabilities, and Equity overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Assets</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Current Assets</span>
                          <span className="text-sm font-medium">
                            {formatCurrency(mockFinancialData.assets.current)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Fixed Assets</span>
                          <span className="text-sm font-medium">{formatCurrency(mockFinancialData.assets.fixed)}</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total Assets</span>
                            <span>{formatCurrency(mockFinancialData.assets.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Liabilities</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Current Liabilities</span>
                          <span className="text-sm font-medium">
                            {formatCurrency(mockFinancialData.liabilities.current)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Long-term Debt</span>
                          <span className="text-sm font-medium">
                            {formatCurrency(mockFinancialData.liabilities.longTerm)}
                          </span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total Liabilities</span>
                            <span>{formatCurrency(mockFinancialData.liabilities.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Equity</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Owner's Equity</span>
                          <span className="text-sm font-medium">
                            {formatCurrency(mockFinancialData.assets.total - mockFinancialData.liabilities.total)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Debt-to-Equity</span>
                          <span className="text-sm font-medium">0.63</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold text-green-600">
                            <span>Financial Health</span>
                            <span>Good</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
