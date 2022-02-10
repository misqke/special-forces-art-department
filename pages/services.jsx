import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/services.module.scss";

const Services = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll("section");
    console.log(wrappers);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          `${styles.visible}`,
          entry.isIntersecting
        );
      });
    });

    wrappers.forEach((wrapper) => {
      observer.observe(wrapper);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SERVICES</h1>

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h3>LOGOS / IDENTITY SYSTEMS</h3>
          <p>
            Stand alone logos or full identity systems including items like
            business cards, letterheads, envelopes or anything your business may
            need.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/logobadbunny.jpg"}
            width={400}
            height={400}
            alt="logo"
          />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.img}>
          <Image
            src={"/pageskill.jpg"}
            width={400}
            height={400}
            alt="printed advertisement"
          />
        </div>
        <div className={styles.content}>
          <h3>PRINTED ADVERTISEMENTS</h3>
          <p>
            Page designs for items like flyers, magazine ads, inserts, direct
            mailers, product packaging or anything requiring a clean
            professional design for print.
          </p>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h3>BROCHURES / BOOKLETS / BOOKS</h3>
          <p>
            Capabilities brochures, product brochures, newsletters, menus,
            calenders, instructional booklets, manuals, programs, book covers,
            children&apos;s books or any project requiring unity among multiple
            pages or panels.
          </p>
        </div>
        <div className={styles.img}>
          <Image src={"/brohaus.jpg"} width={400} height={400} alt="book" />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.img}>
          <Image
            src={"/signsmoothies.jpg"}
            width={400}
            height={400}
            alt="sign"
          />
        </div>
        <div className={styles.content}>
          <h3>SIGNS / PRESENTATIONS</h3>
          <p>
            Company signs, instructional & safety signs, poster ads, billboards,
            point-of-sale displays, trade show presentations, Power Point
            presentations or anything that needs to pull attention clearly from
            a distance.
          </p>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h3>AD ILLUSTRATION</h3>
          <p>
            Product Illustration, concept pieces, collages, building & landscape
            drawings, portraits, figure drawing, anything to add firepower to
            your advertising.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/webbrain.jpg"}
            width={400}
            height={400}
            alt="illustration"
          />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.img}>
          <Image
            src={"/bookwillie.jpg"}
            width={400}
            height={400}
            alt="childrens book"
          />
        </div>
        <div className={styles.content}>
          <h3>CHILDREN&apos;S BOOKS</h3>
          <p>
            Illustrations only, illustrations and page decoration or complete
            book development including cover and page designs.
          </p>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h3>DIAGRAMS & GRAPHICS</h3>
          <p>
            Product diagrams, presentation graphics, infographs, instructional
            graphics, anything to providing clear visual aid to your project.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={"/packagetana.jpg"}
            width={400}
            height={400}
            alt="diagram"
          />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.img}>
          <Image
            src={"/illcemetary.jpg"}
            width={400}
            height={400}
            alt="artwork"
          />
        </div>
        <div className={styles.content}>
          <h3>CUSTOM ARTWORK</h3>
          <p>
            I am not limited to the services you see here. If your project is
            not included in the above list of services please send me your quote
            request anyway. I welcome the opportunity to take on any artistic
            challenge within my means.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
