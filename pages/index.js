import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>
            Welcome - My name is Todd Siatkowsky, Graphic Designer & Owner of
            Special Forces Art Department. I'm here to be your personal Designer
            when you need designs that blow away your competition. This is a{" "}
            <span>risk free</span> place to order graphic design services
            because you{" "}
            <span>don't pay until you love your finished design</span>.
          </p>
        </div>
        <div className={styles.content}>
          <Image src={"/logo.png"} width={313} height={296} alt="logo" />
          <button className={styles.quote_btn} type="button">
            <a href="mailto: mail@SpecialForcesAD.com?subject=Quote Request">
              Request a Quote
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
