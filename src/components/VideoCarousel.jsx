'use client'
import { hightlightsSlides } from '@/constants'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { videoId, isEnd, startPlay, isLastVideo, isPlaying } = video;

    useEffect(() => {
      const currentProgress = 0;
      let span = videoSpanRef.current;
    
      if (span[videoId]) {
        let anim = gsap.to(span[videoId], {
            onUpdate: () => {
                
            },

            onComplete: () => {

            }
        })
      }

      return () => {}
    }, [videoId, startPlay])

    useEffect(() => {
        if(!isPlaying) {
            videoRef.current[videoId].pause()
        } else {
            startPlay &&  videoRef.current[videoId].play()
        }
    }, [videoId, startPlay, isPlaying, loadedData])
    

    function setSetVideo () {
        setVideo((prev) => ({
            ...prev,
            isPlaying: true
        }))
    }

  return (
    <>
        <div className="flex items-center">
            {
                hightlightsSlides.map((list, i) => (
                    <div key={i} id='slider' className="pr-10 sm:pr-20">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id='video'
                                    playsInline={true}
                                    preload='auto'
                                    muted
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onPlay={setSetVideo}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute top-12 left-[5%] z-10">
                                {
                                    list.textLists.map((text, i) => (
                                        <p key={i} className='md:text-xl text-xl font-medium'>
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>   
    </>
  )
}

export default VideoCarousel