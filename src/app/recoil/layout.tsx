"use client";
// recoil은 클라이언트에서만 작동하므로 'use client' 필요

import { RecoilRoot } from "recoil";

// recoil로 상태 관리할 최상단 컴포넌트에 <RecoilRoot>를 적용
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecoilRoot
    // <RecoilRoot>에 initializeState를 사용하여 초기값 설정 가능
    // initializeState={({ set }) => {
    //   set(아톰, 값);
    // }}

    // <RecoilRoot>가 중첩되는 경우 override=true를 설정하면 상위 상태를 덮어쓸 수 있음
    // 기본값=false
    // override={true}
  >{children}</RecoilRoot>;
}
