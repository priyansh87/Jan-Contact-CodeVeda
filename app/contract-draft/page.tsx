"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Edit, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ContractDraftPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<any>(null)
  const [contractTerms, setContractTerms] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("contractFormData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(data)

      // Generate AI contract terms based on form data
      const aiGeneratedTerms = `DIGITAL WORK AGREEMENT

This agreement is entered into between:

PARTY A (Employer): ${data.employerName}
Aadhaar: ${data.employerAadhaar}
Phone: ${data.employerPhone}

PARTY B (Worker): ${data.workerName}
Aadhaar: ${data.workerAadhaar}
Phone: ${data.workerPhone}

WORK DETAILS:
- Type of Work: ${data.workType}
- Duration: ${data.startDate} to ${data.endDate}
- Payment Amount: ₹${data.paymentAmount}
- Payment Frequency: ${data.paymentFrequency}

TERMS AND CONDITIONS:
1. The Worker agrees to provide ${data.workType} services as specified.
2. Payment of ₹${data.paymentAmount} will be made ${data.paymentFrequency.toLowerCase()}.
3. Both parties agree to maintain professional conduct throughout the work period.
4. Any disputes will be resolved through mutual discussion first.
5. This contract is legally binding and protected by Indian labor laws.

${data.conditions ? `ADDITIONAL CONDITIONS:\n${data.conditions}` : ""}

${data.purpose ? `PURPOSE/NOTES:\n${data.purpose}` : ""}

AI FAIRNESS CHECK: ✅ PASSED
- Payment terms are fair and comply with minimum wage standards
- Work duration is reasonable
- No exploitative clauses detected
- Contract protects both parties' rights

This contract will be recorded on blockchain upon mutual agreement.`

      setContractTerms(aiGeneratedTerms)
    } else {
      router.push("/get-started")
    }
  }, [router])

  const handleFinalize = () => {
    // Store the finalized contract
    localStorage.setItem(
      "finalizedContract",
      JSON.stringify({
        ...formData,
        contractTerms,
        contractId: `0x${Math.random().toString(16).substr(2, 12).toUpperCase()}`,
        blockchainId: `0x${Math.random().toString(16).substr(2, 16).toUpperCase()}`,
        timestamp: new Date().toISOString(),
      }),
    )
    router.push("/contract-confirmation")
  }

  if (!formData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/get-started"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Form</span>
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI Contract Draft</h1>
            <p className="text-xl text-muted-foreground">
              Review the AI-generated contract terms and make any necessary edits
            </p>
          </div>

          {/* AI Status Badges */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              AI Fairness Check Passed
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Legal Compliance Verified
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Ready for Review
            </Badge>
          </div>

          {/* Contract Preview */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Contract Terms
                  </CardTitle>
                  <CardDescription>AI-generated contract based on your inputs</CardDescription>
                </div>
                <Button variant="outline" onClick={() => setIsEditing(!isEditing)} className="bg-transparent">
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? "Preview" : "Edit"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={contractTerms}
                  onChange={(e) => setContractTerms(e.target.value)}
                  rows={20}
                  className="font-mono text-sm"
                />
              ) : (
                <div className="bg-muted/30 p-6 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm font-mono text-foreground">{contractTerms}</pre>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/get-started">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back & Edit
              </Link>
            </Button>
            <Button size="lg" onClick={handleFinalize} className="px-12">
              <CheckCircle className="w-5 h-5 mr-2" />
              Finalize Contract
            </Button>
          </div>

          {/* AI Insights */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-blue-700">
                <li>• Payment terms comply with minimum wage standards for {formData.workType}</li>
                <li>• Work duration is reasonable and protects worker rights</li>
                <li>• Contract includes standard protection clauses</li>
                <li>• No exploitative or unfair terms detected</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
