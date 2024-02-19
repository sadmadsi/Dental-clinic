import Image from "next/image";
import Sidebar from "./sidebar";
import { useState } from "react";
import Link from "next/link";

export const Appbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full right-0 bg-white/25 backdrop-blur-sm fixed top-0 z-10">
      <div className="flex items-center container py-2">
        <button onClick={() => setOpen(true)}>
          <Image src={"/sort.svg"} width={40} height={40} alt="logo" />
        </button>
        <Link className="mr-auto" href={"/"}>
          <Image src={"/logo-appbar.svg"} width={125} height={100} alt="logo" />
        </Link>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};
