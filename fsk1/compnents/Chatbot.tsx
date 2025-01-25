'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hey, I'm your agent from FSK Cleaning Company. What do you need cleaned?", isBot: true }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for sharing. Could you please upload some photos of the area you need cleaned? This will help us provide a more accurate quote.", 
          isBot: true 
        }])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80">
        <CardHeader>
          <CardTitle>FSK Cleaning Agent</CardTitle>
        </CardHeader>
        <CardContent className="h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.isBot ? 'bg-secondary' : 'bg-primary text-primary-foreground'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="ml-2">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

