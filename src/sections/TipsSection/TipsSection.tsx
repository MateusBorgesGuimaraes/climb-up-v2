import { PlusIcon } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TIPS } from "../../utils";
import styles from "./TipsSection.module.css";

export const TipsSection = () => {
  return (
    <section className={styles.tipBg}>
      <div className={`container ${styles.tipsSection}`}>
        <SectionTitle
          title="Dicas para"
          highlight="iniciantes"
          eyebrow="Aprenda com profissionais"
          description="Essenciais para você saber no começo."
        />

        <div className={styles.tips}>
          {TIPS.map((tip, i) => (
            <details key={i}>
              <summary>
                <span className={styles.question}>{tip.title}</span>
                <span className={styles.icon}>
                  <PlusIcon size={20} aria-hidden="true" />
                </span>
              </summary>
              <div className={styles.tipContent}>{tip.content}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
