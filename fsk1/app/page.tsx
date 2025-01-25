import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Chatbot from '@/components/Chatbot'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <Chatbot />
      <Footer />
    </main>
  )
}

