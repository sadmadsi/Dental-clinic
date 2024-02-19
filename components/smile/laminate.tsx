import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const Laminate = () => {
  const [hover, setHover] = useState<any>(null);
  const signsToTakeTreatment = [
    {
      icon: "/smile/unreversable.svg",
      title: "بازگشت ناپذیری",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          نصب لمینت نیاز به میزانی تراش روی مینای دندان دارد، پس امکان استفاده
          مجدد از دندان‌های طبیعی بدون هیچ نوع روکشی وجود ندارد.
        </div>
      ),
    },
    {
      icon: "/smile/costly.svg",
      title: "داشتن هزینه بالا",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          هزینه هر واحد لمینت نسبت به سایر روش‌ها بالاتر است.
        </div>
      ),
    },
    {
      icon: "/smile/unrepairable.svg",
      title: "نداشتن قابلیت ترمیم",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          بعد از نصب لمینت نمی‌توان آن را دندان سفید کرد. در واقع اگر مشکلی برای
          لمینت دندان رخ دهد، لازم است که برای تعویض آن اقدام کنید.
        </div>
      ),
    },
    {
      icon: "/smile/sensitive.svg",
      title: "حساسیت دندان‌ها",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          تراش مینای دندان سبب حساس شدن دندان‌ها می‌شود که البته این موضوع طبیعی
          است و بعد از چند روز از بین خواهد رفت.{" "}
        </div>
      ),
    },
    {
      icon: "/smile/consequenses.svg",
      title: " عوارض بعد از لمینت",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          بروز واکنش‌های آلرژیک و درد، تا ۳ روز بعد از انجام لمینت طبیعی است اما
          اگر ادامه پیدا کند نیاز به بررسی پزشک دارد.{" "}
        </div>
      ),
    },
  ];
  return (
    <>
      <p className="mt-16">
        لمینت سرامیکی یا پرسلن ونیر (Dental laminate) روکش نازک همرنگ دندان و از
        جنس پرسلن یا سرامیک است.این ماده در لابراتوار ساخته می‌شود و به کمک
        دندانپزشک روی دندان‌های شما به زیبایی نصب می‌گردد. از این روش زیبایی
        برای اصلاح بدفرمی‌ها، بدشکلی‌ها، نامنظمی‌های جزئی، لب پر شدگی‌ها، ترک
        خوردگی‌ها و بدرنگی دندان‌ها استفاده می‌شود.
      </p>
      <h2 className="mt-24 mb-10">لمینت چگونه روی دندان‌ها نصب می‌شود؟</h2>
      <p>
        اولین گام این است که دندانپزشک تشخیص دهد آیا شما کاندیدای مناسبی برای
        این روش هستید یا خیر. پس از تایید، اگر دارای بیماری‌های دهان و دندان
        باشید، قبل از نصب لمینت سرامیکی باید برای درمان آنها اقدام نمایید. در
        ادامه مراحل و نحوه نصب آنها به صورت زیر انجام می‌شود:
      </p>
      <div className="flex items-center mt-10 gap-8">
        <div className="flex relative flex-col overflow-hidden px-6 py-3 rounded-xl shadow-card grow">
          <h3 className="mb-3 text-primary_100">1. آماده سازی دندان‌ها</h3>
          <p>
            در این مرحله مقداری از مینای دندان تراشیده می‌شود تا شرایط برای نصب
            لمینت آماده شود. میزان این تراش برای هر فرد با توجه به شرایطی که
            دارد، متفاوت است.بعد از تراش قالبی از ساختار دندان شما گرفته می‌شود
            و به لابراتوار ارسال می‌گردد. در صورت لزوم در این مرحله از یک روکش
            موقت برای شما استفاده خواهد شد.
          </p>
        </div>
        <ArrowLeftIcon className="text-primary_100 h-[50px] w-[75px]" />
        <div className="flex relative flex-col overflow-hidden px-6 py-3 rounded-xl shadow-card grow">
          <h3 className="mb-3 text-primary_100">2. نصب لمینت سرامیکی</h3>
          <p>
            حدود یک الی دو هفته بعد زمانی است که برای نصب لمینت، مجددا به کلینیک
            دندانپزشکی مراجعه می‌کنید. اگر شکل، رنگ و به طور کلی ساختار پرسلن
            ونیر مورد تأیید شما و دندانپزشک قرار گرفت، ایشان با استفاده از چسب
            مخصوص لمینت را روی دندان نصب می‌کنند و در ادامه با کمک نور مخصوص آن
            را روی دندان سفت می‌کنند.{" "}
          </p>
        </div>
      </div>
      <h2 className=" mt-12 mb-8">معایب لمینت دندان</h2>
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
    </>
  );
};
