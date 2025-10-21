'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter()
  router.push("/login");
  return (
    <Header/>
  );
}
