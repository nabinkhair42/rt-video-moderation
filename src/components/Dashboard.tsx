'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import VideoStream from '@/components/VideoStream'
import ModeratorControls from '@/components/ModeratorControls'
import { useModeration } from '@/hooks/useModeration'
export default function Dashboard() {
  const [streams, setStreams] = useState([
    { id: 1, url: 'https://example.com/stream1' },
    { id: 2, url: 'https://example.com/stream2' },
    // Add more mock streams as needed
  ])
  const [selectedStream, setSelectedStream] = useState(streams[0])
  const { moderationResult, analyze } = useModeration()

  useEffect(() => {
    const interval = setInterval(() => {
      analyze(selectedStream.url)
    }, 5000) // Analyze every 5 seconds

    return () => clearInterval(interval)
  }, [selectedStream, analyze])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Live Stream</CardTitle>
        </CardHeader>
        <CardContent>
          <VideoStream url={selectedStream.url} />
          {moderationResult && (
            <Alert className="mt-4">
              <AlertTitle>Moderation Alert</AlertTitle>
              <AlertDescription>{moderationResult}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Streams</CardTitle>
        </CardHeader>
        <CardContent>
          {streams.map((stream) => (
            <Button
              key={stream.id}
              onClick={() => setSelectedStream(stream)}
              variant={selectedStream.id === stream.id ? 'default' : 'outline'}
              className="w-full mb-2"
            >
              Stream {stream.id}
            </Button>
          ))}
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Moderator Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <ModeratorControls streamId={selectedStream.id} />
        </CardContent>
      </Card>
    </div>
  )
}

