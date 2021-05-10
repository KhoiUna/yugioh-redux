import { Fragment, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Layout from "../containers/layout";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingCards,
  loadCardsAsync,
  searchCardsAsync,
  selectCards,
} from "../features/cardsSlice";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const cardsArray = useSelector(selectCards);
  const isLoading = useSelector(isLoadingCards);
  const dispatch = useDispatch();

  const [pageLimit, setPageLimit] = useState(1);
  const [searching, setSearching] = useState("");
  useEffect(() => {
    let load;
    if (!searching) {
      load = setTimeout(() => {
        dispatch(loadCardsAsync(pageLimit));
      });
    } else {
      load = setTimeout(() => {
        dispatch(searchCardsAsync({ cardName: searching, limit: pageLimit }));
      });
    }

    return () => {
      clearTimeout(load);
    };
  }, [searching, pageLimit]);

  const handleClickPagination = (query) => setPageLimit(query);

  const resetPageLimit = () => setPageLimit(1);

  return (
    <Layout page="home">
      <SearchBar
        resetPageLimit={resetPageLimit}
        setSearching={(string) => setSearching(string)}
      />

      <div className={styles.flex_container}>
        {!isLoading &&
          cardsArray &&
          cardsArray.slice(0, 20).map((info, index) => (
            <Fragment key={index}>
              <Card
                cardId={info.id}
                imageURL={info.cardImage}
                cardName={info.cardName}
                added={info.added}
              />
            </Fragment>
          ))}
        {isLoading && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              margin: "5%",
              fontStyle: "italic",
            }}
          >
            Loading...
          </p>
        )}
        {cardsArray === undefined && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              margin: "5%",
              fontStyle: "italic",
              color: "red",
            }}
          >
            No cards with that name
          </p>
        )}
      </div>

      <Pagination
        pageQuery={pageLimit}
        handleClickPagination={handleClickPagination}
      />
    </Layout>
  );
}
