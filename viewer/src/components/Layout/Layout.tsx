import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { MobileNav } from './MobileNav'
import { useProgress } from '../../hooks/useProgress'

export function Layout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { isComplete, getLevelProgress, getTotalProgress } = useProgress()

  return (
    <div className="min-h-screen bg-corporate-50">
      {/* Header */}
      <Header
        onMenuClick={() => setMobileNavOpen(true)}
        totalProgress={getTotalProgress()}
      />

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        isComplete={isComplete}
        getLevelProgress={getLevelProgress}
      />

      {/* Main content area with sidebar */}
      <div className="flex pt-16">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-72 xl:w-80 bg-white border-r border-corporate-200 overflow-hidden">
          <Sidebar
            isComplete={isComplete}
            getLevelProgress={getLevelProgress}
          />
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-72 xl:ml-80 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
