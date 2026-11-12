import { ArrowUpRightIcon, SendIcon } from "lucide-react";
import { assets } from "../../assets/assets";

import styles from "./FooterSection.module.css";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { CONTACTS } from "../../utils";

export const Footer = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <SectionTitle
              eyebrow="Contato"
              title="Vamos"
              highlight="conversar"
              description="Tire dúvidas, agende uma aula experimental ou conte qual via você quer escalar."
              tone="dark"
            />

            <ul className={styles.contacts}>
              {CONTACTS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className={styles.contactLabel}>
                      <Icon size={14} aria-hidden="true" />
                      {label}
                    </span>
                    <span className={styles.contactValue}>{value}</span>
                    {href && (
                      <ArrowUpRightIcon
                        size={22}
                        className={styles.contactArrow}
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className={styles.contactRow}>
                        {content}
                      </a>
                    ) : (
                      <div className={styles.contactRow}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <form className={styles.form}>
            <h3 className={styles.formTitle}>Envie uma mensagem</h3>

            <div className={styles.field}>
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Seu nome"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="voce@email.com"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Como podemos ajudar?"
                minLength={10}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              Enviar mensagem
              <SendIcon size={18} aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className={styles.bottom}>
          <img src={assets.logo} alt="Climb Up" className={styles.logo} />

          <nav aria-label="Rodapé">
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
            </ul>
          </nav>

          <p>
            © {new Date().getFullYear()} Climb Up. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
