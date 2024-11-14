import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo-white.svg" alt="logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance tracker
        </p>
      </div>
    </Link>
  );
}