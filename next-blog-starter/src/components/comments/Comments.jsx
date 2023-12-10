import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={50}
              width={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            dignissimos natus nisi aspernatur tempore at possimus velit! Qui,
            labore. Ab officiis possimus sequi corporis nemo labore beatae sint!
            Fugit, voluptatem!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
