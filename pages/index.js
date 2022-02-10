import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <p>
              Welcome - My name is Todd Siatkowsky, Graphic Designer & Owner of
              Special Forces Art Department. I&apos;m here to be your personal
              Designer when you need designs that blow away your competition.
              This is a <span>risk free</span> place to order graphic design
              services because you{" "}
              <span>don&apos;t pay until you love your finished design</span>.
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
        <p className={styles.text}>
          Ready to get started on your next design project? If you&apos;re ready
          to order, just send me an{" "}
          <a href="mailto: mail@SpecialForcesAD.com?subject=Quote Request">
            email
          </a>{" "}
          describing (in as much or as little detail as you want) everything you
          can tell me about the project you need to have designed. You will
          always have direct contact with me through the entire design process
          and beyond. No middleman customer service rep. to hinder the creative
          process and no gigantic design firm prices. Best of all you pay only
          after you love your finished design!
        </p>
      </div>
    </div>
  );
}
