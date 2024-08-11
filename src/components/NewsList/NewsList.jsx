import styles from "./styles.module.css";
import {NewsItem} from "../NewsItem/NewsItem.jsx";

export const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                  return <NewsItem key={item.id} item={item}/>
                })}
        </ul>
    )
}

