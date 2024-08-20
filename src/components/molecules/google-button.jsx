import { Icons } from '@/components/atoms/icons'
import { Button } from '../ui/button'
import { useState } from 'react'
// import { login } from '@/services/auth.service'

const OAuthButton = ({ onClick, isLoading }) => {
  return(
    <Button
      onClick={onClick}
      aria-label='Sign in with google'
      variant='outline'
      className='w-full bg-background rounded-md shadow-sm'
      disabled={isLoading}
    >
      {isLoading && (
        <Icons.spinner
          className="mr-2 size-4 animate-spin"
          aria-hidden="true"
        />
      )}
      <Icons.google className='mr-2 h-4 w-4' aria-hidden='true' />
      Google
    </Button>
  )
}

export default OAuthButton