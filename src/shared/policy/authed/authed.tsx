import { ReactElement, useEffect, useState } from 'react'
import { useAuth } from 'app/providers/AuthProvider'
import { useRouter } from 'next/router'
import { routes } from 'shared/lib'

type Props = {
  children: ReactElement
}

function PolicyAuthedInner({ children }: Props) {
  const { user } = useAuth()

  const [isReadyToRender, setIsReadyToRender] = useState<boolean>(Boolean(user))

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push(routes.Login)
    } else {
      setIsReadyToRender(true)
    }
  }, [router])

  if (!isReadyToRender) return null

  return children
}
export const PolicyAuthed = (element: ReactElement) => {
  return <PolicyAuthedInner>{element}</PolicyAuthedInner>
}
