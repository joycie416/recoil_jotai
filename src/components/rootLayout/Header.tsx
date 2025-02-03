import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full p-5 flex gap-5">
      <Link href={"/"}>홈</Link>
      <Link href={"/recoil"}>recoil</Link>
      <Link href={"/jotai"}>jotai</Link>
      <Link href={"/zustand"}>zustand</Link>
    </header>
  )
}

export default Header