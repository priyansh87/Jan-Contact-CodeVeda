"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypingAnimation } from "@/components/typing-animation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
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
  const { t } = useLanguage()

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
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <div className="hidden lg:flex items-center space-x-6">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t("nav.features")}
                </a>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.howItWorks")}
                </a>
                <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t("nav.impact")}
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.testimonials")}
                </a>
                <a href="/profile" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t("nav.profile")}
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  {t("nav.learnMore")}
                </Button>
                <Button size="sm" asChild>
                  <a href="/get-started">{t("nav.getStarted")}</a>
                </Button>
              </div>
              <div className="md:hidden">
                <Button size="sm" asChild>
                  <a href="/get-started">{t("nav.getStarted")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-accent/20 text-accent-foreground border-accent/30 text-xs sm:text-sm">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              <TypingAnimation
                messages={[t("hero.typing1"), t("hero.typing2"), t("hero.typing3")]}
                className="text-primary"
              />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
                <a href="/get-started">
                  {t("nav.getStarted")}
                  <Zap className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
              >
                {t("nav.learnMore")}
                <FileText className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("howItWorks.title")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mic className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step1.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step1.desc")}</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step2.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step2.desc")}</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step3.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step3.desc")}</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step4.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step4.desc")}</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step5.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step5.desc")}</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Smartphone className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{t("howItWorks.step6.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">{t("howItWorks.step6.desc")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("features.title")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("features.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t("features.language.title")}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.language.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t("features.blockchain.title")}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.blockchain.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{t("features.ai.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.ai.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t("features.rights.title")}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.rights.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t("features.accessible.title")}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.accessible.desc")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {t("features.mobile.title")}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t("features.mobile.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-12 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("impact.title")}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("impact.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">5,000+</CardTitle>
                <CardDescription className="text-base sm:text-lg font-medium">{t("impact.workers")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">{t("impact.workersDesc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">2,000+</CardTitle>
                <CardDescription className="text-base sm:text-lg font-medium">{t("impact.contracts")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">{t("impact.contractsDesc")}</p>
              </CardContent>
            </Card>
            <Card className="text-center sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</CardTitle>
                <CardDescription className="text-base sm:text-lg font-medium">
                  {t("impact.satisfaction")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">{t("impact.satisfactionDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("testimonials.subtitle")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base sm:text-lg">{t("testimonials.rajesh.name")}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{t("testimonials.rajesh.role")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{t("testimonials.rajesh.text")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base sm:text-lg">{t("testimonials.priya.name")}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{t("testimonials.priya.role")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{t("testimonials.priya.text")}</p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base sm:text-lg">{t("testimonials.amit.name")}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{t("testimonials.amit.role")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{t("testimonials.amit.text")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">{t("cta.subtitle")}</p>
          <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
            <Github className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
            {t("cta.github")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Jan-Contract</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{t("footer.description")}</p>
              <div className="flex space-x-2">
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
              <h3 className="font-semibold text-foreground mb-4">{t("footer.product")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t("nav.features")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t("nav.howItWorks")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
