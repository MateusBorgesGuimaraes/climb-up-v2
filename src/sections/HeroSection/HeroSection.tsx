import { LocateFixedIcon } from "lucide-react";
import { useParallax } from "../../hooks/useParallax";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const bgRef = useParallax<HTMLDivElement>(0.3);

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.subtitle}>
            <LocateFixedIcon size={32} color="var(--accent)" />
            <span>Escalada para todos os níveis</span>
          </div>

          <h1>
            Sua próxima via <span className={styles.outline}>começa aqui</span>
          </h1>

          <p>
            De quem está começando a profissionais experientes: uma estrutura
            completa para você subir um pouco mais a cada dia.
          </p>

          <div className={styles.actions}>
            <a href="#montanhas" className={`${styles.btn} ${styles.primary}`}>
              Comece a escalar
              <span className={styles.arrow} aria-hidden="true">
                ↑
              </span>
            </a>
            <a href="#dicas" className={`${styles.btn} ${styles.secondary}`}>
              Ver dicas
            </a>
          </div>

          <div className={styles.footer}>
            <ul className={styles.stats}>
              <li>
                <strong>+50</strong>
                <span>vias</span>
              </li>
              <li>
                <strong>3</strong>
                <span>níveis</span>
              </li>
              <li>
                <strong>2015</strong>
                <span>desde</span>
              </li>
            </ul>

            <a
              href="#montanhas"
              className={styles.scroll}
              aria-label="Rolar para baixo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
