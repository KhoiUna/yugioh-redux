import { useEffect, useState, Fragment } from "react";
import Cards from "../utils/Cards";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Layout from "../containers/layout";

export default function Home() {
  const [cardsArray, setCardsArray] = useState(null);
  const index = 0;
  useEffect(() => {
    Cards.fetchCards(index).then((res) => setCardsArray(res));
  }, [index]);

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
          cardsArray.map((info, index) => (
            <Fragment key={index}>
              <Card
                imageURL={info.card_images[0].image_url}
                cardName={info.name}
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

      <div className={styles.pagination}>1 2 3...</div>
    </Layout>
  );
}
