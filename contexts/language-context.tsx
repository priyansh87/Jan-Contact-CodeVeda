"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi" | "ta"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.impact": "Impact",
    "nav.testimonials": "Testimonials",
    "nav.profile": "Profile",
    "nav.learnMore": "Learn More",
    "nav.getStarted": "Get Started",
    "nav.menu": "Menu",

    // Hero Section
    "hero.badge": "Empowering India's Workforce",
    "hero.typing1": "Empowering India's Informal Workforce",
    "hero.typing2": "Secure Digital Agreements for All",
    "hero.typing3": "Blockchain Trust Meets AI Fairness",
    "hero.description":
      "Simple, Secure Digital Agreements for Everyone. Blockchain-powered trust meets AI-driven fairness for workers across India.",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Six simple steps to secure, fair digital agreements",
    "howItWorks.step1.title": "1. Create",
    "howItWorks.step1.desc": "Input details via text/voice in local languages",
    "howItWorks.step2.title": "2. Verify",
    "howItWorks.step2.desc": "Aadhaar KYC + details of both parties collected",
    "howItWorks.step3.title": "3. AI Assist",
    "howItWorks.step3.desc": "AI generates legally sound contract",
    "howItWorks.step4.title": "4. Finalize",
    "howItWorks.step4.desc": "Both parties approve terms, amount, and conditions",
    "howItWorks.step5.title": "5. Blockchain Record",
    "howItWorks.step5.desc": "Contract stored on blockchain → unique tamper-proof Contract ID",
    "howItWorks.step6.title": "6. Share",
    "howItWorks.step6.desc": "Get QR code for instant verification",

    // Features
    "features.title": "Built for India's Workers",
    "features.subtitle": "Features designed with accessibility, trust, and worker rights at the core",
    "features.language.title": "Regional Language Support",
    "features.language.desc":
      "Create and understand contracts in Hindi, Tamil, Bengali, and 15+ other Indian languages",
    "features.blockchain.title": "Blockchain-Backed Trust",
    "features.blockchain.desc": "Immutable records ensure your agreements can't be tampered with or disputed",
    "features.ai.title": "AI-Powered Fairness",
    "features.ai.desc": "Smart algorithms detect unfair terms and suggest improvements for worker protection",
    "features.rights.title": "Protects Worker Rights",
    "features.rights.desc": "Built-in safeguards ensure fair wages, working conditions, and legal compliance",
    "features.accessible.title": "Accessible for Unbanked",
    "features.accessible.desc": "Works without bank accounts or complex verification - just a phone number",
    "features.mobile.title": "Mobile-First Design",
    "features.mobile.desc": "Optimized for smartphones with offline capabilities and low data usage",

    // Impact
    "impact.title": "Making Real Impact",
    "impact.subtitle": "Empowering workers across India with secure, fair digital agreements",
    "impact.workers": "Workers Protected",
    "impact.workersDesc": "Informal workers now have secure, legally-binding agreements",
    "impact.contracts": "Contracts Generated",
    "impact.contractsDesc": "Digital agreements created across 12 Indian states",
    "impact.satisfaction": "Satisfaction Rate",
    "impact.satisfactionDesc": "Workers report increased confidence in their agreements",

    // Testimonials
    "testimonials.title": "What Workers Say",
    "testimonials.subtitle": "Real stories from workers who've found security through Jan-Contract",
    "testimonials.rajesh.name": "Rajesh Kumar",
    "testimonials.rajesh.role": "Construction Worker, Delhi",
    "testimonials.rajesh.text":
      "Finally, I have proof of my work agreements. No more disputes about payment terms. Jan-Contract gave me confidence and security.",
    "testimonials.priya.name": "Priya Sharma",
    "testimonials.priya.role": "Domestic Worker, Mumbai",
    "testimonials.priya.text":
      "The voice feature in Hindi made it so easy. I can create contracts without reading complex English. This changed my life!",
    "testimonials.amit.name": "Amit Singh",
    "testimonials.amit.role": "Shop Owner, Bangalore",
    "testimonials.amit.text":
      "As an employer, Jan-Contract helps me create fair agreements quickly. Both my workers and I feel more secure now.",

    // CTA
    "cta.title": "Join us in building a future where every worker's handshake is honored",
    "cta.subtitle": "Help us empower India's informal workforce with technology that protects and serves.",
    "cta.github": "Contribute on GitHub",

    // Footer
    "footer.description": "Empowering India's informal workforce with secure, fair digital agreements.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Jan-Contract. Built with ❤️ for India's workers.",
  },
  hi: {
    // Navigation
    "nav.features": "विशेषताएं",
    "nav.howItWorks": "यह कैसे काम करता है",
    "nav.impact": "प्रभाव",
    "nav.testimonials": "प्रशंसापत्र",
    "nav.profile": "प्रोफ़ाइल",
    "nav.learnMore": "और जानें",
    "nav.getStarted": "शुरू करें",
    "nav.menu": "मेनू",

    // Hero Section
    "hero.badge": "भारत के कार्यबल को सशक्त बनाना",
    "hero.typing1": "भारत के अनौपचारिक कार्यबल को सशक्त बनाना",
    "hero.typing2": "सभी के लिए सुरक्षित डिजिटल समझौते",
    "hero.typing3": "ब्लॉकचेन ट्रस्ट मिलता है AI निष्पक्षता",
    "hero.description":
      "सभी के लिए सरल, सुरक्षित डिजिटल समझौते। ब्लॉकचेन-संचालित विश्वास भारत भर के श्रमिकों के लिए AI-संचालित निष्पक्षता से मिलता है।",

    // How It Works
    "howItWorks.title": "यह कैसे काम करता है",
    "howItWorks.subtitle": "सुरक्षित, निष्पक्ष डिजिटल समझौतों के लिए छह सरल चरण",
    "howItWorks.step1.title": "1. बनाएं",
    "howItWorks.step1.desc": "स्थानीय भाषाओं में टेक्स्ट/वॉयस के माध्यम से विवरण दर्ज करें",
    "howItWorks.step2.title": "2. सत्यापित करें",
    "howItWorks.step2.desc": "आधार KYC + दोनों पक्षों का विवरण एकत्र किया गया",
    "howItWorks.step3.title": "3. AI सहायता",
    "howItWorks.step3.desc": "AI कानूनी रूप से मजबूत अनुबंध बनाता है",
    "howItWorks.step4.title": "4. अंतिम रूप दें",
    "howItWorks.step4.desc": "दोनों पक्ष शर्तों, राशि और स्थितियों को मंजूरी देते हैं",
    "howItWorks.step5.title": "5. ब्लॉकचेन रिकॉर्ड",
    "howItWorks.step5.desc": "ब्लॉकचेन पर संग्रहीत अनुबंध → अद्वितीय छेड़छाड़-प्रूफ अनुबंध ID",
    "howItWorks.step6.title": "6. साझा करें",
    "howItWorks.step6.desc": "तत्काल सत्यापन के लिए QR कोड प्राप्त करें",

    // Features
    "features.title": "भारत के श्रमिकों के लिए बनाया गया",
    "features.subtitle": "पहुंच, विश्वास और श्रमिक अधिकारों को मूल में रखकर डिज़ाइन की गई विशेषताएं",
    "features.language.title": "क्षेत्रीय भाषा समर्थन",
    "features.language.desc": "हिंदी, तमिल, बंगाली और 15+ अन्य भारतीय भाषाओं में अनुबंध बनाएं और समझें",
    "features.blockchain.title": "ब्लॉकचेन-समर्थित विश्वास",
    "features.blockchain.desc": "अपरिवर्तनीय रिकॉर्ड सुनिश्चित करते हैं कि आपके समझौतों के साथ छेड़छाड़ या विवाद नहीं हो सकता",
    "features.ai.title": "AI-संचालित निष्पक्षता",
    "features.ai.desc": "स्मार्ट एल्गोरिदम अनुचित शर्तों का पता लगाते हैं और श्रमिक सुरक्षा के लिए सुधार सुझाते हैं",
    "features.rights.title": "श्रमिक अधिकारों की सुरक्षा",
    "features.rights.desc": "अंतर्निहित सुरक्षा उपाय निष्पक्ष मजदूरी, कार्य स्थितियों और कानूनी अनुपालन सुनिश्चित करते हैं",
    "features.accessible.title": "गैर-बैंकिंग के लिए सुलभ",
    "features.accessible.desc": "बैंक खातों या जटिल सत्यापन के बिना काम करता है - बस एक फोन नंबर",
    "features.mobile.title": "मोबाइल-फर्स्ट डिज़ाइन",
    "features.mobile.desc": "ऑफलाइन क्षमताओं और कम डेटा उपयोग के साथ स्मार्टफोन के लिए अनुकूलित",

    // Impact
    "impact.title": "वास्तविक प्रभाव बनाना",
    "impact.subtitle": "सुरक्षित, निष्पक्ष डिजिटल समझौतों के साथ भारत भर के श्रमिकों को सशक्त बनाना",
    "impact.workers": "संरक्षित श्रमिक",
    "impact.workersDesc": "अनौपचारिक श्रमिकों के पास अब सुरक्षित, कानूनी रूप से बाध्यकारी समझौते हैं",
    "impact.contracts": "उत्पन्न अनुबंध",
    "impact.contractsDesc": "12 भारतीय राज्यों में बनाए गए डिजिटल समझौते",
    "impact.satisfaction": "संतुष्टि दर",
    "impact.satisfactionDesc": "श्रमिक अपने समझौतों में बढ़े हुए विश्वास की रिपोर्ट करते हैं",

    // Testimonials
    "testimonials.title": "श्रमिक क्या कहते हैं",
    "testimonials.subtitle": "उन श्रमिकों की वास्तविक कहानियां जिन्होंने जन-कॉन्ट्रैक्ट के माध्यम से सुरक्षा पाई है",
    "testimonials.rajesh.name": "राजेश कुमार",
    "testimonials.rajesh.role": "निर्माण श्रमिक, दिल्ली",
    "testimonials.rajesh.text":
      "अंततः, मेरे पास अपने कार्य समझौतों का प्रमाण है। भुगतान शर्तों के बारे में अब कोई विवाद नहीं। जन-कॉन्ट्रैक्ट ने मुझे विश्वास और सुरक्षा दी।",
    "testimonials.priya.name": "प्रिया शर्मा",
    "testimonials.priya.role": "घरेलू कामगार, मुंबई",
    "testimonials.priya.text":
      "हिंदी में वॉयस फीचर ने इसे बहुत आसान बना दिया। मैं जटिल अंग्रेजी पढ़े बिना अनुबंध बना सकती हूं। इसने मेरी जिंदगी बदल दी!",
    "testimonials.amit.name": "अमित सिंह",
    "testimonials.amit.role": "दुकान मालिक, बैंगलोर",
    "testimonials.amit.text":
      "एक नियोक्ता के रूप में, जन-कॉन्ट्रैक्ट मुझे जल्दी निष्पक्ष समझौते बनाने में मदद करता है। मेरे श्रमिक और मैं दोनों अब अधिक सुरक्षित महसूस करते हैं।",

    // CTA
    "cta.title": "एक ऐसे भविष्य के निर्माण में हमारे साथ जुड़ें जहां हर श्रमिक के हाथ मिलाने का सम्मान हो",
    "cta.subtitle": "भारत के अनौपचारिक कार्यबल को ऐसी तकनीक से सशक्त बनाने में हमारी मदद करें जो सुरक्षा और सेवा प्रदान करती है।",
    "cta.github": "GitHub पर योगदान दें",

    // Footer
    "footer.description": "सुरक्षित, निष्पक्ष डिजिटल समझौतों के साथ भारत के अनौपचारिक कार्यबल को सशक्त बनाना।",
    "footer.product": "उत्पाद",
    "footer.resources": "संसाधन",
    "footer.contact": "संपर्क",
    "footer.copyright": "© 2024 जन-कॉन्ट्रैक्ट। भारत के श्रमिकों के लिए ❤️ के साथ बनाया गया।",
  },
  ta: {
    // Navigation
    "nav.features": "அம்சங்கள்",
    "nav.howItWorks": "இது எப்படி வேலை செய்கிறது",
    "nav.impact": "தாக்கம்",
    "nav.testimonials": "சான்றுகள்",
    "nav.profile": "சுயவிவரம்",
    "nav.learnMore": "மேலும் அறிய",
    "nav.getStarted": "தொடங்குங்கள்",
    "nav.menu": "மெனு",

    // Hero Section
    "hero.badge": "இந்தியாவின் தொழிலாளர் சக்தியை வலுப்படுத்துதல்",
    "hero.typing1": "இந்தியாவின் முறைசாரா தொழிலாளர் சக்தியை வலுப்படுத்துதல்",
    "hero.typing2": "அனைவருக்கும் பாதுகாப்பான டிஜிட்டல் ஒப்பந்தங்கள்",
    "hero.typing3": "பிளாக்செயின் நம்பிக்கை AI நியாயத்தை சந்திக்கிறது",
    "hero.description":
      "அனைவருக்கும் எளிய, பாதுகாப்பான டிஜிட்டல் ஒப்பந்தங்கள். பிளாக்செயின்-இயங்கும் நம்பிக்கை இந்தியா முழுவதும் உள்ள தொழிலாளர்களுக்கு AI-இயங்கும் நியாயத்தை சந்திக்கிறது।",

    // How It Works
    "howItWorks.title": "இது எப்படி வேலை செய்கிறது",
    "howItWorks.subtitle": "பாதுகாப்பான, நியாயமான டிஜிட்டல் ஒப்பந்தங்களுக்கு ஆறு எளிய படிகள்",
    "howItWorks.step1.title": "1. உருவாக்கு",
    "howItWorks.step1.desc": "உள்ளூர் மொழிகளில் உரை/குரல் மூலம் விவரங்களை உள்ளிடவும்",
    "howItWorks.step2.title": "2. சரிபார்க்கவும்",
    "howItWorks.step2.desc": "ஆதார் KYC + இரு தரப்பினரின் விவரங்கள் சேகரிக்கப்பட்டன",
    "howItWorks.step3.title": "3. AI உதவி",
    "howItWorks.step3.desc": "AI சட்டப்பூர்வமாக வலுவான ஒப்பந்தத்தை உருவாக்குகிறது",
    "howItWorks.step4.title": "4. இறுதி செய்யவும்",
    "howItWorks.step4.desc": "இரு தரப்பினரும் விதிமுறைகள், தொகை மற்றும் நிபந்தனைகளை அங்கீகரிக்கின்றனர்",
    "howItWorks.step5.title": "5. பிளாக்செயின் பதிவு",
    "howItWorks.step5.desc": "பிளாக்செயினில் சேமிக்கப்பட்ட ஒப்பந்தம் → தனித்துவமான சிதைவு-ஆதார ஒப்பந்த ID",
    "howItWorks.step6.title": "6. பகிரவும்",
    "howItWorks.step6.desc": "உடனடி சரிபார்ப்புக்கு QR குறியீட்டைப் பெறுங்கள்",

    // Features
    "features.title": "இந்தியாவின் தொழிலாளர்களுக்காக கட்டப்பட்டது",
    "features.subtitle": "அணுகல், நம்பிக்கை மற்றும் தொழிலாளர் உரிமைகளை மையமாக வைத்து வடிவமைக்கப்பட்ட அம்சங்கள்",
    "features.language.title": "பிராந்திய மொழி ஆதரவு",
    "features.language.desc": "தமிழ், இந்தி, பெங்காலி மற்றும் 15+ பிற இந்திய மொழிகளில் ஒப்பந்தங்களை உருவாக்கி புரிந்து கொள்ளுங்கள்",
    "features.blockchain.title": "பிளாக்செயின்-ஆதரவு நம்பிக்கை",
    "features.blockchain.desc":
      "மாறாத பதிவுகள் உங்கள் ஒப்பந்தங்களை சிதைக்கவோ அல்லது சர்ச்சைக்கு உட்படுத்தவோ முடியாது என்பதை உறுதி செய்கின்றன",
    "features.ai.title": "AI-இயங்கும் நியாயம்",
    "features.ai.desc": "ஸ்மார்ட் அல்காரிதம்கள் நியாயமற்ற விதிமுறைகளைக் கண்டறிந்து தொழிலாளர் பாதுகாப்புக்கான மேம்பாடுகளை பரிந்துரைக்கின்றன",
    "features.rights.title": "தொழிலாளர் உரிமைகளைப் பாதுகாக்கிறது",
    "features.rights.desc": "உள்ளமைக்கப்பட்ட பாதுகாப்புகள் நியாயமான ஊதியங்கள், வேலை நிலைமைகள் மற்றும் சட்ட இணக்கத்தை உறுதி செய்கின்றன",
    "features.accessible.title": "வங்கி இல்லாதவர்களுக்கு அணுகக்கூடியது",
    "features.accessible.desc": "வங்கி கணக்குகள் அல்லது சிக்கலான சரிபார்ப்பு இல்லாமல் வேலை செய்கிறது - வெறும் ஒரு தொலைபேசி எண்",
    "features.mobile.title": "மொபைல்-முதல் வடிவமைப்பு",
    "features.mobile.desc": "ஆஃப்லைன் திறன்கள் மற்றும் குறைந்த தரவு பயன்பாட்டுடன் ஸ்மார்ட்போன்களுக்கு உகந்தது",

    // Impact
    "impact.title": "உண்மையான தாக்கத்தை ஏற்படுத்துதல்",
    "impact.subtitle": "பாதுகாப்பான, நியாயமான டிஜிட்டல் ஒப்பந்தங்களுடன் இந்தியா முழுவதும் உள்ள தொழிலாளர்களை வலுப்படுத்துதல்",
    "impact.workers": "பாதுகாக்கப்பட்ட தொழிலாளர்கள்",
    "impact.workersDesc": "முறைசாரா தொழிலாளர்களுக்கு இப்போது பாதுகாப்பான, சட்டப்பூர்வமாக கட்டுப்படுத்தும் ஒப்பந்தங்கள் உள்ளன",
    "impact.contracts": "உருவாக்கப்பட்ட ஒப்பந்தங்கள்",
    "impact.contractsDesc": "12 இந்திய மாநிலங்களில் உருவாக்கப்பட்ட டிஜிட்டல் ஒப்பந்தங்கள்",
    "impact.satisfaction": "திருப்தி விகிதம்",
    "impact.satisfactionDesc": "தொழிலாளர்கள் தங்கள் ஒப்பந்தங்களில் அதிகரித்த நம்பிக்கையை தெரிவிக்கின்றனர்",

    // Testimonials
    "testimonials.title": "தொழிலாளர்கள் என்ன சொல்கிறார்கள்",
    "testimonials.subtitle": "ஜன்-கான்ட்ராக்ட் மூலம் பாதுகாப்பைக் கண்டறிந்த தொழிலாளர்களின் உண்மையான கதைகள்",
    "testimonials.rajesh.name": "ராஜேஷ் குமார்",
    "testimonials.rajesh.role": "கட்டுமான தொழிலாளி, டெல்லி",
    "testimonials.rajesh.text":
      "இறுதியாக, எனது வேலை ஒப்பந்தங்களுக்கு என்னிடம் ஆதாரம் உள்ளது. கொடுப்பனவு விதிமுறைகள் பற்றி இனி சர்ச்சைகள் இல்லை. ஜன்-கான்ட்ராக்ட் எனக்கு நம்பிக்கையும் பாதுகாப்பும் அளித்தது.",
    "testimonials.priya.name": "பிரியா சர்மா",
    "testimonials.priya.role": "வீட்டு வேலையாள், மும்பை",
    "testimonials.priya.text":
      "தமிழில் குரல் அம்சம் இதை மிகவும் எளிதாக்கியது. சிக்கலான ஆங்கிலம் படிக்காமல் நான் ஒப்பந்தங்களை உருவாக்க முடியும். இது என் வாழ்க்கையை மாற்றியது!",
    "testimonials.amit.name": "அமித் சிங்",
    "testimonials.amit.role": "கடை உரிமையாளர், பெங்களூரு",
    "testimonials.amit.text":
      "ஒரு முதலாளியாக, ஜன்-கான்ட்ராக்ட் எனக்கு விரைவாக நியாயமான ஒப்பந்தங்களை உருவாக்க உதவுகிறது. எனது தொழிலாளர்களும் நானும் இப்போது அதிக பாதுகாப்பை உணர்கிறோம்.",

    // CTA
    "cta.title": "ஒவ்வொரு தொழிலாளியின் கைகுலுக்கலும் மதிக்கப்படும் எதிர்காலத்தை கட்டியெழுப்புவதில் எங்களுடன் சேருங்கள்",
    "cta.subtitle":
      "பாதுகாக்கும் மற்றும் சேவை செய்யும் தொழில்நுட்பத்துடன் இந்தியாவின் முறைசாரா தொழிலாளர் சக்தியை வலுப்படுத்த எங்களுக்கு உதவுங்கள்.",
    "cta.github": "GitHub இல் பங்களிக்கவும்",

    // Footer
    "footer.description": "பாதுகாப்பான, நியாயமான டிஜிட்டல் ஒப்பந்தங்களுடன் இந்தியாவின் முறைசாரா தொழிலாளர் சக்தியை வலுப்படுத்துதல்.",
    "footer.product": "தயாரிப்பு",
    "footer.resources": "வளங்கள்",
    "footer.contact": "தொடர்பு",
    "footer.copyright": "© 2024 ஜன்-கான்ட்ராக்ட். இந்தியாவின் தொழிலாளர்களுக்காக ❤️ உடன் கட்டப்பட்டது.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("jan-contract-language") as Language
    if (savedLanguage && ["en", "hi", "ta"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("jan-contract-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
