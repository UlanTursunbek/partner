import React, { ReactNode } from 'react'
import { useAuthContext } from 'app/providers/AuthProvider/ui/AuthContextProvider'
import { useRouter } from 'next/navigation'

import { routes } from './routes'

interface ProtectedPageProps {
  children: ReactNode
}

function ProtectedPage({ children }: ProtectedPageProps) {
  const { user } = useAuthContext()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      router.push(routes.Login)
    }
  }, [user])

  return <>{children}</>
}

export default ProtectedPage
