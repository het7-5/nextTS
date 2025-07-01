import Link from 'next/link'
import { Timestamp } from './components/Timestamp'
import Button from './components/ui/Button'
import { baseCoverter } from '@/lib/utils'

export default async function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Esc.. <br className="hidden sm:block" />
              <span className="text-purple-600 dark:text-purple-400">
                $implified
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              A minimal data pool.
            </p>
            <div className="mt-10">
              <Link href="/signUp" className='m-8'>
                <Button size="lg">Get Started {baseCoverter("Started")}</Button>
              </Link>
              <Link href="/signIn"  >
                <Button size="lg" variant='secondary' >Log In</Button>
              </Link>
              <Link href="/signInServer"  className='m-8'>
                <Button size="lg" variant='secondary' >Server Log In</Button>
              </Link>
             
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-dark-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              © <Timestamp />. Built by Me.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}