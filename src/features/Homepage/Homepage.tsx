import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import useWindowDimensions from '../../utils/useWindowsDemension'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { HotspotBanner } from './components/HotspotBanner'
import { Promotion } from './components/Promotion'
import { StickyMenu } from './components/StickyMenu'
import { ExclusiveContent } from './components/ExclusiveContent'

export const Homepage = () => {
  const { width } = useWindowDimensions()

  return (
    <div>
      {width >= 1440 ? (
        <div>
          <StickyMenu />
          <ReactPageScroller animationTimer={500}>
            <HotspotBanner />
            <ContactForm />
            <Promotion />
            <ExclusiveContent />
            <Footer />
          </ReactPageScroller>
        </div>
      ) : (
        <div>
          <StickyMenu />
          <HotspotBanner />
          <ContactForm />
          <Promotion />
          <ExclusiveContent />
          <Footer />
        </div>
      )}
    </div>
  )
}
