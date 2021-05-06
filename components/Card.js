import { useDispatch } from "react-redux";
import styles from "../styles/index.module.css";
import { addToDeck, removeFromDeck } from "../features/cardsSlice";

export default function Card({ cardId, imageURL, cardName, added }) {
  const dispatch = useDispatch();

  const handleClick = (cardId, added) => {
    if (added) {
      dispatch(removeFromDeck(cardId));
    } else {
      dispatch(addToDeck(cardId));
    }
    return;
  };

  return (
    <div className={styles.card_container}>
      <img src={imageURL} alt={cardName} className={styles.image} />
      <div
        className={added ? styles.remove : styles.add}
        onClick={() => handleClick(cardId, added)}
      >
        {!added && "Add to Deck +"}
        {added && "Remove from Deck"}
      </div>
    </div>
  );
}
