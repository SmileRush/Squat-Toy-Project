import { recoilPersist } from 'recoil-persist';

export const { persistAtom: persistAomCommon } = recoilPersist({
  key: 'persistAtomCommon'
})