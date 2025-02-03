import { atom, selector } from "recoil";

type CounterType = number;

const counterState = atom<CounterType>({
  key: "recoil/counterState",
  default: 0,
});

type IsEvenType = boolean;

// 파생 상태를 만들기 위해서는 selector 사용
export const isEven = selector<IsEvenType>({
  key: "recoil/isEven",
  get: ({ get }) => {
    const count = get(counterState);
    return count % 2 === 0;
  },
})

export default counterState;
