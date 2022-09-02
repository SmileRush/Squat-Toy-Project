import { useState } from "react";

export function useRecordModalStatus() {
  const [opened, setOpened] = useState(false)

  const open  = () => setOpened(true)
  const close = () => setOpened(false)

  return {
    opened,
    open,
    close
  }
}