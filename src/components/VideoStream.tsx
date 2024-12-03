'use client'

import { useRef, useEffect } from 'react'

interface VideoStreamProps {
  url: string
}

export default function VideoStream({ url }: VideoStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = url
    }
  }, [url])

  return (
    <video
      ref={videoRef}
      className="w-full aspect-video"
      autoPlay
      muted
      playsInline
    />
  )
}

