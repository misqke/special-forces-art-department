import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/portfolio.module.scss";

const portfolio = () => {
  const images = [
    "bookking.jpg",
    "bookwillie.jpg",
    "brohaus.jpg",
    "illcemetary.jpg",
    "illskull.jpg",
    "logobadbunny.jpg",
    "logogotgame.jpg",
    "logokey.jpg",
    "logopink.jpg",
    "logotwisted.jpg",
    "logoworld.jpg",
    "packagetana.jpg",
    "pageskill.jpg",
    "signsmoothies.jpg",
    "webbrain.jpg",
  ];

  useEffect(() => {
    const imgs = document.querySelectorAll(`#portfolio_wrapper > div`);
    console.log(imgs);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            `${styles.visible}`,
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.35 }
    );

    imgs.forEach((img) => {
      observer.observe(img);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.wrapper} id="portfolio_wrapper">
        {images.map((img, i) => (
          <div className={`${styles.img_container}`} key={i}>
            <Image
              src={`/${img}`}
              width={400}
              height={400}
              alt={img.slice(0, img.length - 4)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
