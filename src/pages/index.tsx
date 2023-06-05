import type { ReactElement } from 'react'
import { Landing } from 'app/pageLayouts/Landing'
import type { NextPageWithLayout } from 'pages/_app'

const LandingPage: NextPageWithLayout = () => {
  return <Landing />
}

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>
}

export default LandingPage
