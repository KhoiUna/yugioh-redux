import styles from "../styles/index.module.css";
import cx from "classnames";
import { useSelector } from "react-redux";
import { selectLastPage } from "../features/cardsSlice";

export default function Pagination({ pageQuery, handleClickPagination }) {
  const lastPage = useSelector(selectLastPage);

  return (
    <>
      <div className={styles.pagination_container}>
        {pageQuery !== 1 && (
          <>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClickPagination(1)}
            >
              {"<<"}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClickPagination(pageQuery - 1)}
            >
              {"<"}
            </span>
          </>
        )}
        <span
          className={styles.pagination_button}
          onClick={() => handleClickPagination(pageQuery - 1)}
        >
          {pageQuery !== 1 && pageQuery - 1}
        </span>
        <span
          className={cx(styles.pagination_button, styles.pagination_main)}
          onClick={() => handleClickPagination(pageQuery)}
        >
          {pageQuery}
        </span>
        {pageQuery + 1 <= lastPage && (
          <>
            <span
              className={styles.pagination_button}
              onClick={() => handleClickPagination(pageQuery + 1)}
            >
              {pageQuery + 1}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClickPagination(pageQuery + 1)}
            >
              {">"}
            </span>
            <span
              className={styles.pagination_arrow}
              onClick={() => handleClickPagination(lastPage)}
            >
              {">>"}
            </span>
          </>
        )}
      </div>
    </>
  );
}
