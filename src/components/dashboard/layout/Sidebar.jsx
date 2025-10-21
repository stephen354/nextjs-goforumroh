"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/components/dashboard/Sidebar/_sidebar.module.scss";
import Image from "next/image";
 import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar({ isOpen,setOpen, onClose }) {
  const sidebarRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  const menuItems = [
    { label: "Dashboard", icon: "layout.svg", url: "/dashboard" },
    { label: "Rates & Availability", icon: "Calendar.svg", url: "/rates" },
    { label: "Reservation", icon: "reservation.svg", url: "/reservation" },
    { label: "Room", icon: "bed.svg", url: "/room" },
    { label: "Guest review", icon: "star.svg", url: "/review" },
    { label: "Setting", icon: "setting.svg", url: "/setting" },
  ];

  const pathname = usePathname();
  return (
    <aside
      className={`${styles.sidebar} ${
        isOpen ? styles.open : ""
      }`}
    >
      {/* Close button (mobile) */}
      <div className={styles.mobileClose} onClick={onClose}>
        <Image src={"/icons/arrow down.svg"} width={30} height={30} alt=""/>
      </div>

      {/* Logo / Brand */}
      <div className={styles.logo}><Image src={"/logo-dashboard.png"} width={146} height={26} alt="logo"/></div>

      {/* Menu */}
      <nav className={styles.menu} ref={sidebarRef}>
        {menuItems.map((item) => {
           const isActive = pathname.startsWith(item.url);
          return(
          <Link
             href={item.url}
            key={item.label}
            className={`${styles.menuItem} ${
              isActive ? styles.active : ""
            }`}
          >
            <Image
              src={`/dashboard/Navigation/${isActive?"/active/":""}${item.icon}`}
              alt={item.label}
              width={20}
              height={20}
            />
            <span>{item.label}</span>
          </Link>)
})}
      </nav>
    </aside>
  );
}
