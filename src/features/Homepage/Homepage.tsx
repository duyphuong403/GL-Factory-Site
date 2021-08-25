import React from 'react'
import { ContactForm } from './components/ContactForm'
import { HotspotBanner } from './components/HotspotBanner'
import { Promotion } from './components/Promotion'
import { StickyMenu } from './components/StickyMenu'

export const Homepage = () => {
  return (
    <div>
      <StickyMenu />
      <HotspotBanner />
      <ContactForm />
      <Promotion />
    </div>
  )
}
