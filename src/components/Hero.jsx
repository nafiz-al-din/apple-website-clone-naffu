'use client'
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '@/utils'

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, delay: 2, animationDuration: 1, ease: 'power3.in' })
    gsap.to('#cta', { y: -50, opacity: 1, delay: 2.2, animationDuration: 1, display: 'flex', ease: 'power3.in' })
  }, [])

  const [videoSrc, setVideoSrc] = useState(heroVideo)

  useEffect(() => {
    const resizeVideoSrc = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
      } else {
        setVideoSrc(heroVideo)
      }
    }
    window.addEventListener('resize', () => resizeVideoSrc());

    return () => {
      window.removeEventListener('resize', () => resizeVideoSrc());
    }
  }, [])
  
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero-title' className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video muted autoPlay playsInline={true} key={videoSrc} controls={false} className='pointer-events-none'>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="hidden flex-col items-center opacity-0 translate-y-20 relative">
        <a href="#highlights" className='btn'>Buy</a>
        <p className="font-normal text-xl">From @199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero