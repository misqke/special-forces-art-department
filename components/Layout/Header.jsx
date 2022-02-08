import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner_container}>
          <Link href={"/"}>Special Forces Art Department</Link>
        </div>
        {router.asPath !== "/" && (
          <div className={styles.logo}>
            <Image src={"/logo.png"} width={313} height={296} />
          </div>
        )}
        <div className={styles.nav}>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/services"}>About</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
