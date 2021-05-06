import styles from "../styles/index.module.css";

export default function Pagination({ pageQuery }) {
  return (
    <>
      <div className={styles.pagination}>{"<< < 1 2 3... > >>"}</div>
    </>
  );
}
