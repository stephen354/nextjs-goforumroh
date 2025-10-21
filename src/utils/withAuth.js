"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Kalau token tidak ada → redirect langsung
    if (!token) {
      router.replace("/login");
      return;
    }

    // Kalau token ada → izinkan render halaman
    setIsAllowed(true);
  }, [router]);

  return isAllowed;
}
