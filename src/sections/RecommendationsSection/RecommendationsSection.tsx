import { CARDS_DATA } from "../../utils";
import { Card } from "../../components/Card/Card";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import styles from "./RecommendationsSection.module.css";

export const RecommendationsSection = () => {
  return (
    <section className={`container ${styles.recommendations}`}>
      <SectionTitle
        eyebrow="Escolhas da equipe"
        title="Nossas"
        highlight="recomendações"
        description="Vias que nós fortemente indicamos."
      />

      <div className={styles.cardsContainer}>
        {CARDS_DATA.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};
