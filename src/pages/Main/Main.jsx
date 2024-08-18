import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  Categories,
  NewsBanner,
  NewsList,
  Pagination,
  Search,
  Skeleton,
} from "../../components/";
import { getCategories, getNews } from "../../api/apiNews.js";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keywords, setKeywords] = useState("");

  const debouncedKeywords = useDebounce(keywords, 1500);

  const totalPages = 10;
  const pageSize = 10;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNumPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      alert(`Error on fetching(useEffect): ${error}`);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        totalPages={totalPages}
        curentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleNumPage={handleNumPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}

      <Pagination
        totalPages={totalPages}
        curentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleNumPage={handleNumPage}
      />
    </main>
  );
};
