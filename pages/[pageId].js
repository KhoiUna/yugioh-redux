import { useEffect, useState, Fragment } from "react";
import Cards from "../utils/Cards";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Layout from "../containers/layout";
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";

export default function Index() {
  const [cardsArray, setCardsArray] = useState(null);
  const router = useRouter();
  const pageId = router.query.pageId;
  useEffect(() => {
    Cards.fetchCards(pageId).then((res) => setCardsArray(res));
  }, [pageId]);

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

      <Pagination pageQuery={Number(pageId)} />
    </Layout>
  );
}
