import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        ></Image>
        <Image
          src="/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        ></Image>
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24}></Image>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}></Image>
      </div>
      <div className={styles.logo}>Parth's Blog</div>
      <div className={styles.links}>
        <ThemeToggle></ThemeToggle>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks></AuthLinks>
      </div>
    </div>
  );
};

export default Navbar;
