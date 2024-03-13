import Image from "next/image";
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";
import UserCard from "../components/shared/UserCard"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative">
        <div className="absolute top-0 right-0 m-4 max-w-xs">
        {session ? (
          <UserCard user={session?.user} pagetype={"Home"}/>
        ): (
          <h1 className="text-5xl text-center">Wrong User</h1>
        )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
