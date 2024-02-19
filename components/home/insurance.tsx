import { useState } from "react";

export const Insurances = () => {
  const [hover, setHover] = useState("");
  const insurances = [
    {
      icon: "/insurance/pasargad.svg",
      hover: "/insurance/hover-pasargad.svg",
    },
    {
      icon: "/insurance/moalem.svg",
      hover: "/insurance/hover-moalem.svg",
    },
    {
      icon: "/insurance/razi.svg",
      hover: "/insurance/hover-razi.svg",
    },
    {
      icon: "/insurance/mellat.svg",
      hover: "/insurance/hover-mellat.svg",
    },
    {
      icon: "/insurance/iran.svg",
      hover: "/insurance/hover-iran.svg",
    },
    {
      icon: "/insurance/alborz.svg",
      hover: "/insurance/hover-alborz.svg",
    },
  ];
  return (
    <div className="container py-10">
      <h1 className="text-primary_100 text-center">بیمه‌های طرف قرارداد</h1>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3">
        {insurances.map((ins: any) => {
          return (
            <div
              onMouseEnter={() => setHover(ins.icon)}
              onMouseLeave={() => setHover("")}
              key={ins.icon}
            >
              {hover === ins.icon ? (
                <img src={ins.hover} alt={ins.icon} />
              ) : (
                <img src={ins.icon} alt={ins.icon} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
