import styles from "./Search.module.scss";
import search from "../../assets/images/icons/search.svg";
import close from "../../assets/images/icons/close.svg";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.search}>
      <label>
        <img className={styles.search_icon} src={search} alt="" />
        <input
          value={searchValue}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </label>
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.close}
          src={close}
          alt=""
        />
      )}
    </div>
  );
};

export default Search;
