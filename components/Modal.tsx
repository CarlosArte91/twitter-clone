import { useCallback } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import Button from './Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled
}: ModalProps) {
  const handleClose = useCallback(() => {
    if (disabled) return
    onClose()
  }, [])

  const handleSubmit = useCallback(() => {
    if (disabled) return
    onSubmit()
  }, [])

  if (!isOpen) return null

  return (
    <>
      <div
        className='
          flex justify-center items-center overflow-x-hidden overflow-y-auto fixed 
          inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70'
      > 
        <div className='relative w-full lg:w-1/2 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
          {/** Content */}
          <div
            className='
              h-full lg:h-auto border-none rounded-lg shadow-lg relative
              flex flex-col w-full bg-black outline-none focus:outline-none'
          >
            {/** Header */}
            <div className='flex items-center justify-between p-10 rounded-t'>
              <h3 className='text-3xl font-semibold text-white'>
                {title}
              </h3>

              <button
                className='p-1 ml-auto border-none hover:opacity-70 transition'
                onClick={handleClose}
              >
                <AiOutlineClose size={20} color='white' />
              </button>
            </div>

            {/** Body */}
            <div className='relative p-10 flex-auto'>
              {body}
            </div>

            {/** Footer */}
            <div className='flex flex-col gap-2 p-10'>
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
