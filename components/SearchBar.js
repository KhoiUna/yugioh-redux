import { useDispatch } from "react-redux";
import { searchCardsAsync } from "../features/cardsSlice";
import styles from "../styles/index.module.css";

export default function SearchBar({ resetPageLimit }) {
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    resetPageLimit();
    return dispatch(searchCardsAsync(target.value));
  };

  return (
    <div style={{ margin: "3% 4%" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="card" hidden>
          Card:
        </label>
        <input
          id="card"
          type="search"
          className={styles.search_bar}
          placeholder="Search your card here"
          onChange={handleChange}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
