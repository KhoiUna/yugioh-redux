import { Fragment } from "react";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Layout from "../containers/layout";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import { selectCards } from "../features/cardsSlice";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const cardsArray = useSelector(selectCards);
  console.log(cardsArray);
  return (
    <Layout page="home">
      <SearchBar />

      <div className={styles.flex_container}>
        {cardsArray &&
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
        {cardsArray?.length === 0 && (
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

      <Pagination pageQuery={1} />
    </Layout>
  );
}
