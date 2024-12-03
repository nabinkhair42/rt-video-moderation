import { Suspense } from 'react'
import Dashboard from '@/components/Dashboard'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold mb-4">Live Video Moderation System</h1>
        <p className="text-xl mb-8">Real-time content analysis and moderation for live camera feed</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
          <p className="font-bold">Instructions:</p>
          <ol className="list-decimal list-inside">
            <li>Click the &rdquo; Start Camera&rdquo; button to begin the live feed.</li>
            <li>The system will automatically analyze frames every 5 seconds.</li>
            <li>Moderation alerts will appear below the video feed.</li>
            <li>Use the controls on the right to take action based on the alerts.</li>
          </ol>
        </div>
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      </div>
    </main>
  )
}

