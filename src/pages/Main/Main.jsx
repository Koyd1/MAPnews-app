import {useEffect, useState} from "react";
import styles from "./styles.module.css";
import {NewsBanner, NewsList} from "../../components/";
import {getNews} from "../../api/apiNews.js";

export const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news)
            } catch (error) {
                alert(`Error on fetching(useEfect): ${error}`);
            }
        }
        fetchNews();
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}

            <NewsList news={news} />
        </main>
    )
}
