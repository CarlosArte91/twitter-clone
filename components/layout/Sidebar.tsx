import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'

export default function Sidebar() {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill,
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser,
    },
  ]

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6 bg-orange-400'>
      <div className='bg-green-700 flex flex-col items-end'>
        <div className='bg-green-200 space-y-2 lg:w-[230px]'>
          <SidebarLogo />

          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          
          <SidebarItem label='Logout' icon={BiLogOut} onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}
