import React from "react";
import styles from "../styles/Blogs.module.css";
import Image from "next/image";

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={"/assets/images/blogs/sassfarfromdead.jpg"} />
        </div>
        <section className={styles.border} />
        <div>
          <p className={styles.header}>
            <span className={styles.title}>Sass is far from dead</span>
            <small className={styles.date}>Sept 6, 2017</small>
          </p>
          <p className={styles.content}>
            I’ve seen many advanced React users make a claim against the
            preprocessor that state that styled components are the next big
            thing for styling your sheets.
          </p>
        </div>
      </div>
    </div>
  );
}