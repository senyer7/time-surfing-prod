import React from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <header
      className={`${styles.header} ${styles.decoratedZone} ${styles.frame}`}
    >
      <nav className={styles.headerThemeMenu}>
        <ul className={styles.headerThemeMenuList}>
          <li className={styles.headerThemeMenuItem}>
            <button
              className={`${styles.headerThemeMenuButton} ${
                styles.headerThemeMenuButtonTypeLight
              } ${theme === "light" ? styles.headerThemeMenuButtonActive : ""}`}
              onClick={() => handleThemeChange("light")}
              disabled={theme === "light"}
            >
              день
            </button>
          </li>
          <li className={styles.headerThemeMenuItem}>
            <button
              className={`${styles.headerThemeMenuButton} ${
                styles.headerThemeMenuButtonTypeAuto
              } ${theme === "auto" ? styles.headerThemeMenuButtonActive : ""}`}
              onClick={() => handleThemeChange("auto")}
              disabled={theme === "auto"}
            >
              авто
            </button>
          </li>
          <li className={styles.headerThemeMenuItem}>
            <button
              className={`${styles.headerThemeMenuButton} ${
                styles.headerThemeMenuButtonTypeDark
              } ${theme === "dark" ? styles.headerThemeMenuButtonActive : ""}`}
              onClick={() => handleThemeChange("dark")}
              disabled={theme === "dark"}
            >
              неон
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.decorativeElement} aria-hidden="true">
        rec
      </div>

      <h1 className={styles.headerTitle}>time surfing</h1>

      <p className={`${styles.titleDecor} ${styles.headerText}`}>
        Что делать, когда не можешь делать ничего
        <br />
        Или почему нам так сложно сконцентрироваться, особенно когда очень надо
      </p>
    </header>
  );
};

export default Header;
