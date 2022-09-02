import React from 'react';
import { useNoticeSnackbarStatus, useRecordsStatus } from '../states';
import RecordModal from './RecordModal';

const RecordAddModal = ({ recordModalStatus }) => {
  const recordsStatus        = useRecordsStatus()
  const noticeSnackbarStatus = useNoticeSnackbarStatus()

  const saveRecord = (recordCount: number) => {
    recordsStatus.saveRecord(recordCount)
    noticeSnackbarStatus.open(`이번 세트에 ${recordCount}회 수행하셨습니다.`)
  }

  return (
    <RecordModal
      msg               = '이번에 몇 회 하셨나요?'
      recordModalStatus = {recordModalStatus}
      saveRecord        = {saveRecord}
      initialQuantity   = {10}
    />
  );
};

export default RecordAddModal