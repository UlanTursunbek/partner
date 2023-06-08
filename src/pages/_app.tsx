import type { ReactElement, ReactNode } from 'react'
import { MainLayout } from 'app/layout/MainLayout'
import { AuthContextProvider } from 'app/providers/AuthProvider/ui/AuthContextProvider'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ProtectedPage from 'shared/lib/protectedPage'

import 'app/styles/index.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthContextProvider>
      <MainLayout>
        <ProtectedPage>{getLayout(<Component {...pageProps} />)}</ProtectedPage>
      </MainLayout>
    </AuthContextProvider>
  )
}
