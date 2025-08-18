import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypingAnimation } from "@/components/typing-animation"
import {
  Mic,
  Shield,
  Smartphone,
  Users,
  Globe,
  Star,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Zap,
  Heart,
} from "lucide-react"

export default function HomePage() {
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
                Impact
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                Profile
              </a>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button size="sm" asChild>
                <a href="/get-started">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              Empowering India's Workforce
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <TypingAnimation
                messages={[
                  "Empowering India's Informal Workforce",
                  "Secure Digital Agreements for All",
                  "Blockchain Trust Meets AI Fairness",
                ]}
                className="text-primary"
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Simple, Secure Digital Agreements for Everyone. Blockchain-powered trust meets AI-driven fairness for
              workers across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/get-started">
                  Get Started
                  <Zap className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Learn More
                <FileText className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six simple steps to secure, fair digital agreements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">1. Create</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Input details via text/voice in local languages</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">2. Verify</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Aadhaar KYC + details of both parties collected</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">3. AI Assist</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">AI generates legally sound contract</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">4. Finalize</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Both parties approve terms, amount, and conditions
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">5. Blockchain Record</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Contract stored on blockchain → unique tamper-proof Contract ID
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">6. Share</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Get QR code for instant verification</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for India's Workers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Features designed with accessibility, trust, and worker rights at the core
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Regional Language Support</h3>
                <p className="text-muted-foreground">
                  Create and understand contracts in Hindi, Tamil, Bengali, and 15+ other Indian languages
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain-Backed Trust</h3>
                <p className="text-muted-foreground">
                  Immutable records ensure your agreements can't be tampered with or disputed
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Fairness</h3>
                <p className="text-muted-foreground">
                  Smart algorithms detect unfair terms and suggest improvements for worker protection
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Protects Worker Rights</h3>
                <p className="text-muted-foreground">
                  Built-in safeguards ensure fair wages, working conditions, and legal compliance
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Accessible for Unbanked</h3>
                <p className="text-muted-foreground">
                  Works without bank accounts or complex verification - just a phone number
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mobile-First Design</h3>
                <p className="text-muted-foreground">
                  Optimized for smartphones with offline capabilities and low data usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Making Real Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering workers across India with secure, fair digital agreements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary mb-2">5,000+</CardTitle>
                <CardDescription className="text-lg">Workers Protected</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Informal workers now have secure, legally-binding agreements</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary mb-2">2,000+</CardTitle>
                <CardDescription className="text-lg">Contracts Generated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Digital agreements created across 12 Indian states</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary mb-2">98%</CardTitle>
                <CardDescription className="text-lg">Satisfaction Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Workers report increased confidence in their agreements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Workers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from workers who've found security through Jan-Contract
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                    <CardDescription>Construction Worker, Delhi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Finally, I have proof of my work agreements. No more disputes about payment terms. Jan-Contract gave
                  me confidence and security."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Priya Sharma</CardTitle>
                    <CardDescription>Domestic Worker, Mumbai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The voice feature in Hindi made it so easy. I can create contracts without reading complex English.
                  This changed my life!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Amit Singh</CardTitle>
                    <CardDescription>Shop Owner, Bangalore</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As an employer, Jan-Contract helps me create fair agreements quickly. Both my workers and I feel more
                  secure now."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Join us in building a future where every worker's handshake is honored
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Help us empower India's informal workforce with technology that protects and serves.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Github className="mr-2 w-5 h-5" />
            Contribute on GitHub
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Jan-Contract</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering India's informal workforce with secure, fair digital agreements.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">© 2024 Jan-Contract. Built with ❤️ for India's workers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
