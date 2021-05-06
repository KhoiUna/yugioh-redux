import { useSelector } from "react-redux";
import Layout from "../containers/layout";
import { selectDeck } from "../features/cardsSlice";
import { Fragment } from "react";
import Card from "../components/Card";
import styles from "../styles/index.module.css";

export default function Deck() {
  const deckArray = useSelector(selectDeck);

  return (
    <Layout page="deck">
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
