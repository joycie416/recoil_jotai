import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

type CounterType = number;

const counterState = atomWithReset<CounterType>(0);

type IsEvenType = boolean;

// 파생 상태를 만들기 위해서는 atom 내부에서 get 함수를 사용
// read-only atom
export const isEven = atom<IsEvenType>((get) => {
  const count = get(counterState);
  return count % 2 === 0;
});

// recoil과 달리 기본 atom은 reset 함수가 없음
// write-only atom: setter만 반환
export const resetCounter = atom(null, (_, set, myResetNumber: number) => {
  set(counterState, 0 + myResetNumber);
});

export default counterState;
