import { useRouter } from "next/router";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const DescriptonSection = () => {
  const [active, setActive] = useState<{
    icon: string;
    children?: { icon: string }[];
  } | null>(null);
  const icons = [
    {
      icon: "/icons/services.svg",
      children: [
        {
          icon: "/icons/tariff.svg",
          url: "/tarrif",
        },
        {
          icon: "/icons/treatment.svg",
          url: "/treatment",
        },
        {
          icon: "/icons/gum-implementation.svg",
          url: "/gum-surgery",
        },
        {
          icon: "/icons/smile-line.svg",
          url: "/smile",
        },
        {
          icon: "/icons/bleaching.svg",
          url: "/bleaching",
        },
      ],
    },
    {
      icon: "/icons/customer-club.svg",
    },
    {
      icon: "/icons/shop.svg",
    },
    {
      icon: "/icons/address.svg",
    },
  ];
  const router = useRouter();

  const handleClickScroll = () => {
    const element = document.getElementById("location");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container flex flex-col py-10">
      <div className="flex items-center gap-4 mx-auto">
        {icons.map((icon: { icon: string; children?: { icon: string }[] }) => {
          return (
            <div
              onClick={() => {
                active?.children ? setActive(null) : setActive(icon);
                if (icon.icon === "/icons/address.svg") {
                  handleClickScroll();
                }
              }}
              className="flex items-center gap-4"
              key={icon.icon}
            >
              <img
                src={icon.icon}
                className={twMerge(
                  "cursor-pointer",
                  active?.children ? "scale-50" : ""
                )}
                alt="icon"
              />
              {active?.children && active?.icon === icon.icon
                ? active?.children.map((child: any) => {
                    return (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(child.url);
                        }}
                        className="flex items-center gap-4"
                        key={icon.icon}
                      >
                        <img
                          key={child.icon}
                          src={child.icon}
                          className={twMerge("cursor-pointer")}
                          alt="icon"
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          );
        })}
      </div>
      <h1 className="text-center mt-20">چرا دندانپزشکی دکتر سارا حسینی؟</h1>
      <p className="text-center my-8 text-primary_100">
        در مرکز دندانپزشکی ما، دندانپزشکان مجرب شخصاً از سلامت دندان های شما
        مراقبت می کنند.
      </p>
      <p className="text-center">
        ما اینجاییم تا با استفاده از جدیدترین متدها و تجهیزات روز دنیا، بهترین
        خدمات را به شما ارائه بدهیم. خدمات :
        <br />• ترمیم دندان و درمان ریشه دندان • ایمپلنت و جراحی لثه • پروتز
        متحرک و ثابت • نایت گارد • خدمات دندانپزشکی زیبایی • خدمات دندانپزشکی
        اطفال • کامپوزیت • لمینیت • بلیچینگ •خدمات رادیوگرافی
      </p>
    </div>
  );
};
