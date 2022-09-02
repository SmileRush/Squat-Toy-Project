import React from 'react';
import { useNoticeSnackbarStatus, useRecordsStatus } from '../states';
import RecordModal from './RecordModal';

interface IRecordModifyModal {
  id                : number
  recordModalStatus : any
  onClose           : () => void
}

const RecordModifyModal: React.FC<IRecordModifyModal> = ({ id, recordModalStatus, onClose }) => {
  const recordsStatus = useRecordsStatus()

  const noticeSnackbarStatus = useNoticeSnackbarStatus()

  const saveRecord = (recordCount: number) => {
    recordsStatus.modifyRecordById(id, recordCount)
    noticeSnackbarStatus.open(
      `${id}번 세트의 기록을 ${recordCount}회로 수정하였습니다.`
    )
    if (onClose) onClose()
  }

  const cancelRecord = () => {
    if (onClose) onClose()
  }
  
  // 25회면, 25에서 수정 시작,
  // 15회면, 15에서 수정 시작하도록
  const intialQuantity = (id === null) ? 0 : recordsStatus.findRecordById(id).count
  
  return (
    <>
      <RecordModal
        msg               = {`${id}번 세트의 기록을 몇 회로 수정하시겠습니까?`}
        saveRecord        = {saveRecord}
        cancelRecord      = {cancelRecord}
        initialQuantity   = {intialQuantity}
        recordModalStatus = {recordModalStatus}
      />
    </>
  );
};

export default RecordModifyModal