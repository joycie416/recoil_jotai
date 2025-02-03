'use client';

import IncreaseButton from "@/components/IncreaseButton";
import counterState from "@/recoil/countStore";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const RecoilPage = () => {
  // useRecoilState는 useState와 비슷하게 사용 가능
  // const [count, setCount] = useRecoilState(counterState);

  // useRecoilState는 아래와 같이 나누어 사용 가능
  const count = useRecoilValue(counterState); // read-only
  const setCount = useSetRecoilState(counterState);

  const handleIncrease = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="w-full flex flex-col">
      <p>RecoilPage</p>
      <p>{count}</p>
      <IncreaseButton onClick={handleIncrease} />
    </div>
  );
};

export default RecoilPage;
