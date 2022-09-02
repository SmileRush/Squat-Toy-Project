import { Snackbar } from '@mui/material';
import React from 'react';
import { useNoticeSnackbarStatus } from '../states';
import Alert from './Alert';

const NoticeSnackbar = () => {
  const status = useNoticeSnackbarStatus()

  return (
    <>
      <Snackbar
        open             = {status.opened}
        autoHideDuration = {status.autoHideDuration}
        onClose          = {status.close}
      >
        <Alert severity={status.severity}>
          {status.msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NoticeSnackbar