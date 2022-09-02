import React from 'react';
import RecordListItem from '../components/RecordListItem';
import { useRecordsStatus, useRecordOptionDrawerStatus } from '../states';
import RecordOptionDrawer from '../components/RecordOptionDrawer';

const HistoryPage = () => {
  const recordsStatus            = useRecordsStatus()
  const recordOptionDrawerStatus = useRecordOptionDrawerStatus()

  // 기록이 하나도 없는 경우
  if (recordsStatus.records.length === 0) {
    return (
      <>
        <div className='flex-1 flex justify-center items-center'>
          기록이 없습니다. U.U
        </div>
      </>
    )
  }

  // 10,000개를 채운 경우
  
  return (
    <>
      <RecordOptionDrawer recordOptionDrawerStatus={recordOptionDrawerStatus} />
      <div className='flex-1'>
        <ul>
          {recordsStatus.records.map((record, index) => (
            <RecordListItem
              key                      = {index}
              index                    = {index}
              record                   = {record}
              no                       = {recordsStatus.records.length - index}
              recordOptionDrawerStatus = {recordOptionDrawerStatus}
            >
              {record.count}
            </RecordListItem>
          ))}
        </ul>
      </div>
    </>
  )
};

export default HistoryPage