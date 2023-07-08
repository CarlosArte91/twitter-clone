import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"

import Modal from "../Modal"
import Input from "../Input"

export default function LoginModal() {
  const loginModal = useLoginModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      /** TODO ADD LOG IN */

      loginModal.onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [loginModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        value={email}
        type='text'
        disabled={isLoading}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        placeholder='Password'
        value={password}
        type='password'
        disabled={isLoading}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Sing in'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  )
}
