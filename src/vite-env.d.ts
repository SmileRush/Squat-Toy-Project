/// <reference types="vite/client" />
type IrecordsAtom = {
  count    : number
  regDate  : string
  content? : string
}

type InoticeSnackbarInfoAtom = {
  opened           : boolean
  severity         : AlertColor
  autoHideDuration : number
  msg              : string
}

type IRecordOptionDrawerStatus = {
  recordId         : undefined | null
  opened           : boolean
  open             : function
  close            : function
}
