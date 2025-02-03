"use client";
// recoil은 클라이언트에서만 작동하므로 'use client' 필요

import { RecoilRoot } from "recoil";

// recoil로 상태 관리할 최상단 컴포넌트에 <RecoilRoot>를 적용
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
