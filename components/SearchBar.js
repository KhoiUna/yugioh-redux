import styles from "../styles/index.module.css";

export default function SearchBar({ resetPageLimit, setSearching }) {
  const handleChange = ({ target }) => {
    setSearching(target.value);
    resetPageLimit();
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
