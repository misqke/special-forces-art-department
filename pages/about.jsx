import React from "react";
import Link from "next/link";
import styles from "../styles/terms.module.scss";

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT</h1>
      <p>
        Hi there! I'm Todd Siatkowsky, a Freelance Graphic Designer and
        Illustrator from Baden Pennsylvania. I have a Bachelor of Science Degree
        in Graphic Design and I have worked professionally as a Graphic Designer
        creating custom, made to order vector logos, brochures, shirts and much
        more for over 22 years. You can view or download my resume here.
      </p>
      <p>
        www.GraphicDesignerPA.com is my web site where you can order custom made
        designs created by a real and experienced Graphic Designer and feel good
        about it! This is a place to get the blood pumping through your design
        projects again with clean, crisp and powerful artwork and concepts
        created by a real Graphic Designer. I approach every project with a
        logical and efficient plan designed to produce big results you can
        easily see. This is not a place to get wimpy, standard issue graphic
        design that will leave you blending in with the rest of the world. This
        is a place to call out the big guns... the dogs of war... the SPECIAL
        FORCES (Art Department).
      </p>
      <p>
        Ready to order a custom made vector logo, graphic t-shirt or any other
        visual design you can think of? Just{" "}
        <span className={styles.link}>
          <a href="mailto: mail@SpecialForcesAD.com?subject=Quote Request">
            REQUEST A QUOTE
          </a>
        </span>{" "}
        describing (in as much detail as you want) everything you can tell me
        about your creative project needs. You will have direct contact with me,
        the Graphic Designer who will be creating your design. There is no
        middleman customer service representative to hinder the creative
        process. No gigantic design firm overhead fees because you are just
        paying for the design work. Best of all you pay only after you love your
        finished design!
      </p>
      <p>
        In addition to requesting a quote for having a custom design made, you
        can use this site to view my design and illustration{" "}
        <span className={styles.link}>
          <Link href={"/portfolio"}>portfolio</Link>
        </span>{" "}
        and learn more about{" "}
        <span className={styles.link}>
          <Link href={"/aboutgd"}>graphic design</Link>
        </span>{" "}
        or{" "}
        <span className={styles.link}>
          <Link href={"/why"}>why you should use a graphic disgner</Link>
        </span>
        .
      </p>
    </div>
  );
};

export default about;
