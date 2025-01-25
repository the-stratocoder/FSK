import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const services = [
  { title: 'Kitchen Deep Clean', price: 100 },
  { title: 'Car Cleansing', price: 120 },
  { title: 'Full House Makeover', price: 250, description: '(for specific sized home)' },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{service.price} CAD</p>
                {service.description && <p className="text-sm text-muted-foreground">{service.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-lg">
          We also clean toilets, instruments, garages, remove snow, clean rooftops, fireplaces, windows, and even messy teen bedrooms!
        </p>
        <p className="mt-4 text-center text-xl font-semibold">
          Our standard rate is 40 CAD per hour for custom cleaning jobs.
        </p>
      </div>
    </section>
  )
}

