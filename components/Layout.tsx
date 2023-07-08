import FollowBar from './layout/FollowBar'
import Sidebar from './layout/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-black h-screen'>
      <div className='container h-full mx-auto xl:px-32 bg-violet-900'>
        <div className='grid grid-cols-4 h-full bg-yellow-200'>
          <Sidebar />

          <div className='bg-green-400 col-span-3 lg:col-span-2 border-x border-neutral-800'>
            {children}
          </div>
          
          <FollowBar />
        </div>
      </div>
    </div>
  )
}
