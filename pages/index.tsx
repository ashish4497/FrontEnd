import Carousel from "@/src/components/Carousel ";
import NavBar from "@/src/components/Header";
import MarqueSlider from "@/src/components/Marque";
import TiktokBar from "@/src/components/TikTokBar";
import Marquee from "react-fast-marquee";




export default function Page() {
  return (
    <>
    <TiktokBar/>
    <NavBar/>
    <Carousel/>
    <Marquee>
    <MarqueSlider/>
    </Marquee>
    </>
  )
}