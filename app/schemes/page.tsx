"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Bot, Send, ArrowLeft, CheckCircle, ExternalLink, User, Sparkles } from "lucide-react"

const mockSchemes = [
  {
    id: 1,
    name: "MUDRA Yojana",
    category: "MSME Loan",
    eligibility: "Small businesses, startups",
    amount: "Up to ₹10 lakhs",
    description: "Collateral-free loans for micro and small enterprises",
    benefits: ["No collateral required", "Low interest rates", "Quick processing"],
    link: "https://www.mudra.org.in/",
    sectors: ["retail", "services", "manufacturing"],
    revenueRange: [0, 1000000],
  },
  {
    id: 2,
    name: "Stand Up India",
    category: "Women/SC/ST Entrepreneurs",
    eligibility: "Women, SC/ST entrepreneurs",
    amount: "₹10 lakhs to ₹1 crore",
    description: "Bank loans for setting up greenfield enterprises",
    benefits: ["Dedicated support", "Mentorship programs", "Easy documentation"],
    link: "https://www.standupmitra.in/",
    sectors: ["all"],
    revenueRange: [1000000, 10000000],
  },
  {
    id: 3,
    name: "CGTMSE",
    category: "Credit Guarantee",
    eligibility: "MSMEs without collateral",
    amount: "Up to ₹2 crores",
    description: "Credit guarantee for collateral-free loans",
    benefits: ["85% guarantee coverage", "Reduced documentation", "Quick approval"],
    link: "https://www.cgtmse.in/",
    sectors: ["manufacturing", "services"],
    revenueRange: [500000, 20000000],
  },
  {
    id: 4,
    name: "PM SVANidhi",
    category: "Street Vendor Loan",
    eligibility: "Street vendors",
    amount: "Up to ₹50,000",
    description: "Collateral-free working capital loan for street vendors",
    benefits: ["Digital payment incentives", "No guarantor required", "Quick approval"],
    link: "https://pmsvanidhi.mohua.gov.in/",
    sectors: ["retail", "food"],
    revenueRange: [0, 500000],
  },
  {
    id: 5,
    name: "Technology Upgradation Fund Scheme",
    category: "Technology Upgrade",
    eligibility: "Textile industry",
    amount: "Up to ₹30 crores",
    description: "Credit linked capital investment subsidy for textile industry",
    benefits: ["Capital investment subsidy", "Interest subsidy", "Technology upgrade"],
    link: "https://texmin.nic.in/",
    sectors: ["textile"],
    revenueRange: [1000000, 500000000],
  },
]

const conversationFlow = [
  {
    step: "greeting",
    botMessage:
      "Hello! I'm your AI Scheme Assistant 🤖. I'll help you find the perfect government schemes for your business. What's your business name?",
    field: "businessName",
    nextStep: "sector",
  },
  {
    step: "sector",
    botMessage:
      "Great! What sector does your business operate in? (e.g., Manufacturing, Services, Retail, Agriculture, Technology, Food & Beverage, Textile)",
    field: "sector",
    nextStep: "revenue",
  },
  {
    step: "revenue",
    botMessage:
      "What's your approximate annual revenue? You can mention in lakhs or crores (e.g., ₹5 lakhs, ₹2 crores)",
    field: "revenue",
    nextStep: "employees",
  },
  {
    step: "employees",
    botMessage: "How many employees do you currently have?",
    field: "employees",
    nextStep: "location",
  },
  {
    step: "location",
    botMessage: "Which city and state is your business located in?",
    field: "location",
    nextStep: "businessType",
  },
  {
    step: "businessType",
    botMessage:
      "Are you a woman entrepreneur, belong to SC/ST category, or a street vendor? This helps me find special schemes for you.",
    field: "businessType",
    nextStep: "analysis",
  },
]

export default function SchemesPage() {
  const { t } = useLanguage()
  const [userProfile, setUserProfile] = useState({
    businessName: "",
    sector: "",
    revenue: "",
    employees: "",
    location: "",
    businessType: "",
  })

  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I'm your AI Scheme Assistant 🤖. I'll help you find the perfect government schemes for your business. What's your business name?",
      timestamp: new Date(),
    },
  ])

  const [currentMessage, setCurrentMessage] = useState("")
  const [currentStep, setCurrentStep] = useState("greeting")
  const [isTyping, setIsTyping] = useState(false)
  const [recommendedSchemes, setRecommendedSchemes] = useState([])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages, isTyping])

  const analyzeAndRecommend = () => {
    const revenue =
      Number.parseFloat(userProfile.revenue.replace(/[^\d.]/g, "")) *
      (userProfile.revenue.toLowerCase().includes("crore")
        ? 10000000
        : userProfile.revenue.toLowerCase().includes("lakh")
          ? 100000
          : 1)

    const sector = userProfile.sector.toLowerCase()
    const businessType = userProfile.businessType.toLowerCase()

    let schemes = mockSchemes.filter((scheme) => {
      // Revenue range check
      if (revenue < scheme.revenueRange[0] || revenue > scheme.revenueRange[1]) {
        return false
      }

      // Sector check
      if (scheme.sectors.includes("all") || scheme.sectors.some((s) => sector.includes(s))) {
        return true
      }

      // Special category check
      if (businessType.includes("woman") || businessType.includes("female")) {
        return scheme.name === "Stand Up India"
      }

      if (businessType.includes("street vendor")) {
        return scheme.name === "PM SVANidhi"
      }

      return false
    })

    // Fallback recommendations
    if (schemes.length === 0) {
      schemes = [mockSchemes[0]] // MUDRA as fallback
    }

    setRecommendedSchemes(schemes)
    setShowRecommendations(true)

    return schemes
  }

  const addBotMessage = (message, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, delay)
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!currentMessage.trim()) return

    // Add user message
    setChatMessages((prev) => [
      ...prev,
      {
        type: "user",
        message: currentMessage,
        timestamp: new Date(),
      },
    ])

    const userInput = currentMessage.trim()

    // Update user profile based on current step
    const currentStepData = conversationFlow.find((step) => step.step === currentStep)
    if (currentStepData && currentStepData.field) {
      setUserProfile((prev) => ({
        ...prev,
        [currentStepData.field]: userInput,
      }))
    }

    // Move to next step
    if (currentStep === "analysis") {
      // Final analysis and recommendations
      const schemes = analyzeAndRecommend()
      addBotMessage(
        `Perfect! Based on your profile:\n\n🏢 ${userProfile.businessName}\n📊 ${userProfile.sector} sector\n💰 ${userProfile.revenue} revenue\n👥 ${userProfile.employees} employees\n📍 ${userProfile.location}\n\nI've found ${schemes.length} suitable schemes for you! Here are my personalized recommendations:\n\n${schemes.map((scheme, index) => `${index + 1}. **${scheme.name}** - ${scheme.amount}\n   ${scheme.description}\n   ✅ ${scheme.benefits[0]}`).join("\n\n")}\n\nYou can explore detailed information below and ask me any questions about these schemes!`,
      )
    } else {
      const nextStepData = conversationFlow.find((step) => step.step === currentStepData?.nextStep)
      if (nextStepData) {
        setCurrentStep(nextStepData.step)
        addBotMessage(nextStepData.botMessage)
      }
    }

    setCurrentMessage("")
  }

  const handleGeneralQuery = (query) => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("mudra")) {
      return "MUDRA Yojana is perfect for small businesses! It offers collateral-free loans up to ₹10 lakhs with three categories: Shishu (up to ₹50K), Kishore (₹50K-₹5L), and Tarun (₹5L-₹10L). The interest rates are typically 8-12% and processing is quick. Would you like help with the application process?"
    }

    if (lowerQuery.includes("standup") || lowerQuery.includes("women")) {
      return "Stand Up India is excellent for women entrepreneurs! It provides bank loans between ₹10 lakhs to ₹1 crore for setting up new enterprises. You get dedicated support, mentorship, and the documentation is simplified. The scheme covers both manufacturing and services sectors."
    }

    if (lowerQuery.includes("eligibility") || lowerQuery.includes("qualify")) {
      return "Based on your profile, you qualify for multiple schemes! The key factors are your revenue range, sector, and business category. Most MSME schemes require Udyam registration, which is free and can be done online. Would you like me to explain the registration process?"
    }

    return "That's a great question! Based on your business profile, I'd recommend starting with the schemes I've suggested. Each has different eligibility criteria and benefits. You can also explore sector-specific schemes or state government schemes in your area. What specific aspect would you like to know more about?"
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
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Jan Genie - Schemes</span>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Government Schemes Assistant</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              AI-powered scheme recommendations for your business
            </p>
          </div>

          <div className="space-y-6">
            {/* AI Chatbot - Full width */}
            <Card className="w-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5 text-primary" />
                  AI Scheme Assistant
                </CardTitle>
                <CardDescription className="text-sm">
                  I'll guide you through finding the perfect government schemes for your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat Messages */}
                  <div className="h-80 sm:h-96 overflow-y-auto space-y-3 p-4 bg-muted/30 rounded-lg border">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`flex items-start gap-2 max-w-[85%] sm:max-w-[80%] ${msg.type === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                            <AvatarFallback className="text-xs">
                              {msg.type === "user" ? (
                                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                              ) : (
                                <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                              )}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`p-3 rounded-lg text-xs sm:text-sm whitespace-pre-line ${
                              msg.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-background border shadow-sm"
                            }`}
                          >
                            {msg.message}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start gap-2 max-w-[80%]">
                          <Avatar className="w-7 h-7 sm:w-8 sm:h-8">
                            <AvatarFallback className="text-xs">
                              <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="p-3 rounded-lg bg-background border shadow-sm">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Chat Input */}
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      placeholder="Type your response..."
                      className="flex-1 text-sm"
                      disabled={isTyping}
                    />
                    <Button type="submit" size="sm" disabled={isTyping || !currentMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Scheme Recommendations */}
            {showRecommendations && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Recommended Schemes</h2>
                </div>

                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {recommendedSchemes.map((scheme) => (
                    <Card key={scheme.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-base sm:text-lg leading-tight">{scheme.name}</CardTitle>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {scheme.category}
                            </Badge>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-xs text-muted-foreground">Amount</div>
                            <div className="font-semibold text-primary text-sm">{scheme.amount}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                          {scheme.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="text-xs sm:text-sm font-medium">Key Benefits:</div>
                          <ul className="text-xs sm:text-sm space-y-1">
                            {scheme.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                          <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                            Learn More <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
