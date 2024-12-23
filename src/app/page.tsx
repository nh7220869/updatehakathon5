import Featured from "@/components/featured";
import Hero from "@/components/hero";
import { CarouselSize } from "@/components/page1";
import GearUp from "@/components/page4";
import DontMiss from "@/components/page5";
import Essential from "@/components/page6";
import Navigation from "@/components/page7";



export default function Home() {
  return (
  <main>
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
    
    
  
  </main>
  )
}