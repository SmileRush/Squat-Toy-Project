import { atom, useRecoilState } from "recoil";
import { AlertColor } from "@mui/material";

export const noticeSnackbarInfoAtom = atom<InoticeSnackbarInfoAtom>({
  key     : 'app/noticeSnackbarInfoAtom',
  default : {
    opened           : false,
    severity         : 'success',
    autoHideDuration : 0,
    msg              : ''
  }
})

export const useNoticeSnackbarStatus = () => {
  const [noticeSnackbarInfo,setNoticeSnackbarInfo] = useRecoilState(noticeSnackbarInfoAtom)

  const opened           = noticeSnackbarInfo.opened
  const autoHideDuration = noticeSnackbarInfo.autoHideDuration
  const severity         = noticeSnackbarInfo.severity
  const msg              = noticeSnackbarInfo.msg

  const open = (msg: string, severity: AlertColor = "success", autoHideDuration = 6000) => {
    setNoticeSnackbarInfo({
      opened: true,
      msg,
      severity,
      autoHideDuration
    })
  }

  const close = () => {
    setNoticeSnackbarInfo({
      ...noticeSnackbarInfo,
      opened: false
    })
  }

  return {
    opened,
    open,
    close,
    autoHideDuration,
    severity,
    msg
  }
}