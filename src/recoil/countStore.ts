import { atom } from "recoil";

type CounterType = number;

const counterState = atom<CounterType>({
  key: "recoil/counterState",
  default: 0,
});

export default counterState;
