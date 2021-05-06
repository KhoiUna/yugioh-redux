import styles from "../styles/index.module.css";
import cx from "classnames";

export default function Pagination({ pageQuery }) {
  return (
    <>
      <div className={styles.pagination_container}>
        <span className={styles.pagination_button}>{"<<"}</span>
        <span className={styles.pagination_button}>{"<"}</span>
        <span className={styles.pagination_button}>
          {pageQuery !== 1 && pageQuery}
        </span>
        <span className={cx(styles.pagination_button, styles.pagination_main)}>
          {pageQuery}
        </span>
        <span className={styles.pagination_button}>{pageQuery + 1}</span>
        <span className={styles.pagination_button}>{">"}</span>
        <span className={styles.pagination_button}>{">>"}</span>
      </div>
    </>
  );
}
