import { useRef, useState } from 'react'
import { useAuth } from 'app/providers/AuthProvider'
import { format } from 'date-fns'
import { formatDuration, intervalToDuration } from 'date-fns'
import { updateCurrentUser } from 'firebase/auth'
import { useCurrentUser } from 'shared/api'
import { Button } from 'shared/ui/Button'
import { Card } from 'shared/ui/Card'
import { DatePicker } from 'shared/ui/DatePicker'
import { Typography } from 'shared/ui/Typography'

import * as styles from './DatingCounter.css'

interface IDatingCounterProps {
  datingStart: number | undefined
}

export const DatingCounter = ({ datingStart }: IDatingCounterProps) => {
  const today = new Date()
  const { user } = useAuth()
  const currentUser = useCurrentUser()

  const [selectedDay, setSelectedDay] = useState<Date>(today)
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
  const containerRef = useRef(null)
  const handleDayClick = async (day?: Date) => {
    if (day && user) {
      setSelectedDay(day)
      setIsCalendarOpen(false)
      await updateUserInfo(user.uid, { datingStart: Number(selectedDay) })
    }
  }

  const parseDatingTime = (startDate: number) => {
    const duration = intervalToDuration({
      start: new Date(startDate),
      end: new Date()
    })

    const formattedDate = formatDuration(duration, {
      delimiter: ', '
    })

    return formattedDate
  }

  return (
    <Card>
      {currentUser?.datingStart ? (
        <Typography>
          You are dating for {parseDatingTime(currentUser.datingStart)}
        </Typography>
      ) : (
        <div className={styles.datePicker} ref={containerRef}>
          <Typography>Start of your relashionships:</Typography>
          <Button variant="primary" onClick={() => setIsCalendarOpen(true)}>
            Select date
          </Button>
          {isCalendarOpen && (
            <div className={styles.calendar}>
              <DatePicker selected={selectedDay} onSelect={handleDayClick} />
            </div>
          )}
        </div>
      )}
    </Card>
  )
}
function updateUserInfo(uid: string, arg1: { datingStart: number }) {
  throw new Error('Function not implemented.')
}
