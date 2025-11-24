import React from "react";
import styles from "./styles/Gallery.module.css";

const Gallery = () => {
  const images = [
    { src: "/images/sunset.png", alt: "горы" },
    { src: "/images/ice-cream.png", alt: "мороженое" },
    { src: "/images/tape.png", alt: "кассета" },
    { src: "/images/books.png", alt: "книги" },
    { src: "/images/street.png", alt: "улица" },
  ];

  return (
    <section className={styles.questionSectionImage}>
      <h2
        className={`${styles.titleDecor} ${styles.questionSectionTitleImage}`}
      >
        А можно в картинках?
      </h2>

      <div className={styles.questionSectionImageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            className={styles.questionSectionImageItem}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
