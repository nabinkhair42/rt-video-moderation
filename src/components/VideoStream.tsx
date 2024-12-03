'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Video, StopCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface VideoStreamProps {
  onFrameCapture: (imageData: string) => void;
}

export default function VideoStream({ onFrameCapture }: VideoStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const startStreaming = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setIsStreaming(true)
      setError(null)
    } catch (error) {
      console.error('Error accessing camera:', error)
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setError('Camera permission was denied. Please allow camera access to use this feature.')
      } else {
        setError('An error occurred while trying to access the camera.')
      }
    }
  }, [])

  const stopStreaming = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setIsStreaming(false)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isStreaming) {
      interval = setInterval(() => {
        if (videoRef.current && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d')
          if (ctx) {
            ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
            const imageData = canvasRef.current.toDataURL('image/jpeg');
            onFrameCapture(imageData)
          }
        }
      }, 2000) // Capture frame every 2 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isStreaming, onFrameCapture])

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full aspect-video bg-gray-900"
        autoPlay
        playsInline
        muted
      />
      <canvas
        ref={canvasRef}
        className="hidden"
        width="640"
        height="360"
      />
      <Button
        className="absolute bottom-4 right-4"
        onClick={isStreaming ? stopStreaming : startStreaming}
      >
        {isStreaming ? <StopCircle className="mr-2 h-4 w-4" /> : <Video className="mr-2 h-4 w-4" />}
        {isStreaming ? 'Stop Stream' : 'Start Stream'}
      </Button>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

