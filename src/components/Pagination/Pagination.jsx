import styles from "./styles.module.css";

export const Pagination = ({totalPages, handleNumPage, handlePrevPage, curentPage, handleNextPage}) => {
    return (
        <div>
            <div className={styles.list}>
                <button onClick={handlePrevPage}
                        className={styles.arrow}
                        disabled={curentPage === 1}
                >{'<'}</button>

                {[...Array(totalPages)].map((_, index) => {
                    return <button onClick={() => handleNumPage(index+1)}
                                   key={index} className={styles.pageNumber}
                                   disabled={curentPage === index + 1}>
                        {index+1} </button>
                })}
                <button onClick={handleNextPage}
                        className={styles.arrow}
                        disabled={curentPage === totalPages}
                >{'>'}</button>
            </div>
        </div>
    )
}
