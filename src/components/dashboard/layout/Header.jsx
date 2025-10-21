"use client";

import Image from "next/image";
import styles from "@/styles/components/dashboard/Header/_header.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ onMenuClick }) {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSignOut = ()=>{
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <header ref={dropdownRef} className={styles.header}>
      {/* LEFT SECTION */}
      <div className={styles.left}>
        {/* Hamburger (mobile) */}
       
        <div className={styles.gapProperty}>
            <div className={styles.propertyInfo}>
                <button className={styles.menuButton} onClick={onMenuClick}>
                    <Image
                        src="/dashboard/Big Makkah.png"
                        alt="Menu"
                        width={48}
                        height={48}
                    />
                    </button>
                <div className={styles.propertyColumn}>
            <span className={styles.propertyName}>Big Makkah Hotel</span>
            <span className={styles.propertyCode}>#10292827</span>
                </div>
            </div>
            <a className={styles.link}>See your property</a>
        </div>
      
      </div>

      

      {/* RIGHT SECTION */}
      <div className={styles.right}>
        {/* MIDDLE SECTION (SEARCH) */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <Image src="/dashboard/Search.svg" alt="Search" width={20} height={20} className={styles.searchIcon} />
      </div>

        <div className={styles.icon}>
          <Image src="/dashboard/bell.svg" alt="Notifications" width={24} height={24} />
        </div>
        <button className={styles.user} onClick={() => setOpen(!open)}>
          <Image
            src="/dashboard/Avatar.svg"
            alt="User"
            width={32}
            height={32}
            className={styles.userAvatar}
          />
          <span className={styles.userName}>John Doe</span>
          <Image src="/icons/Arrow Down.svg" width={20} height={20} alt="icon"/> 
        </button>
         {open && (
        <div className={styles.menu}>
          <button>Profile</button>
          <button>Settings</button>
          <hr />
          <button className={styles.logout} onClick={onSignOut}>
            Sign out
          </button>
        </div>
      )}
      </div>
    </header>
  );
}
