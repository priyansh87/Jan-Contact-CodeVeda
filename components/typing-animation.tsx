"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  messages: string[]
  className?: string
}

export function TypingAnimation({ messages, className = "" }: TypingAnimationProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]

    if (isTyping) {
      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, currentText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
        setIsTyping(true)
      }
    }
  }, [currentText, currentMessageIndex, isTyping, messages])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
