import { 명언 } from "./명언"

export function getWiseSaying() {
  function getData() {
    const array = 명언.trim().split('\n')
    
    type IgetWiseSaying = {
      index  : number
      str    : string
      writer : string
    }
    const data: IgetWiseSaying[] = []

    array.forEach((row, index) => {
  
      const [str, writer] = row.split('//')
  
      data.push({
        index,
        str,
        writer
      })
    })
  
    return data
  }

  function get(index: number) {
    // if (index >= data.length) {
    //   index -= data.length
    // }
    // @ 위 코드를 한 줄로... =>
    index = index % data.length
    // index가 data.length보다 작을 때는, index를 훼손하지 않는다.
    // index가 data.length보다 클 때는, index를 키워준다.
    return data[index]
  }

  const data = getData()
  
  return {
    get
  }
}