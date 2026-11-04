import styles from "./home-finishes.module.css";

type Props = {
  finish: "purple" | "steel" | "yellow" | "cream";
  className?: string;
};

/** Decorative finish studies, not photographs of completed projects. */
export function MaterialSample({ finish, className = "" }: Props) {
  return (
    <div aria-hidden="true" className={`${styles.material} ${styles[finish]} ${className}`}>
      <span className={styles.materialTexture} />
    </div>
  );
}
