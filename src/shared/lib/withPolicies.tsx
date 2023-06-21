import { ReactElement } from 'react'
import _ from 'lodash'

export type Policy = (element: ReactElement) => ReactElement

export const withPolicies = (policies: Policy[]) => {
  const WithPolicies = (page: ReactElement) => {
    const WithPoliciesComponent = _.flowRight(policies)(page)

    return WithPoliciesComponent
  }

  return WithPolicies
}
