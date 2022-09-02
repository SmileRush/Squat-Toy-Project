import React from 'react';
import { getWiseSaying } from '../functions';

type IWiseSaying = {
  index: number
}

const WiseSaying: React.FC<IWiseSaying> = ({ index }) => {
  const { get } = getWiseSaying()
  const { str, writer, index: Index } = get(index)
  return (
    <>
      {str}
      <br />- {writer}
    </>
  );
};

export default WiseSaying