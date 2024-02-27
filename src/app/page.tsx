import Image from "next/image";
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

      </main>
      <Footer />
    </div>
  );
}
