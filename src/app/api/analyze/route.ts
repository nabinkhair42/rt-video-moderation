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
    console.error('Analyze route error:', error)
    return NextResponse.json(
      { error: 'Frame analysis failed' },
      { status: 500 }
    )
  }
}