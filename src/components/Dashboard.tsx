'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import VideoStream from './VideoStream'
import ModeratorControls from './ModeratorControls'
import { useModeration } from '@/hooks/useModeration'
import Loading from '@/components/Loading'
import { Badge } from '@/components/ui/badge'
export default function Dashboard() {
  const { moderationResult, isAnalyzing, analyze } = useModeration()
  const [isStreaming, setIsStreaming] = useState(false)

  const handleFrameCapture = (imageData: string) => {
    setIsStreaming(true)
    analyze(imageData)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Live Video Feed
            {isAnalyzing && (
            <Loading/>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoStream onFrameCapture={handleFrameCapture} />
          {!isStreaming && (
            <Alert className="mt-4">
              <AlertTitle>No stream active</AlertTitle>
              <AlertDescription>
                Start the stream to begin capturing and analyzing frames.
              </AlertDescription>
            </Alert>
          )}
          {moderationResult && (
            <Alert 
              className="mt-4" 
              variant={moderationResult.severity === 'high' ? 'destructive' : 'default'}
            >
              <AlertTitle className="flex items-center gap-2">
                Moderation Alert
                <Badge variant={moderationResult.severity === 'high' ? 'destructive' : 'default'}>
                  {moderationResult.severity}
                </Badge>
              </AlertTitle>
              <AlertDescription className="mt-2">
                <div className="space-y-2">
                  <p><strong>Issues:</strong> {moderationResult.issues.join(', ')}</p>
                  <p><strong>Summary:</strong> {moderationResult.summary}</p>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Moderator Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <ModeratorControls 
            severity={moderationResult?.severity}
          />
        </CardContent>
      </Card>
    </div>
  )
}

