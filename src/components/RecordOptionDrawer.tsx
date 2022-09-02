import { Divider, List, ListItem, SwipeableDrawer } from '@mui/material';
import React from 'react';
import { useNoticeSnackbarStatus, useRecordModalStatus, useRecordsStatus } from '../states';
import RecordModifyModal from './RecordModifyModal';

const RecordOptionDrawer: React.FC<{ recordOptionDrawerStatus: IRecordOptionDrawerStatus }> = ({ recordOptionDrawerStatus }) => {
  const noticeSnackbarStatus = useNoticeSnackbarStatus()
  const recordsStatus        = useRecordsStatus()
  const recordModalStatus    = useRecordModalStatus()

  const removeRecord = () => {
    // 실수로 삭제 눌렀을 때, 지워지면 안되니까
    // TODO 여기 구현해야함.
    // windows 랑 mac 이랑 반대로 되어 있음.
    // @ windows : No , Yes
    // @ mac     : Yes , No (취소, 확인이라 쓰여있지만... 취소가 Yes)
    if (confirm(`${recordOptionDrawerStatus.recordId}번 기록을 삭제합니다.`)) return
    
    recordsStatus.removeRecordById(recordOptionDrawerStatus.recordId)
    
    recordOptionDrawerStatus.close()
    noticeSnackbarStatus.open(
      `${recordOptionDrawerStatus.recordId}번 기록이 삭제되었습니다.`,
      'info'
    )
  }

  return (
    <>
      <RecordModifyModal onClose={() => recordOptionDrawerStatus.close()} recordModalStatus={recordModalStatus} id={recordOptionDrawerStatus.recordId} />
      <SwipeableDrawer
        anchor="bottom"
        open={recordOptionDrawerStatus.opened}
        onClose={recordOptionDrawerStatus.close}
        onOpen={() => {}}
      >
        <List className='!py-0'>
          <ListItem className='!pt-6 p-5'>
            <span className='text-[color:var(--mui-color-primary-main)]'>
              {recordOptionDrawerStatus.recordId}번
            </span>
            <span>&nbsp;</span>
            <span>기록에 대해서</span>
          </ListItem>
          <Divider  />
          <ListItem
            className='!pt-6 !p-5 !items-baseline'
            button
            onClick={removeRecord}
          >
            <i className='fa-solid fa-trash-can'  />
            &nbsp;
            <span>삭제</span>
          </ListItem>
          <ListItem
            className='!pt-6 !p-5 !items-baseline'
            button
            onClick={recordModalStatus.open}
          >
            <i className='fa-solid fa-pen-to-square'  />
            &nbsp;
            <span>수정</span>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default RecordOptionDrawer