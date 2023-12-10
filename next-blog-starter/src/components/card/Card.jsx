import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {new Date(item.createdAt).toLocaleDateString()}{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href="/"></Link>
        <h1>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Link href="/" className={styles.link}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default Card;
