'use client'

import styles from '@/styles/components/_header.module.scss'
import Image from 'next/image'
import { useState,useRef, useEffect } from 'react';
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

      useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

    return (
        <section className={styles.header} ref={menuRef}>
            <div className={styles.logo}>
             <Image src={"/logo.png"} alt='logo' width={144} height={19} priority/>
            </div>
             <button className={styles.hamburger} onClick={toggleMenu}>
             ⋮
            </button>
            <div className={`${styles.right} ${isOpen ? styles['right-show'] : ""}`}>
                <div className={styles.language}>
                    <Image src={"/icons/Globe.svg"} alt='icon-globe' width={24} height={24}/>
                    En
                </div>
                  <div className={styles.divider} />
                <button className={styles.button}>Help</button>
            </div>
        </section>
    )
}