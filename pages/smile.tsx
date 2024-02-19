import { Card } from "@/components/common/card";
import { Tabs } from "@/components/smile/tabs";
import { Disclosure } from "@headlessui/react";
import { MinusIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Smile() {
  const implant = [
    {
      icon: "/smile/space.svg",
      title: " فاصله بین دندان‌ها",
    },
    {
      icon: "/smile/toothless.svg",
      title: "نداشتن دندان",
    },
    {
      icon: "/smile/colored.svg",
      title: "بد رنگ شدن دندان ها",
    },
    {
      icon: "/smile/gumy-smile.svg",
      title: "داشتن لبخند لثه ای ",
    },
    {
      icon: "/smile/broken-tooth.svg",
      title: "دندان های کج و شکسته",
    },
  ];

  const questions = [
    {
      question: "ونیر کامپوزیت بهتر است یا لمینت سرامیکی؟",
      answer:
        "اینکه کدام یک از این روش‌ها برای شما گزینه بهتری است بستگی به شرایط شما و نظر دندانپزشک متخصص دارد. به طور کلی در جدول زیر می‌توانید مقایسه‌ای بین ونیر کامپوزیت و ونیر پرسلن که بسیار به هم شبیه هستند داشته باشید و بهترین آن را برای خود در نظر بگیرید.",
    },
    {
      question:
        "آیا در زمان بارداری می‌توان دندان‌ها را لمینت یا کامپوزیت کرد؟",
      answer:
        "به طور کلی در زمان بارداری توصیه می‌شود که از انجام خدمات دندانپزشکی که ضروری نیستند، پرهیز شود.",
    },
    {
      question: "ماندگاری لمینت دندان چقدر است؟",
      answer:
        "با وجود اینکه موارد متعددی در ماندگاری این روش تأثیر دارند، اما اگر فرد مراقبت‌های صحیح از لمینت سرامیکی خود داشته باشد، می‌توان طول عمری در حدود ۱۰ الی ۲۰ سال از آن انتظار داشت. دوام پرسلن ونیر دندان با نگهداری درست بسیار بالا خواهد بود.",
    },
    {
      question: " آیا بیمه هزینه لمینت دندان را پوشش می‌دهد؟",
      answer:
        "تقریباً هیچ کدام از بیمه‌ها در ایران هزینه لمینت دندان را تحت پوشش خود قرار نمی‌دهند. دلیل این امر این است که این روش جزو درمان‌های دندانپزشکی زیبایی است.",
    },
    {
      question: "آیا امکان لمینت کردن تنها یک دندان وجود دارد؟",
      answer: "بله اما باید رنگ و فرم دندان‌های مجاور نیز در نظر گرفته شوند.",
    },
    {
      question: "میزان ماندگاری لمینت دندان چقدر است؟",
      answer:
        "با وجود اینکه موارد متعددی در ماندگاری این روش تأثیر دارند، اما اگر فرد مراقبت‌های صحیح از لمینت سرامیکی خود داشته باشد، می‌توان طول عمری در حدود ۱۰ الی ۲۰ سال از آن انتظار داشت. دوام پرسلن ونیر دندان با نگهداری درست بسیار بالا خواهد بود.",
    },
  ];
  return (
    <main className="container mt-[150px] mb-20">
      <h1 className="text-center mb-8">اصلاح طرح لبخند</h1>
      <p className="mb-10">
        هر نوع درمان دندان که منجر به زیبایی دندان ها شود، اصطلاحا اصلاح طرح
        لبخند نامیده می شود. زیبایی دندان ها تاثیر به سزایی در زیبایی صورت دارد.
        اگر نیاز به اصلاح طرح لبخند دارید، قبل از آن حتما باید برای چکاپ دندان
        به مطب دندانپزشکی مراجعه کرده تا دندان های شما پوسیدگی نداشته باشد. در
        صورتی که دچار مشکلاتی مانند عفونت های لثه باشید، ابتدا درمان و ترمیم لثه
        توسط دندانپزشک انجام می گیرد. باید توجه کنید که هر شخصی نیاز به اصلاح
        طرح لبخند ندارد و این کار با مشورت متخصص دندانپزشک با دلایل متفاوت و روش
        های مختلفی انجام می گیرد. در زیبایی دندان‌ها، رعایت بهداشت دهان و دندان
        از جمله مسواک زدن منظم، نخ دندان کشیدن به شیوه صحیح در کنار چکاپ
        دندانپزشک از اهمیت بسیار بالایی برخوردار می باشد.{" "}
      </p>
      <h2 className="mb-4">مواردی که با اصلاح طرح لبخند درمان می‌شوند </h2>
      <div className="flex flex-wrap items-stretch gap-3 justify-center">
        {implant.map((item: any) => {
          return <Card item={item} key={item.icon} />;
        })}
      </div>

      <h2 className="mt-8">نحوه‌ی انجام اصلاح طرح لبخند</h2>
      <p className="my-4">
        {" "}
        روش‌های گوناگونی برای اصلاح طرح لبخند وجود دارد از جمله:{" "}
      </p>
      <ul className="list-disc pr-6 space-y-2 mb-4">
        <li>سفید کردن دندان‌ها یا بلیچینگ </li>
        <li>روکش دندان‌ها </li>
        <li>بریج دندان‌ها</li>
        <li>ایمپلنت دندان </li>
        <li>طرح لبخند لثه‌ای </li>
        <li>ارتودنسی </li>
        <li>باندینگ دندان (ونیر کامپوزیت) </li>
        <li>لمینت دندان (ونیر پرسلین) </li>
      </ul>
      <p>
        {" "}
        در ادامه به دو روش رایج و پر طرفدار در اصلاح طرح لبخند و زیبایی دندان‌ها
        می‌پردازیم..
      </p>

      <Tabs />

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
