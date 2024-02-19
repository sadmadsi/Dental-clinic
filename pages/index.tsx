import dynamic from "next/dynamic";
import { DescriptonSection } from "@/components/home/descripton-section";
import { Insurances } from "@/components/home/insurance";
const Map = dynamic(() => import("../components/home/map"), { ssr: false });
import { Sample } from "@/components/home/sample";
import { SwiperTimeline } from "@/components/common/swiper";

export default function Home() {
  return (
    <main>
      <SwiperTimeline />
      <DescriptonSection />
      <Sample />
      <Insurances />
      <Map />
    </main>
  );
}
