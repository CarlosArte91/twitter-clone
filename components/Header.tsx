import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

export default function Header({ label, showBackArrow }: HeaderProps) {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [])

  return (
    <div className='border-b border-neutral-800 p-5 bg-violet-800'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && (
          <BiArrowBack
            className='cursor-pointer hover:opacity-70 transition'
            size={20}
            color='white'
            onClick={handleBack}
          />
        )}

        <h1 className='text-white text-xl font-semibold'>
          {label}
        </h1>
      </div>
    </div>
  )
}
