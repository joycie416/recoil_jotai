"use client";

import { createStore, Provider } from "jotai";

// Provider는 필요한 부분에 store를 통해 같은 atom을 사용하더라도 다른 값을 가질 수 있도록 함
const counterStore = createStore();
// const counterStore2 = createStore();
// store를 등록하지 않은 Provider는 페이지를 벗어나면 초기화됨.

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={counterStore}>
      {children}
      <Provider
      // store={counterStore2}
      >
        {children}
      </Provider>
    </Provider>
  );
}
