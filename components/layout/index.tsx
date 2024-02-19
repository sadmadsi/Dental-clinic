import { ReactNode } from "react";
import { Appbar } from "./appbar";
import { Footer } from "./footer";
import { Vazirmatn } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Vazirmatn({
  weight: "500",
  subsets: ["arabic"],
});

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={twMerge("flex min-h-screen flex-col", inter.className)}>
      <Appbar />
      {children}
      <Footer />
    </div>
  );
};
