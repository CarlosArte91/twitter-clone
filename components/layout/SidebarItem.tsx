import { IconType } from 'react-icons'

interface SidebarItemProps {
  label: string
  href?: string
  icon: IconType
  onClick?: () => void
}

export default function SidebarItem({ label, href, icon: Icon, onClick }: SidebarItemProps) {
  return (
    <div className='flex flex-row items-center'>
      <div
        className='
          bg-red-300 rounded-full h-14 w-14 p-4 flex items-center justify-center
          hover:bg-slate-300 hover:bg-opacity-10 transition cursor-pointer lg:hidden'
      >
        <Icon size={28} color='white' />
      </div>

      <div
        className='
          bg-red-300 hidden lg:flex items-center gap-4 p-4 rounded-full 
          hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'
      >
        <Icon size={28} color='white' />
        <p className='text-white text-xl'>
          {label}
        </p>
      </div>
    </div>
  )
}
