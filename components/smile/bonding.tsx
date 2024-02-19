import { useState } from "react";

export const Bonding = () => {
  const [hover, setHover] = useState<any>(null);
  const signsToTakeTreatment = [
    {
      icon: "/smile/color-change.svg",
      title: "تغییر رنگ",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          جنس کامپوزیت به گونه‌ای است که می‌تواند رنگ مواد غذایی و نوشیدنی‌های
          رنگی را به خود جذب کند. همچنین می‌تواند تحت تأثیر نیکوتین موجود در
          سیگار تغییر رنگ دهد.{" "}
        </div>
      ),
    },
    {
      icon: "/smile/unlimited.svg",
      title: "دائمی نبودن",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          مواد کامپوزیت در مقایسه با لمینت دندان، طول عمر کمتری دارند. توجه
          داشته باشید که ماندگاری کامپوزیت در صورت رعایت نکات مراقبتی تا ۸ سال
          است.{" "}
        </div>
      ),
    },
    {
      icon: "/smile/hard.svg",
      title: "نداشتن استحکام زیاد",
      hover: (
        <div className="absolute top-0 right-0 w-full h-full bg-white/90 p-4">
          کامپوزیت مقاومت و استحکام مطلوبی دارد، اما اگر بخواهیم آن را با لمینت
          مقایسه کنیم، مقاومت آن، نسبت به لمینت کمتر است و نیاز به مراقبت‌های
          بیشتری دارد.{" "}
        </div>
      ),
    },
  ];
  const advantages = [
    {
      title: "1. دستکاری نکردن ساختار دندان",
      content:
        " حین نصب به طور معمول برای نصب کامپوزیت دندان نیازی نیست که سطح آن تراشیده شود. اما در برخی موارد ممکن است دندانپزشک مقداری از سطح دندان را تراش دهد تا با اضافه کردن کامپوزیت بتواند پوشش دهی بیشتری را فراهم کند.",
    },
    {
      title: "2. قابلیت ترمیم شدن ",
      content:
        "کامپوزیت به صورت خمیری است که این امکان را فراهم می‌کند تا دندانپزشک بتواند به راحتی آن را متناسب با شکل دندان بیمار و نیاز او فرم دهد و در صورت شکستگی، لب پر شدگی و یا ترک خوردگی، بتواند مجدد آن را ترمیم کند.",
    },
    {
      title: "3. دوره درمان کوتاه و سریع ",
      content:
        "این روش تنها با یک جلسه مراجعه به مطب قابل انجام است. این مزیت شرایطی را برای کسانی که به هر دلیلی می‌خواهند دندان‌های خود را در اسرع وقت ترمیم کنند، فراهم کرده است.",
    },
    {
      title: "4. مشابه بودن به دندان‌های طبیعی ",
      content:
        "امروزه ونیرها در انواع و رنگ‌های مختلفی تولید می‌شوند تا دندانپزشک بتواند برای ایجاد ظاهر یک دندان طبیعی از آنها استفاده کند.",
    },
  ];
  return (
    <>
      <p className="mt-16">
        کامپوزیت دندان (Dental composite) ماده‌ خمیری همرنگ دندان است که به
        عنوان پر کننده حفره‌ها در پوسیدگی‌ها و برطرف کردن نواقص و مشکلات ظاهری
        دندان‌ها برای ایجاد لبخندی زیبا به کار برده می‌شود. این ونیرها از مواد
        رزینی ساخته می‌شود.
      </p>
      <h2 className="mt-14 mb-8">مزایا کامپوزیت دندان</h2>
      {advantages.map((item: any) => {
        return (
          <div key={item.title} className="rounded-2xl mb-3 shadow-card p-4">
            <p className="text-primary_100">{item.title}</p>
            <p>{item.content}</p>
          </div>
        );
      })}
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
