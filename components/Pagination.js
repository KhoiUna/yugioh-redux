import styles from "../styles/index.module.css";
import cx from "classnames";
import { useRouter } from "next/router";

export default function Pagination({ pageQuery }) {
  const router = useRouter();

  const handleClick = (type, pageNum) => {
    let query;
    if (type === "pageNum") {
      query = { pageId: pageNum };
      if (pageNum === 1) {
        router.push("/");
        return;
      }
    }

    router.push({
      pathname: "/[pageId]",
      query: query,
    });
    return;
  };

  return (
    <>
      <div className={styles.pagination_container}>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("start")}
        >
          {"<<"}
        </span>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("previous")}
        >
          {"<"}
        </span>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("pageNum", pageQuery - 1)}
        >
          {pageQuery !== 1 && pageQuery - 1}
        </span>
        <span
          className={cx(styles.pagination_button, styles.pagination_main)}
          onClick={() => handleClick("pageNum", pageQuery)}
        >
          {pageQuery}
        </span>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("pageNum", pageQuery + 1)}
        >
          {pageQuery + 1}
        </span>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("forward")}
        >
          {">"}
        </span>
        <span
          className={styles.pagination_button}
          onClick={() => handleClick("end")}
        >
          {">>"}
        </span>
      </div>
    </>
  );
}
