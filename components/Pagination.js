import styles from "../styles/index.module.css";
import cx from "classnames";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectLastPage } from "../features/cardsSlice";

export default function Pagination({ pageQuery }) {
  const router = useRouter();
  const lastPage = useSelector(selectLastPage);

  const handleClick = (query) => {
    if (query === 1 || query === "start") {
      router.push("/");
      return;
    }

    if (!isNaN(query)) {
      router.push({
        pathname: "/[pageId]",
        query: { pageId: query },
      });
      return;
    }

    router.push({
      pathname: "/[pageId]",
      query: { pageId: lastPage },
    });
    return;
  };

  return (
    <>
      <div className={styles.pagination_container}>
        {pageQuery !== 1 && (
          <>
            <span
              className={styles.pagination_button}
              onClick={() => handleClick("start")}
            >
              {"<<"}
            </span>
            <span
              className={styles.pagination_button}
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
              className={styles.pagination_button}
              onClick={() => handleClick(pageQuery + 1)}
            >
              {">"}
            </span>
            <span
              className={styles.pagination_button}
              onClick={() => handleClick("end")}
            >
              {">>"}
            </span>
          </>
        )}
      </div>
    </>
  );
}
