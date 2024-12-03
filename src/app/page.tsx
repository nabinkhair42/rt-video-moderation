import { Suspense } from 'react'
import Loading from '@/components/Loading'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Live Video Moderation System</h1>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </main>
  )
}

