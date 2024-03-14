import Image from "next/image";
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";
import UserCard from "../components/shared/UserCard"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth";
import Char from "./characters/page"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative pt-24">

          <Char/>

      </main>
      <Footer />
    </div>
  );
}