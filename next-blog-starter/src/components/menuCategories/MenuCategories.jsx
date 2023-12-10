import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
    </div>
  );
};

export default MenuCategories;
