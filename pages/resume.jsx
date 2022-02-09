import React from "react";
import styles from "../styles/resume.module.scss";
import Image from "next/image";

const resume = () => {
  return (
    <div className={styles.container}>
      <Image src={"/resume.jpg"} width={613} height={793} alt="resume" />
    </div>
  );
};

export default resume;
