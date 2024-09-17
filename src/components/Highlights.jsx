'use client'
import { rightImg, watchImg } from '@/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, delay: 2, animationDuration: 1, ease: 'power3.in' });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, delay: 2.1, animationDuration: 1, stagger: 0.25, ease: 'power3.in' });
  }, [])


  return (
    <section id='highlights' className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
          <div className="mb-14 w-full md:flex items-end justify-between">
            <h1 id='title' className='section-heading'>
              Get the Highlights.
            </h1>
            <div className="flex flex-wrap items-end gap-5">
              <div className="link">
                Watch the film
                <Image src={watchImg} alt="watch" className='ml-2'/>
              </div>
              <div className="link">
                Watch the event
                <Image src={rightImg} alt="watch" className='ml-2'/>
              </div>
            </div>
          </div>

          <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights