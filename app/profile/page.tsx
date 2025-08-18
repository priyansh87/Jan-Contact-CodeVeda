"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Shield,
  CheckCircle,
  Star,
  FileText,
  Download,
  QrCode,
  ArrowLeft,
  Plus,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react"
import Link from "next/link"

// Dummy contract data
const contracts = [
  {
    id: "0xABC123456789",
    counterparty: "Suresh Sharma",
    workType: "Construction",
    amount: 12000,
    status: "Completed",
    date: "2024-01-15",
    blockchainId: "0xABC123456789DEF",
    verified: true,
  },
  {
    id: "0xXYZ789012345",
    counterparty: "Anjali Devi",
    workType: "Domestic Help",
    amount: 5000,
    status: "Active",
    date: "2024-01-20",
    blockchainId: "0xXYZ789012345ABC",
    verified: true,
  },
  {
    id: "0xLMN456789012",
    counterparty: "Mohan Singh",
    workType: "Delivery",
    amount: 2500,
    status: "Completed",
    date: "2024-01-10",
    blockchainId: "0xLMN456789012XYZ",
    verified: true,
  },
]

const testimonials = [
  {
    name: "Suresh Sharma",
    work: "Construction Project",
    rating: 5,
    comment: "Ravi Kumar paid on time and respected contract terms. Excellent work quality.",
  },
  {
    name: "Anjali Devi",
    work: "Domestic Help",
    rating: 5,
    comment: "Very reliable and trustworthy. Always follows the agreed schedule.",
  },
]

export default function ProfilePage() {
  const [selectedContract, setSelectedContract] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "Active":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      case "Active":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
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
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Contract
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-2xl">RK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Ravi Kumar</h1>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Aadhaar KYC Verified
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">Small business owner, Delhi. Using Jan-Contract since 2025.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-1">92%</div>
                    <div className="text-sm text-muted-foreground">Blockchain Trust Score</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust & Credibility Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Trust & Credibility
            </CardTitle>
            <CardDescription>Your reputation built through verified blockchain contracts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Trust Level: High</span>
                <span className="text-sm text-muted-foreground">92%</span>
              </div>
              <Progress value={92} className="h-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24</div>
                <div className="text-sm text-muted-foreground">Total Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">22</div>
                <div className="text-sm text-muted-foreground">Successful Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
                <div className="text-sm text-muted-foreground">Active Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">1</div>
                <div className="text-sm text-muted-foreground">Disputes Resolved</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contracts List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              Blockchain Verified Contracts
            </CardTitle>
            <CardDescription>All your contracts are secured and verified on the blockchain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract ID</TableHead>
                    <TableHead>Counterparty</TableHead>
                    <TableHead>Work Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Verification</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-mono text-sm">{contract.id.slice(0, 12)}...</TableCell>
                      <TableCell>{contract.counterparty}</TableCell>
                      <TableCell>{contract.workType}</TableCell>
                      <TableCell>₹{contract.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(contract.status)}>
                          {getStatusIcon(contract.status)}
                          <span className="ml-1">{contract.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {contract.verified && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedContract(contract)}>
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Contract Details</DialogTitle>
                              <DialogDescription>Blockchain-verified contract information</DialogDescription>
                            </DialogHeader>
                            {selectedContract && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Contract ID</label>
                                    <p className="font-mono text-sm">{selectedContract.id}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                      Blockchain Auth ID
                                    </label>
                                    <p className="font-mono text-sm">{selectedContract.blockchainId}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Counterparty</label>
                                    <p>{selectedContract.counterparty}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Work Type</label>
                                    <p>{selectedContract.workType}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Amount</label>
                                    <p className="text-lg font-semibold">₹{selectedContract.amount.toLocaleString()}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Status</label>
                                    <Badge className={getStatusColor(selectedContract.status)}>
                                      {selectedContract.status}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="border-t pt-4">
                                  <h4 className="font-medium mb-2">Contract Summary</h4>
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Work agreement between Ravi Kumar and {selectedContract.counterparty} for{" "}
                                    {selectedContract.workType.toLowerCase()} services. Payment terms: ₹
                                    {selectedContract.amount.toLocaleString()} upon completion. All terms verified and
                                    secured on blockchain.
                                  </p>
                                </div>

                                <div className="flex items-center justify-center space-x-4 border-t pt-4">
                                  <div className="text-center">
                                    <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-2">
                                      <QrCode className="w-12 h-12 text-muted-foreground" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">QR Code for Verification</p>
                                  </div>
                                  <div className="space-y-2">
                                    <Button variant="outline" className="w-full bg-transparent">
                                      <Download className="w-4 h-4 mr-2" />
                                      Download PDF
                                    </Button>
                                    <Button variant="outline" className="w-full bg-transparent">
                                      View on Blockchain Explorer
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Reputation Highlights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Reputation Highlights
            </CardTitle>
            <CardDescription>Testimonials from your completed contracts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.work}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Build your trust profile today</h3>
              <p className="text-lg opacity-90 mb-6">
                Create more legally verifiable contracts and strengthen your reputation
              </p>
              <Button size="lg" variant="secondary">
                <Plus className="w-5 h-5 mr-2" />
                Create New Contract
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
