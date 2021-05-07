import { useSelector } from "react-redux";
import Layout from "../containers/layout";
import { selectDeck, selectDeckNum } from "../features/cardsSlice";
import { Fragment } from "react";
import Card from "../components/Card";
import styles from "../styles/index.module.css";

export default function Deck() {
  const deckArray = useSelector(selectDeck);
  const deckNum = useSelector(selectDeckNum);

  return (
    <Layout page="deck">
      <div className={styles.total_card}>
        <h3>
          <span
            style={{ textDecoration: "3px underline", marginRight: "0.8rem" }}
          >
            Total Cards:
          </span>
          {deckNum}
        </h3>
      </div>
      <div className={styles.flex_container}>
        {deckArray.map((info, index) => (
          <Fragment key={index}>
            <Card
              cardId={info.id}
              imageURL={info.cardImage}
              cardName={info.cardName}
              added={info.added}
            />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
}
