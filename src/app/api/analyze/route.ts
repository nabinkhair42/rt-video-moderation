import { NextResponse } from 'next/server'
import { analyzeVideoFrame } from '@/lib/gemini'

export async function POST(request: Request) {
  try {
    const { imageData } = await request.json()
    
    if (!imageData) {
      return NextResponse.json(
        { error: 'Image data is required' },
        { status: 400 }
      )
    }

    const result = await analyzeVideoFrame(imageData)
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Error in analyze route:', error)
    return NextResponse.json(
      { error: 'Failed to analyze video frame' },
      { status: 500 }
    )
  }
}

