import {formatDate} from "../../helpers/formatDate.js";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.centers}>
                <h1 className={styles.title}>MAP News </h1>
                <p className={styles.date}>{formatDate(new Date())}</p>
            </div>
        </header>
    )
}
