export default function tarrif() {
  const table1 = [
    {
      service: "لمینیت(هر واحد)",
      price: "7,500,000",
    },
    {
      service: "ونیر کامپوزیت(هر واحد)",
      price: "2,400,000 - 3,200,000",
    },
    {
      service: "ایمپلنت با روکش",
      price: "14,000,000",
    },
    {
      service: "سینوس لیفت هر سمت",
      price: "5,000,000",
    },
    {
      service: "پیوند استخوان هر سمت",
      price: "3,000,000",
    },
    {
      service: "پودر استخوان",
      price: "850,000",
    },
    {
      service: "روکش ایمپلنت",
      price: "6,500,000",
    },
    {
      service: "روکش سرامیکی",
      price: "5,500,000",
    },
    {
      service: "عصب کشی",
      price: "1,800,000 - 2,800,000",
    },
    {
      service: "ترمیم کامپوزیت",
      price: "1,500,000 - 2,000,000",
    },
    {
      service: "پالیش هر فک",
      price: "500,000",
    },
    {
      service: "جرم گیری هر فک",
      price: "500,000",
    },
    {
      service: "آفیس بلیچینگ هر فک",
      price: "3,000,000",
    },
  ];

  const table2 = [
    {
      service: "بیلدآپ کامپوزیت با فایبرپست",
      price: "2,500,000",
    },
    {
      service: "ترمیم آمالگام",
      price: "1,500,000",
    },
    {
      service: "کشیدن دندان",
      price: "700,000 - 1,000,000",
    },
    {
      service: "کشیدن دندان عقل",
      price: "1,500,000",
    },
    {
      service: "جراحی دندان عقل",
      price: "2,500,000",
    },
    {
      service: "لیفت لثه",
      price: "800,000",
    },
    {
      service: "لیفت لثه با استخوان",
      price: "1,500,000",
    },
    {
      service: "کشیدن دندان شیری",
      price: "800,000",
    },
    {
      service: "پالپوتومی دندان شیری",
      price: "1,000,000",
    },
    {
      service: "پالپکتومی دندان شیری",
      price: "1,200,000",
    },
    {
      service: "فیشور سیالنت هر دندان",
      price: "800,000",
    },
    {
      service: "هوم بلیچینگ هر فک",
      price: "2,500,000",
    },
  ];
  return (
    <main className="container mt-[150px] mb-20">
      <h1 className="text-center">تعرفه خدمات دندانپزشکی (1402)</h1>
      <div className="flex mt-8">
        <table className="grow">
          <thead className="bg-neutral_5 ">
            <tr>
              <th className="text-right !px-5 !py-2">درمان</th>
              <th className="text-left !px-5 !py-2">تعرفه(تومان)</th>
            </tr>
          </thead>
          <tbody>
            {table1.map((row: any) => {
              return (
                <tr key={row.service}>
                  <td className="text-right !px-5 !py-2">{row.service}</td>
                  <td className="text-left !px-5 !py-2" dir="ltr">
                    {row.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="grow">
          <thead className="bg-neutral_5 ">
            <tr>
              <th className="h-[40px]"></th>
              <th className="h-[40px]"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <table className="grow">
          <thead className="bg-neutral_5 ">
            <tr>
              <th className="text-right !px-5 !py-2">درمان</th>
              <th className="text-left !px-5 !py-2">تعرفه(تومان)</th>
            </tr>
          </thead>
          <tbody>
            {table2.map((row: any) => {
              return (
                <tr key={row.service}>
                  <td className="text-right !px-5 !py-2">{row.service}</td>
                  <td className="text-left !px-5 !py-2" dir="ltr">
                    {row.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
