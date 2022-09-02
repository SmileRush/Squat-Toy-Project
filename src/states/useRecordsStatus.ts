import { useEffect } from 'react';
import produce from "immer"
import { atom, RecoilState, useRecoilState } from "recoil"
import { numberFormat } from "../utils/functions"
import { persistAomCommon } from "./persist"

const recordsAtom: RecoilState<IrecordsAtom[]> = atom({
  key              : 'app/recordsAtom',
  effects_UNSTABLE : [persistAomCommon],
  default          : []
})

const doneCountAtom = atom({
  key              : 'app/doneCountAtom',
  effects_UNSTABLE : [persistAomCommon],
  default          : 0
})

export function useRecordsStatus() {
  const goalCount                 = 10000
  const [records,setRecords]      = useRecoilState(recordsAtom)
  const [doneCount, setDoneCount] = useRecoilState(doneCountAtom)
  const restCount                 = goalCount - doneCount

  useEffect(() => {
    if (goalCount !== 10000) {
      setDoneCount(restCount)
    }
    if (restCount === 0) {
      setRecords(
        produce(records, draft => {
          draft[0].content = '\n10000회 목표에 달성했습니다.\n정말 수고 많으셨습니다~^^'
        })
      )
    }
  }, [goalCount, restCount])

  const saveRecord = (addCount: number) => {
    if (doneCount + addCount >= goalCount) {
      addCount = goalCount - doneCount
    }

    if (addCount === 0) return
    
    setDoneCount(doneCount + addCount)
    const newRecord = {
      count   : addCount,
      regDate : numberFormat(new Date())
    }
    const newRecords = [newRecord, ...records]
    setRecords(newRecords)
  }

  const findIndexById = (id) => {
    if (id === null) {
      return -1
    }
    if (id < 1) {
      return -1
    }
    if (id > records.length) {
      return -1
    }
    return records.length - id
    // [5, 4, 3, 2, 1]
    // 역순으로 저장된 배열이므로,
    // 0번째인 5를 찾으려고 한다면,
    // records.length - id 를 해주면 0번째 구성원을 찾을 수 있음.
  }
  
  const removeRecordById = (id) => {
    const index = findIndexById(id)

    if (index === -1) return

    setRecords(
      produce(records, (draft) => {
        draft.splice(index, 1)
      })
    )

    /* Storage 초기화 후, 또는 기록 삭제 시, 삭제한 만큼 숫자를 회복하기 */
    const record = records[index]
    setDoneCount(doneCount - record.count)
  }

  const modifyRecordById = (id, count) => {
    const record = findRecordById(id)

    if (record === null) return

    const diff  = record.count - count
    const index = findIndexById(id)

    setRecords(
      produce(records, draft => {
        draft[index].count = count
      })
    )

    setDoneCount(doneCount - diff)
  }

  const findRecordById = (id: number) => {
    const index = findIndexById(id)

    if (index === -1) return null

    return records[index]
  }

  return {
    goalCount,
    restCount,
    saveRecord,
    records,
    removeRecordById,
    modifyRecordById,
    findRecordById
  }
}