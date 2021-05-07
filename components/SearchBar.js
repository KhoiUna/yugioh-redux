import styles from "../styles/index.module.css";

export default function SearchBar() {
  return (
    <div style={{ margin: "3% 4%" }}>
      <form>
        <label htmlFor="card" hidden>
          Card:
        </label>
        <input
          id="card"
          type="search"
          className={styles.search_bar}
          placeholder="Search your card here"
        />
      </form>
    </div>
  );
}
