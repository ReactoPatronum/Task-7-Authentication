import { Inter } from "next/font/google";
import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const cookie = document.cookie.split("=")[0];
    if (cookie === "token") {
      router.push("/home");
    }
  }, []);
  return (
    <main className="flex items-center justify-center h-screen bg-slate-500">
      <AuthForm />
    </main>
  );
}
