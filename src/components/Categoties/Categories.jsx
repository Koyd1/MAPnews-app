import styles from "./styles.module.css";

export const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => {
                return <button key={category}
                               onClick={() => setSelectedCategory(category)}
                               className={selectedCategory === category ? styles.active : styles.item}>
                    {category}
                </button>
            })}
        </div>
    )
}
