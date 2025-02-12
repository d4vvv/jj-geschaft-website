import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="container px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16">Skontaktuj się z nami</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="grid gap-6">
            <div className="flex items-center gap-4">
              <Building2 className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Premium Nieruchomości</h3>
                <p className="text-muted-foreground">Profesjonalne biuro nieruchomości</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Adres</h3>
                <p className="text-muted-foreground">ul. Przykładowa 123</p>
                <p className="text-muted-foreground">00-000 Warszawa</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Telefon</h3>
                <p className="text-muted-foreground">+48 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">kontakt@premium-nieruchomosci.pl</p>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Imię i nazwisko
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Temat
            </label>
            <Input id="subject" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Wiadomość
            </label>
            <Textarea id="message" required className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">
            Wyślij wiadomość
          </Button>
        </form>
      </div>
    </div>
  )
}

