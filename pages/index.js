import { Fragment } from "react";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Layout from "../containers/layout";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import { selectCards } from "../features/cardsSlice";

export default function Home() {
  const cardsArray = useSelector(selectCards);

  return (
    <Layout page="home">
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

      <div className={styles.flex_container}>
        {cardsArray &&
          cardsArray.slice(0, 20).map((info, index) => (
            <Fragment key={index}>
              <Card
                cardId={info.id}
                imageURL={info.cardImage}
                cardName={info.cardName}
              />
            </Fragment>
          ))}
        {!cardsArray && (
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
      </div>

      <Pagination pageQuery={1} />
    </Layout>
  );
}
