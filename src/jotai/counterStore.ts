import { atom } from "jotai";

type CounterType = number;

const counterState = atom<CounterType>(0);

type IsEvenType = boolean;

// 파생 상태를 만들기 위해서는 atom 내부에서 get 함수를 사용
export const isEven = atom<IsEvenType>((get) => {
    const count = get(counterState);
    return count % 2 === 0;
  })

// recoil과 달리 reset 함수가 없음
// setter만 반환한 atom 가져와 사용
export const resetCounter = atom(null, (_, set) => {
  return set(counterState, 0);
})


export default counterState;
