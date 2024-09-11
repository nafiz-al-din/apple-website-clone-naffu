'use client'
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '@/utils'

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, delay: 1.5, animationDuration: 1, ease: 'power3.in' })
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
    </section>
  )
}

export default Hero