import styles from "../styles/index.module.css";
import cx from "classnames";
import { useSelector } from "react-redux";
import { selectLastPage } from "../features/cardsSlice";

export default function Pagination({ pageQuery, handleClick }) {
  const lastPage = useSelector(selectLastPage);

  return (
    <>
      <div className={styles.pagination_container}>
        {pageQuery !== 1 && (
          <>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClick("start")}
            >
              {"<<"}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClick(pageQuery - 1)}
            >
              {"<"}
            </span>
          </>
        )}
        <span
          className={styles.pagination_button}
          onClick={() => handleClick(pageQuery - 1)}
        >
          {pageQuery !== 1 && pageQuery - 1}
        </span>
        <span
          className={cx(styles.pagination_button, styles.pagination_main)}
          onClick={() => handleClick(pageQuery)}
        >
          {pageQuery}
        </span>
        {pageQuery + 1 <= lastPage && (
          <>
            <span
              className={styles.pagination_button}
              onClick={() => handleClick(pageQuery + 1)}
            >
              {pageQuery + 1}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClick(pageQuery + 1)}
            >
              {">"}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClick(lastPage)}
            >
              {">>"}
            </span>
          </>
        )}
      </div>
    </>
  );
}
