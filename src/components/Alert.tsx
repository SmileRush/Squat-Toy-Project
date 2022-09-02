import React from 'react';
import { Alert as MuiAlert, AlertColor } from '@mui/material'

type IAlert = {
  severity : AlertColor
  children : React.ReactElement | string | number
  ref?     : React.ForwardedRef<HTMLDivElement>
}

const Alert: React.FC<IAlert> = React.forwardRef((props, ref) => {
  return <MuiAlert {...props} ref={ref} variant='filled'  />
});

export default Alert