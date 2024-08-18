import styles from "./styles.module.css";

export const NoneImage = () => {
  return (
    <div className={styles.wrappers}>
      <img
        src="../../assets/news-banner.jpg"
        alt="news"
        className={styles.image}
      />
    </div>
  );
};
