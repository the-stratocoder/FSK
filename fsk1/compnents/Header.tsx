import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">FSK Cleaning</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#services" className="hover:text-primary">Services</Link></li>
            <li><Link href="#about" className="hover:text-primary">About</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="outline">Book Now</Button>
      </div>
    </header>
  )
}

