import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const page = () => {
  return (
    <article className={styles.titleForm}>
      <div>
        <div className={styles.title}>The Color Game</div>
        <div className={styles.subtitle}>틀린 색상 찾기</div>
      </div>
      <Link style={{ width: "100%" }} href={"/game"}>
        <button className={`${styles.button} ${styles.startBtn}`}>
          게임 시작
        </button>
      </Link>
      <Link style={{ width: "100%" }} href={"/rank"}>
        <button className={`${styles.button} ${styles.rankingBtn}`}>
          랭킹 보기
        </button>
      </Link>
    </article>
  );
};

export default page;
