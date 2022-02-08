import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={!open ? styles.wrapper : styles.open}>
        <div className={styles.inner_container}>
          <Link href={"/"}>
            <span className={styles.title}>Special Forces Art Department</span>
          </Link>
          <div
            className={styles.toggle_btn}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {router.asPath !== "/" && (
          <div className={styles.logo}>
            <Image src={"/logo.png"} width={313} height={296} />
          </div>
        )}
        <div className={styles.nav}>
          <Link href={"/services"}>Services</Link>
          <a href={"#contact"}>Contact</a>
          <Link href={"/about"}>About</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <a href="mailto: mail@SpecialForcesAD.com?subject=Quote Request">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
