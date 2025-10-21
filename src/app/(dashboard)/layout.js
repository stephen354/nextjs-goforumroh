// app/dashboard/layout.jsx
"use client";

import Sidebar from "@/components/dashboard/layout/Sidebar";
import Header from "@/components/dashboard/layout/Header";
import styles from "@/styles/components/dashboard/dashboardLayout.module.scss";


import { useState } from "react";
import { useAuthGuard } from "@/utils/withAuth";


export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAllowed = useAuthGuard();
 
  if (!isAllowed) return null;
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Right Section */}
      <div className={styles.rightSection}>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
