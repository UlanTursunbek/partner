import type { ReactElement, ReactNode } from 'react'
import { MainLayout } from 'app/layout/MainLayout'
import { AuthContextProvider } from 'app/providers/AuthProvider/ui/AuthContextProvider'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Policy, withPolicies } from 'shared/lib/withPolicy'

import 'app/styles/index.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement
  policies?: Policy[]
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const policies = [...(Component.policies || [])]

  return (
    <AuthContextProvider>
      <MainLayout>
        {withPolicies(policies)(getLayout(<Component {...pageProps} />))}
      </MainLayout>
    </AuthContextProvider>
  )
}
