import { useRef, useState, type CSSProperties } from "react";
import { MapPinIcon, Maximize2Icon, XIcon } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useInView } from "../../hooks/useInView";
import { GALLERY_DATA, type Photo } from "../../utils";
import styles from "./GallerySection.module.css";

export const GallerySection = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Photo | null>(null);

  const openPhoto = (photo: Photo) => {
    setActive(photo);
    dialogRef.current?.showModal();
  };

  const closePhoto = () => dialogRef.current?.close();

  return (
    <section className={styles.gallery}>
      <div className="container">
        <SectionTitle
          eyebrow="Galeria"
          title="Montanhas que"
          highlight="inspiram"
          description="Registros de quem já passou por aqui."
          tone="dark"
        />

        <div
          ref={ref}
          className={`${styles.grid} ${inView ? styles.visible : ""}`}
        >
          {GALLERY_DATA.map((photo, i) => (
            <button
              key={photo.title}
              type="button"
              className={styles.item}
              style={{ "--i": i } as CSSProperties}
              onClick={() => openPhoto(photo)}
              aria-label={`Ampliar ${photo.title}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />

              <span className={styles.caption}>
                <span className={styles.captionText}>
                  <span className={styles.title}>{photo.title}</span>
                  <span className={styles.location}>
                    <MapPinIcon size={14} aria-hidden="true" />
                    {photo.location}
                  </span>
                </span>
                <Maximize2Icon size={18} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={active?.title ?? "Foto ampliada"}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closePhoto(); // clique no fundo
        }}
      >
        {active && (
          <figure>
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.location}</span>
            </figcaption>
          </figure>
        )}

        <button
          type="button"
          className={styles.close}
          onClick={closePhoto}
          aria-label="Fechar"
        >
          <XIcon size={20} aria-hidden="true" />
        </button>
      </dialog>
    </section>
  );
};
