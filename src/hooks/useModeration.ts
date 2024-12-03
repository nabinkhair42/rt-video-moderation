'use client'

import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyDdlYFPS7iVvGrMuv6CRVsRwIduHsPdOjs')

export function useModeration() {
  const [moderationResult, setModerationResult] = useState<string | null>(null)

  const analyze = async (imageUrl: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' })

      const result = await model.generateContent([
        'Analyze this image for prohibited content, violence, explicit content, and aggressive behavior. Provide a brief summary of any issues found.',
        { inlineData: { data: await fetchImageAsBase64(imageUrl), mimeType: 'image/jpeg' } },
      ])

      const text = result.response.text()
      setModerationResult(text)
    } catch (error) {
      console.error('Error analyzing image:', error)
      setModerationResult('Error analyzing image')
    }
  }

  return { moderationResult, analyze }
}

async function fetchImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

