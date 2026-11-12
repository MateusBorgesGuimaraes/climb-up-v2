import type { CSSProperties } from "react";
import { ArrowUpRightIcon, MapPinnedIcon } from "lucide-react";
import styles from "./Card.module.css";

type Difficulty = 1 | 2 | 3 | 4 | 5;

export type CardInfos = {
  image: string;
  title: string;
  location: string;
  difficulty: Difficulty;
};

const DIFFICULTY: Record<Difficulty, { label: string; color: string }> = {
  1: { label: "Muito fácil", color: "#22C55E" },
  2: { label: "Fácil", color: "#84CC16" },
  3: { label: "Moderada", color: "#EAB308" },
  4: { label: "Difícil", color: "#F97316" },
  5: { label: "Muito difícil", color: "#EF4444" },
};

export const Card = ({ image, title, location, difficulty }: CardInfos) => {
  const { label, color } = DIFFICULTY[difficulty];

  return (
    <article
      className={styles.card}
      style={{ "--image": `url(${image})` } as CSSProperties}
    >
      <div className={styles.glass}>
        <div className={styles.info}>
          <h3 className={styles.cardTitle}>{title}</h3>

          <div className={styles.meta}>
            <div className={styles.location}>
              <MapPinnedIcon
                size={18}
                color="var(--accent-light)"
                aria-hidden="true"
              />
              <p>{location}</p>
            </div>

            <div
              className={styles.difficulty}
              role="img"
              aria-label={`Dificuldade: ${label}, ${difficulty} de 5`}
            >
              <div className={styles.bars} aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor:
                        index < difficulty ? color : "rgb(255 255 255 / 0.25)",
                    }}
                  />
                ))}
              </div>
              <span className={styles.label}>{label}</span>
            </div>
          </div>
        </div>

        <button className={styles.button} aria-label={`Ver ${title}`}>
          <ArrowUpRightIcon size={22} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
