import { LocateFixedIcon } from "lucide-react";

import { useInView } from "../../hooks/useInView";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  tone = "light",
}: SectionTitleProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${styles[align]} ${styles[tone]} ${
        inView ? styles.visible : ""
      }`}
    >
      {eyebrow && (
        <div className={styles.eyebrow}>
          <LocateFixedIcon size={18} color="var(--accent)" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2>
        {title}
        {highlight && (
          <>
            {" "}
            <span className={styles.highlight}>{highlight}</span>
          </>
        )}
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
};
