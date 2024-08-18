import styles from "./styles.module.css";

const NoneImage = () => {
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

export default NoneImage;
