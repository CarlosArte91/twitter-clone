import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'

export default function SidebarLogo() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div
      className='
        bg-red-300 rounded-full h-14 w-14 p-4 flex items-center justify-center
        hover:bg-blue-300 hover:bg-opacity-10 transition cursor-pointer'
      onClick={handleClick}
    >
      <BsTwitter size={28} color='white' />
    </div>
  )
}
