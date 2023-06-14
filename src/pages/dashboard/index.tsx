import type { ReactElement } from 'react'
import { Dashboard } from 'app/pageLayouts/Dashboard'
import { NextPageWithLayout } from 'pages/_app'
import { PolicyAuthed } from 'shared/policy'

const DashboardPage: NextPageWithLayout = () => {
  return <Dashboard />
}
DashboardPage.policies = [PolicyAuthed]

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>
}

export default DashboardPage
