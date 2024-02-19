import { Card } from "@/components/common/card";
import { Disclosure } from "@headlessui/react";
import { MinusIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function GumSurgery() {
  const [hover, setHover] = useState<any>(null);
  const signsToTakeTreatment = [
    {
      icon: "/gum-surgery/implant-type.svg",
      title: "1. بر اساس نحوه کاشت",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90">
          <ul className="list-disc p-3 pr-8">
            <li className="font-bold">ایمپلنت فرورونده</li>
            <div>
              پیچی به استخوان فک وارد شده و تاج دندان بر روی آن قرار می‌گیرد و
              نیازی نیست تعداد دندان سوار شده برابر با تعداد پیچ باشد.
            </div>
            <li className="font-bold">ایمپلنت‌های ساب پریو استیل</li>
            <div>
              در این روش، پایه فلزی را زیر لثه و روی استخوان فک چسبانده تا دندان
              نگه داشته شود.{" "}
            </div>
          </ul>
        </div>
      ),
    },
    {
      icon: "/gum-surgery/procedure-type.svg",
      title: "2. بر اساس مرحله کار",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90">
          <ul className="list-disc p-3 pr-8">
            <li className="font-bold">ایمپلنت تک مرحله‌ای</li>
            <div>
              در این روش بدون نیاز به جراحی دوم، تاج دندان روی آن قرار داده
              می‌شود.{" "}
            </div>
            <li className="font-bold">ایمپلنت دو مرحله‌ای</li>
            <div>
              ابتدا ایمپلنت داخل فک قرار می‌گیرد و بعد لثه بخیه می‌شود. هر زمان
              که پایه به استخوان فک جوش بخورد، جراحی دوم برای قرار دادن تاج
              انجام می‌شود.{" "}
            </div>
          </ul>
        </div>
      ),
    },
    {
      icon: "/gum-surgery/connector-type.svg",
      title: "3. بر اساس نوع اتصال دهنده",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90">
          <ul className="list-disc p-3 pr-8">
            <li className="font-bold"> ایمپلنت‌های اندو استیل</li>
            <div>
              در جراحی‌های دو مرحله‌ای استفاده می‌شود و به صورت پیچ‌های کوچکی که
              درون استخوان فک قرار می‌گیرد.{" "}
            </div>
            <li className="font-bold">ایمپلنت‌های ساب پریو استیل</li>
            <div>
              در جراحی‌های دو مرحله‌ای استفاده می‌شود و روی استخوان فک و زیر لثه
              قرار می‌گیرد که بخشی از آن بیرون می‌ماند{" "}
            </div>
          </ul>
        </div>
      ),
    },
  ];
  const implant = [
    {
      icon: "/gum-surgery/permenant.svg",
      title: "دائمی بودن درمان",
    },
    {
      icon: "/gum-surgery/confident.svg",
      title: "افزایش اعتماد‌به‌نفس",
    },
    {
      icon: "/gum-surgery/fix.svg",
      title: "جلوگیری از حرکت دندان",
    },
    {
      icon: "/gum-surgery/healthy.svg",
      title: "کمک به حفظ سلامت دهان ",
    },
    {
      icon: "/gum-surgery/natural.svg",
      title: "ظاهر طبیعی",
    },
  ];

  const questions = [
    {
      question: "آیا امکان عدم موفقیت ایمپلنت وجود دارد؟",
      answer:
        "کاشت ایمپلنت دندانی یکی از موفق‌ترین درمان‌های دندانپزشکی بوده و طبق بررسی‌ها و تحقیقات صورت گرفته بالای ۹۵ درصد موفقیت آمیز است .",
    },
    {
      question: "دلایل عدم موفقیت ایمپلنت چیست؟",
      answer:
        "یکی از شایع‌ترین دلایل شکست این درمان، عفونت و تحلیل استخوان است. این عفونت ناشی از ضعف بهداشت دهان و دندان بوده و در صورت عدم درمان، می‌تواند سبب تخریب استخوان، لق شدن ایمپلنت و در نهایت از دست رفتن آن شود.",
    },
    {
      question: "پایه ایمپلنت، چند دندان مصنوعی را می‌تواند پشتیبانی کند؟",
      answer:
        "معمولا پایه ایمپلنت برای یک تاج دندان به کار گرفته می‌شود. اما گاهی اوقات هم بسته به تعداد دندان از دست رفته، دندانپزشک ممکن است روی یک پایه، تا سه دندان مصنوعی نیز قرار دهد.",
    },
    {
      question:
        "آیا مصرف داروهای بیس فسفونات با درمان ایمپلنت تداخل ایجاد می‌کند؟",
      answer:
        "بله، بیس فسفونات می‌تواند سبب استئونکروز یا مرگ استخوان شود. این عارضه، یک منع مطلق برای کاشت ایمپلنت در نظر گرفته شده است.",
    },
  ];
  return (
    <main className="container mt-[150px] mb-20">
      <h1 className="text-center mb-8">ایمپلنت دندان (Dental Implant)</h1>
      <p className="mb-10">
        ایمپلنت دندان (Dental implant)، یکی از روش‌های جایگزین کردن دندان طبیعی
        است. دندانپزشک، یک پایه از جنس تیتانیوم و یا زیرکونیا را در استخوان فک
        جایگذاری کرده و روی آن تاج دندان مصنوعی را قرار می‌دهد. ایمپلنت با قرار
        گرفتن در زیر بافت لثه، دقیقا مانند ریشه دندان عمل می‌کند. به همین جهت
        روکش دندان را در جای خود ثابت و محکم نگه می‌دارد.
      </p>
      <p className="mb-4">
        انواع ایمپلنت بر اساس فاکتورهای متعددی تقسیم بندی می‌شوند{" "}
      </p>
      <div className="flex flex-wrap items-stretch gap-3 justify-center">
        {signsToTakeTreatment.map((item: any) => {
          return (
            <div
              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover(null)}
              key={item.icon}
              className="flex relative flex-col overflow-hidden px-6 py-3 rounded-xl shadow-card w-[285px]"
            >
              <img src={item.icon} className="m-auto" alt="icon" />
              <p className="text-center mt-3">{item.title}</p>
              {hover?.icon === item?.icon ? hover?.hover : null}
            </div>
          );
        })}
      </div>

      <h2 className="mt-8">ایمپلنت برای چه کسانی مناسب نیست؟</h2>
      <ul className="list-disc pr-6 mt-8 space-y-2">
        <li>
          افرادی که از تراکم استخوان کافی برخوردار نیستند. به دلیل این که
          ایمپلنت در استخوان فک کاشته می‌شود، لازمه‌ی آن استخوانی محکم است تا
          بتواند با ایجاد پیوند قوی با پایه، پشتیبانی لازم را فراهم کند.
        </li>
        <li>
          افرادی که از سلامت عمومی کافی برخوردار نیستند. زیرا این روش نیاز به
          انجام جراحی کوچک همراه با دارو و بی‌حسی دارد و زمانی که فرد از سلامت
          عمومی کافی برخوردار نباشد، ممکن است در معرض خطرهایی مانند عفونت زخم
          قرار بگیرد.
        </li>
        <li>افرادی که از سلامت و بهداشت دهان و دندان کافی برخوردار نیستند. </li>
        <li>
          افرادی که دخانیات استفاده می‌کنند. زیرا مصرف سیگار و الکل سیگار و الکل
          باعث می‌شوند اکسیژن و سایر مواد مغذی مورد نیاز برای بهبود زخم، به آن
          نرسد و بافت نتواند به درستی خود را ترمیم کند.
        </li>
      </ul>

      <h2 className="mb-4 mt-12">مزایای ایمپلنت</h2>
      <div className="flex flex-wrap items-stretch gap-3 justify-center">
        {implant.map((item: any) => {
          return <Card item={item} key={item.icon} />;
        })}
      </div>

      <h2 className="mb-4 mt-8">سوالات متداول</h2>
      {questions.map((item: any, index: number) => {
        return (
          <Disclosure key={item.question}>
            {({ open }) => (
              <div className="rounded-2xl shadow-card p-5 mb-6">
                <Disclosure.Button className="flex items-center justify-between w-full text-right focus:outline-0 text-primary_100">
                  {index + 1}. {item.question}
                  {open ? (
                    <MinusIcon className={`h-5 w-5 text-primary_100`} />
                  ) : (
                    <PlusIcon className={` h-5 w-5 text-primary_100`} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 mt-5">
                  {item.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
    </main>
  );
}
