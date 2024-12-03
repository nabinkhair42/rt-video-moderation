# Real-Time Video Moderation System

This project implements a real-time video moderation system using Next.js, React, and the Gemini AI API. It captures frames from a live video stream and analyzes them for potentially inappropriate or harmful content.

## Features

- Live video streaming from the user's camera
- Frame capture every 2 seconds
- Real-time analysis of captured frames using Gemini AI
- Dynamic display of moderation results
- Moderator controls for taking action based on detected issues

## Technology Stack

- Next.js 13+ with App Router
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Gemini AI API for content analysis

## How It Works

1. The user starts the video stream from their camera.
2. Every 2 seconds, a frame is captured from the video stream.
3. The captured frame is sent to the Gemini AI API for analysis.
4. The API returns a moderation result, including detected issues and severity.
5. The results are displayed in real-time on the dashboard.
6. Moderators can take appropriate actions based on the analysis results.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your Gemini AI API key in the `.env.local` file:

