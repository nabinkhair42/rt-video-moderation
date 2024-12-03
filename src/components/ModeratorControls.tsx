'use client'

import { Button } from '@/components/ui/button'

interface ModeratorControlsProps {
  streamId: number
}

export default function ModeratorControls({ streamId }: ModeratorControlsProps) {
  const handleAction = (action: string) => {
    console.log(`Performing ${action} on stream ${streamId}`)
    // Implement actual moderation actions here
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={() => handleAction('warn')}>Warn</Button>
      <Button onClick={() => handleAction('mute')}>Mute</Button>
      <Button onClick={() => handleAction('ban')} variant="destructive">
        Ban
      </Button>
    </div>
  )
}

