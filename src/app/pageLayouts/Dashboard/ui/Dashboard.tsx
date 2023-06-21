import { useCurrentUser } from 'shared/api'
import { DatingCounter } from 'widgets/DatingCounter'

import * as styles from './Dashboard.css'

export const Dashboard = () => {
  const currentUser = useCurrentUser()

  return (
    <div className={styles.wrapper}>
      <DatingCounter datingStart={currentUser?.datingStart} />
    </div>
  )
}
