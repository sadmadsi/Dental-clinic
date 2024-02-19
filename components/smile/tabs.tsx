import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Laminate } from "./laminate";
import { Bonding } from "./bonding";

export const Tabs = () => {
  const [mode, setMode] = useState<"laminate" | "bonding">("laminate");

  const Components = {
    laminate: <Laminate />,
    bonding: <Bonding />,
  }[mode];

  return (
    <>
      <div className="rounded-2xl shadow-card flex gap-4 p-2 mt-20">
        <button
          onClick={() => setMode("laminate")}
          className={twMerge(
            "rounded-2xl grow py-2 px-8 shadow-card",
            mode === "laminate" ? "bg-primary_100 text-white" : ""
          )}
        >
          لمینت دندان (ونیر پرسلین)
        </button>
        <button
          onClick={() => setMode("bonding")}
          className={twMerge(
            "rounded-2xl grow py-2 px-8 shadow-card",
            mode === "bonding" ? "bg-primary_100 text-white" : ""
          )}
        >
          باندینگ دندان (ونیر کامپوزیت)
        </button>
      </div>

      {Components}
    </>
  );
};
