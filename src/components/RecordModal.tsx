import { Button, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const myCanvas = document.createElement('canvas') 
document.body.appendChild(myCanvas)

const myConfetti = confetti.create(document.querySelector('#confetti-canvas') as HTMLCanvasElement, {
  resize    : true,
  useWorker : true
})

type IRecordModal = {
  msg               : string
  saveRecord        : any
  cancelRecord?     : any
  initialQuantity?  : number
  recordModalStatus : {
    opened : boolean;
    open   : () => void;
    close  : () => void;
  },
}

const RecordModal: React.FC<IRecordModal> = ({
  msg,
  saveRecord   : _saveRecord,
  cancelRecord : _cancelRecord,
  initialQuantity = 0,
  recordModalStatus,
}) => {
  const [recordCount, setRecordCount] = useState(initialQuantity)

  // # 기본 등록 시 10회를 하고싶다면
  useEffect(() => {
    setRecordCount(initialQuantity)
  }, [initialQuantity])

  const onClickRecordCount = (addCount: number) => {
    if (addCount > 0) {
      myConfetti({
        particleCount: addCount * 20,
        spread: 160,
      })
    }
    const newRecordCount =
      recordCount + addCount < 0 ? 0 : recordCount + addCount
    setRecordCount(newRecordCount)
  }

  const saveRecord = () => {
    if (recordCount === 0) return

    setRecordCount(0)
    recordModalStatus.close()

    _saveRecord(recordCount)
  }

  const cancelRecord = () => {
    setRecordCount(initialQuantity)
    recordModalStatus.close()

    if (_cancelRecord) _cancelRecord()
  }

  return (
    <>
      <Modal
        open={recordModalStatus.opened}
        onClose={() => cancelRecord()}
        className='flex justify-center items-center'>
        <div className='bg-white rounded-[20px] p-7 w-full max-w-lg'>
          <div className='text-center select-none'>{msg}</div>
          <div className='text-center'>
            <span className='text-[120px] text-[color:var(--mui-color-primary-main)] font-mono select-none'>
              {String(recordCount).padStart(2, '0')}
            </span>
          </div>
          <div className='flex justify-center gap-2'>
            <Button variant='contained' onClick={() => onClickRecordCount(5)}>
              + 5
            </Button>
            <Button variant='contained' onClick={() => onClickRecordCount(1)}>
              + 1
            </Button>
            <Button variant='outlined' onClick={() => onClickRecordCount(-5)}>
              - 5
            </Button>
            <Button variant='outlined' onClick={() => onClickRecordCount(-1)}>
              - 1
            </Button>
          </div>
          <div className='mt-10 flex justify-center gap-2'>
            <Button variant='contained' onClick={saveRecord}>
              적용
            </Button>
            <Button variant='outlined' onClick={cancelRecord}>
              취소
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default RecordModal