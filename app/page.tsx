import Hero from '@/components/sections/Hero';
import Agenda from '@/components/sections/Agenda';
import Slider from '@/components/sections/Slider';
import Speakers from '@/components/sections/Speakers';
import Footer from '@/components/sections/Footer';
import FAQ from "@/components/sections/FAQ";
import Navbar from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen relative justify-center items-center">
      <div className=' sticky z-50 flex justify-center items-center '>
      <Navbar/>
      </div>
      <Hero />
        <Speakers />
        <Agenda />
        <Slider />
        <FAQ />
      <Footer />
    </main>
  );
}