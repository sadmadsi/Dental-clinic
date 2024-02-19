import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-neutral_25 ">
      <div className="container flex justify-between py-10">
        <Image src={"/logo.svg"} width={258} height={242} alt="logo" />
        <div>
          <p className="font-bold mb-10">آدرس</p>
          <p>
            تهران، بلوار اندرزگو، بعد از کاوه،
            <br /> جنب رستوران شمشیری، پلاک
            <br />
            134، طبقه دوم، واحد 3{" "}
          </p>
        </div>
        <div>
          <p className="font-bold mb-10">تلفن</p>
          <p>
            (02122691004)
            <br />
            (09353274044)
          </p>
        </div>
        <div>
          <p className="font-bold mb-10">اطلاع از جشنواره‌ها</p>
          <label htmlFor="contact">شماره تماس</label>
          <input
            type="tel"
            className="bg-white w-full py-1 px-2 rounded-lg mt-3 mb-5 focus:outline-none"
          />
          <button className="bg-primary_100 text-white rounded-lg px-8 py-2">
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};
