import React, { useMemo, useState } from 'react';

export const useRecordOptionDrawerStatus = (): IRecordOptionDrawerStatus => {
  const [recordId,setRecordId] = useState(null)
  const opened                 = useMemo(() => recordId !== null, [recordId])
  const open                   = (id) => setRecordId(id)
  const close                  = () => setRecordId(null)

  return {
    recordId,
    opened,
    open,
    close
  }
};