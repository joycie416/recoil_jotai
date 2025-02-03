"use client";

import IncreaseButton from "@/components/IncreaseButton";
import ResetButton from "@/components/ResetButton";
import counterState, { isEven as isEvenState } from "@/recoil/counterStore";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

const RecoilPage = () => {
  // useRecoilState는 useState와 비슷하게 사용 가능
  // const [count, setCount] = useRecoilState(counterState);

  // useRecoilState는 아래와 같이 나누어 사용 가능
  const count = useRecoilValue(counterState); // read-only
  const setCount = useSetRecoilState(counterState);

  // 
  const resetCount = useResetRecoilState(counterState);

  // 파생 상태는 useRecoilValue로 사용
  const isEven = useRecoilValue(isEvenState);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-full flex flex-col">
      <p>RecoilPage</p>
      <p>
        {count} : {isEven ? "짝수" : "홀수"}
      </p>
      <IncreaseButton onClick={handleIncrease} />
      <ResetButton onClick={resetCount} />
    </div>
  );
};

export default RecoilPage;
