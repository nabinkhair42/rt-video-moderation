'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle, Ban, Flag, MessageSquare, Volume2 } from 'lucide-react'

interface ModeratorControlsProps {
  severity?: 'low' | 'medium' | 'high'
}

export default function ModeratorControls({ severity }: ModeratorControlsProps) {
  const handleAction = async (action: string) => {
    try {
      // In a real application, you would make an API call here
      console.log(`Performing ${action} on live stream`)
      // Example API call:
      // await fetch('/api/moderate', {
      //   method: 'POST',
      //   body: JSON.stringify({ action, severity })
      // })
    } catch (error) {
      console.error(`Error performing ${action}:`, error)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button 
        onClick={() => handleAction('warn')} 
        variant="outline"
        className="justify-start"
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        Send Warning
      </Button>
      <Button 
        onClick={() => handleAction('mute')} 
        variant="secondary"
        className="justify-start"
      >
        <Volume2 className="mr-2 h-4 w-4" />
        Mute Stream
      </Button>
      <Button 
        onClick={() => handleAction('flag')} 
        variant="destructive"
        className="justify-start"
      >
        <Flag className="mr-2 h-4 w-4" />
        Flag for Review
      </Button>
      <Button 
        onClick={() => handleAction('escalate')} 
        variant="default"
        className="justify-start"
        disabled={severity !== 'high'}
      >
        <AlertTriangle className="mr-2 h-4 w-4" />
        Escalate to Senior Moderator
      </Button>
      <Button 
        onClick={() => handleAction('ban')} 
        variant="destructive"
        className="justify-start"
        disabled={severity !== 'high'}
      >
        <Ban className="mr-2 h-4 w-4" />
        Ban Stream
      </Button>
    </div>
  )
}

