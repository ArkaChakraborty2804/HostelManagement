import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Image 
        src="/images/hostelj.jpeg" 
        alt="Hostel Image"
        width={1200}
        height={900}
      />
      <Footer/>
    </div>
  );
}
