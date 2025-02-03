import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-5 mx-5">
      <p>Recoil, Jotai, Zustand 비교, 연습용 레포지토리</p>
      <Link href={"/recoil"}>recoil</Link>
      <Link href={"/jotai"}>jotai</Link>
      <Link href={"/zustand"}>zustand</Link>
    </div>
  );
}
