import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Whats Hot?</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}></MenuPosts>
      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories></MenuCategories>
      <h2 className={styles.subtitle}>New?</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true}></MenuPosts>
    </div>
  );
};

export default Menu;
