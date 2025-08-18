"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, QrCode, ExternalLink, FileText, Share, Home } from "lucide-react"
import Link from "next/link"

export default function ContractConfirmationPage() {
  const [contractData, setContractData] = useState<any>(null)

  useEffect(() => {
    const savedContract = localStorage.getItem("finalizedContract")
    if (savedContract) {
      setContractData(JSON.parse(savedContract))
    }
  }, [])

  if (!contractData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Contract Found</h2>
          <Button asChild>
            <Link href="/get-started">Create New Contract</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Jan-Contract</span>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contract Successfully Created!</h1>
            <p className="text-xl text-muted-foreground">
              Your contract has been recorded on the blockchain and is now legally binding
            </p>
          </div>

          {/* Contract Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Contract Summary
              </CardTitle>
              <CardDescription>Key details of your blockchain-verified agreement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Parties</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Employer:</span>
                      <p className="font-medium">{contractData.employerName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Worker:</span>
                      <p className="font-medium">{contractData.workerName}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Work Details</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Type:</span>
                      <p className="font-medium capitalize">{contractData.workType}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Amount:</span>
                      <p className="font-medium text-lg text-primary">
                        ₹{Number.parseInt(contractData.paymentAmount).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <p className="font-medium">
                        {contractData.startDate} to {contractData.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blockchain Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Blockchain Verification
              </CardTitle>
              <CardDescription>Your contract is now immutably recorded on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Contract ID:</span>
                  <p className="font-mono text-lg font-semibold text-primary">{contractData.contractId}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Blockchain Auth ID:</span>
                  <p className="font-mono text-sm">{contractData.blockchainId}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Timestamp:</span>
                  <p className="font-medium">{new Date(contractData.timestamp).toLocaleString()}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Blockchain Verified
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Legally Binding
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Tamper Proof
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QR Code and Actions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="w-5 h-5 mr-2 text-primary" />
                  QR Code Verification
                </CardTitle>
                <CardDescription>Scan to instantly verify this contract</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-24 h-24 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Anyone can scan this QR code to verify the authenticity of your contract
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Download, share, or view your contract</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Contract
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Share className="w-4 h-4 mr-2" />
                  Share Contract Link
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Blockchain Explorer
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/profile">
                    <FileText className="w-4 h-4 mr-2" />
                    View in Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Your contract is now active and protected by blockchain technology. Both parties can access it anytime
                  for verification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Create Another Contract
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  >
                    View All Contracts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
