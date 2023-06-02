import type { ReactElement } from 'react'
import { Login } from 'app/pageLayouts/Login'
import { NextPageWithLayout } from 'pages/_app'

const LoginPage: NextPageWithLayout = () => {
  return <Login />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>
}

export default LoginPage
