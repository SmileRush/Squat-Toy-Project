import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import RecordAddModal from '../components/RecordAddModal'
import { useRecordModalStatus } from '../states/useRecordModalStatus'
import { useRecordsStatus } from '../states/useRecordsStatus'
import CountNumber from '../utils/components/CountNumber'

const MainPage = () => {
  const recordsStatus             = useRecordsStatus()
  const recordModalStatus         = useRecordModalStatus()
  const [restCount, setRestCount] = useState(0)

  useEffect(() => {
    if (recordsStatus.restCount !== 10000) {
      setRestCount(recordsStatus.restCount)
    }
  }, [])

  return (
    <>
      <RecordAddModal recordModalStatus={recordModalStatus} />
      <div className = 'flex-1 flex items-center justify-center'>
        <div>
          <div className = 'text-[100px] text-[color:var(--mui-color-primary-main)] font-mono'>
            <CountNumber
              startNumber = {recordsStatus.goalCount}
              endNumber   = {restCount}
              duration    = {3}
            />
          </div>
          <div    className = 'flex justify-center'>
            <Button
              variant = 'contained'
              onClick = {recordModalStatus.open}
              size    = 'large'
            >
              기록하기
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
