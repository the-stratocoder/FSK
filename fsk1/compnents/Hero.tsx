import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cleaning Solution in Winnipeg</h1>
        <p className="text-xl mb-8">We find the best employee for your specific cleaning needs.</p>
        <Button size="lg">Get a Quote</Button>
      </div>
    </section>
  )
}

