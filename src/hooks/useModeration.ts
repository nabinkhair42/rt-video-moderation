'use client'

import { useState } from 'react'

interface ModerationResult {
  issues: string[]
  summary: string
  severity: 'low' | 'medium' | 'high'
}

export function useModeration() {
  const [moderationResult, setModerationResult] = useState<ModerationResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyze = async (imageData: string) => {
    try {
      setIsAnalyzing(true)
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze frame')
      }

      const { result } = await response.json()
      setModerationResult(JSON.parse(result))
    } catch (error) {
      console.error('Error in moderation analysis:', error)
      setModerationResult({
        issues: ['Error in analysis'],
        summary: 'Failed to analyze the video frame',
        severity: 'high',
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  return { moderationResult, isAnalyzing, analyze }
}

