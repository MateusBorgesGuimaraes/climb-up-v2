import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import styles from "./Header.module.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav aria-label="Navegação principal">
          <img src={assets.logo} alt="Climb Up" />

          <ul>
            <li>
              <a href="#montanhas">montanhas</a>
            </li>
            <li>
              <a href="#dicas">dicas</a>
            </li>
            <li>
              <a href="#galeria">galeria</a>
            </li>
            <li>
              <a href="#contato" className={styles.cta}>
                contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
