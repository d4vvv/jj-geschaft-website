'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })

    // Remove error message when the user starts typing
    setErrors(prevErrors => ({ ...prevErrors, [e.target.id]: '' }))
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Podaj swoje imię i nazwisko.'
    if (!formData.email.trim()) newErrors.email = 'Podaj swój email.'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Podaj poprawny adres email.'
    if (!formData.subject.trim()) newErrors.subject = 'Podaj temat wiadomości.'
    if (!formData.message.trim())
      newErrors.message = 'Wiadomość nie może być pusta.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(null)
    setError(null)

    if (!validateForm()) return // Stop submission if validation fails

    setLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess('Wiadomość wysłana pomyślnie!')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        throw new Error('Błąd podczas wysyłania wiadomości.')
      }
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='container px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16'>
        Skontaktuj się z nami
      </h1>
      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <div className='grid gap-6'>
            <div className='flex items-center gap-4'>
              <Building2 className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-bold'>JJ Geschaft</h3>
                <p className='text-muted-foreground'>
                  Profesjonalne biuro nieruchomości
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <MapPin className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-bold'>Adres</h3>
                <p className='text-muted-foreground'>ul. Przykładowa 123</p>
                <p className='text-muted-foreground'>00-000 Warszawa</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Phone className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-bold'>Telefon</h3>
                <p className='text-muted-foreground'>+48 213 769 420</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Mail className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-bold'>Email</h3>
                <p className='text-muted-foreground'>kontakt@jj-geschaft.pl</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Imię i nazwisko
              </label>
              <Input id='name' value={formData.name} onChange={handleChange} />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <Input
                id='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor='subject' className='block text-sm font-medium mb-2'>
              Temat
            </label>
            <Input
              id='subject'
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>
            )}
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>
              Wiadomość
            </label>
            <Textarea
              id='message'
              className='min-h-[150px]'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
            )}
          </div>
          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </Button>
          {success && <p className='text-green-600 mt-2'>{success}</p>}
          {error && <p className='text-red-600 mt-2'>{error}</p>}
        </form>
      </div>
    </div>
  )
}
