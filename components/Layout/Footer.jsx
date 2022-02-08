import React from "react";
import styles from "../../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contact} id="contact">
          <h4>Contact info</h4>
          <p>Todd Siatkowsky - Owner, Graphic Designer</p>
          <p>
            <span>EMAIL:</span> mail@SpecialForcesAD.com
          </p>
          <p>
            <span>PHONE:</span> 412-499-2763
          </p>
          <p>
            <span>FAX:</span> 1-815-550-4755
          </p>
          <p>
            <span>MAIL:</span> 2760 Ridge Road Ext., Baden, PA 15005
          </p>
        </div>
        <div className={styles.links}>
          <h4>Links</h4>
          <Link href={"/terms"}>Terms of Service</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
          <Link href={"/why"}>Why use a graphic designer?</Link>
          <Link href={"/aboutgd"}>About graphic design</Link>
          <Link href={"/ordering"}>Ordering Services</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
