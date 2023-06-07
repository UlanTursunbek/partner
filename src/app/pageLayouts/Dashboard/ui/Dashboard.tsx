import { useEffect, useState } from 'react'
import firebase_app from 'app/firebase/config'
import getData from 'app/firestore/ui/getData'
import { Typography } from 'widgets/Typography'

import * as styles from './Dashboard.css'

export const Dashboard = () => {
  // const [todos, setTodos] = useState<any>()

  // const fetchData = async () => {
  //   const { result } = await getData('users', 'user-id')

  //   setTodos(result)
  //   console.log(todos, result)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  // console.log(todos)

  return (
    <div className={styles.wrapper}>
      <Typography component="h4">Dashboard</Typography>
    </div>
  )
}
