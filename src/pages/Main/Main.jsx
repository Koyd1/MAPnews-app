import {useEffect, useState} from "react";
import styles from "./styles.module.css";
import {NewsBanner, NewsList, Pagination, Skeleton} from "../../components/";
import {getNews} from "../../api/apiNews.js";

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 10;
    const pageSize = 10;
    const handleNextPage = () => {
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNumPage = (pageNumber) => {
            setCurrentPage(pageNumber)
    }

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize);
            setNews(response.news)
            setIsLoading(false)
        } catch (error) {
            alert(`Error on fetching(useEfect): ${error}`);
        }
    }

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]}/>) : (<Skeleton type={'banner'} count={1} />)}
            <Pagination totalPages={totalPages}
                        curentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        handleNumPage={handleNumPage}
            />
            {!isLoading ? (<NewsList news={news} />) : (<Skeleton type={'item'} count={10} />)}
            <Pagination totalPages={totalPages}
                        curentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        handleNumPage={handleNumPage}
            />
        </main>
    )
}
