import styles from "../styles/index.module.css";

export default function SearchBar({ resetPageLimit, setSearching }) {
  const handleChange = ({ target }) => {
    setSearching(target.value);
    resetPageLimit();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ margin: "3% 4%" }}>
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
  );
}
