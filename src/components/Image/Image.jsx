import styles from "./styles.module.css";

export const Image = ({image}) => {
    return (
        <div className={styles.wrapper}>
            {image ?
                <img src={image} alt="Ups, no image" className={styles.image}/>
                : null}
        </div>
    )
}

