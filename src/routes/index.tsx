import { createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Hero } from '@/components/sections/Hero'
import { StorageSection } from '@/components/sections/StorageSection'
import { Pricing } from '@/components/sections/Pricing'
import { WhyUs } from '@/components/sections/WhyUs'
import { MovingServices } from '@/components/sections/MovingServices'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { BusinessStorage } from '@/components/sections/BusinessStorage'
import { About } from '@/components/sections/About'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StorageSection />
        <Pricing />
        <WhyUs />
        <MovingServices />
        <HowItWorks />
        <BusinessStorage />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}