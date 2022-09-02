import { Button, Chip } from '@mui/material';
import React from 'react';
import WiseSaying from '../utils/components/WiseSaying';

type IRecordListItem = {
  no                       : number
  index                    : number
  record                   : IrecordsAtom
  children                 : React.PropsWithChildren | string | number
  recordOptionDrawerStatus : any
}


const RecordListItem: React.FC<IRecordListItem> = ({ no, index, record, recordOptionDrawerStatus, children }) => {
  const wiseSayingIndex = no % 5 === 0 ? no / 5 - 1 : null
  // no가 5로 나누어떨어질 때만 ? 절 실행
  // 아니면 : 절 실행

  return (
    <li className='mt-10 px-10'>
      <div className='flex gap2'>
        <Chip label={`${no}회차`} variant='outlined' className='!pt-1' />
        <Chip label={record.regDate} variant='outlined' className='!pt-1' />
      </div>
      <div className='mt-4 shadow rounded-[20px] flex'>
        <div className='px-5 hover:text-[color:var(--mui-color-primary-main)] flex-grow flex items-center whitespace-pre-wrap leading-relaxed my-5'>
          {record.count}회 수행
          <br />
          {record.content && record.content}
          {wiseSayingIndex !== null && (
            <>
              <br  />
              <br  />
              <WiseSaying index={wiseSayingIndex} />
            </>
          )}
        </div>
        <Button
          onClick={() => recordOptionDrawerStatus.open(no)}   /* 여기서 no를 안 넘기면, OptionDrawer 자체가 undefined 번을 추적함 */
          className='flex-shrink-0 !items-start !rounded-[0_20px_20px_0]'
          color='inherit'
        >
          <span className='text-[#dcdcdc] text-2xl h-[80px] flex items-center'>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </Button>
      </div>
    </li>
  );
};

export default RecordListItem