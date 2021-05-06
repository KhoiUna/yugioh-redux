import { useDispatch } from "react-redux";
import styles from "../styles/index.module.css";
import { addToDeck, removeFromDeck } from "../features/cardsSlice";

export default function Card({ cardId, imageURL, cardName, added }) {
  const dispatch = useDispatch();

  const handleClick = (id, cardId, imageURL, cardName, added) => {
    if (added) {
      dispatch(removeFromDeck(cardId));
    } else {
      dispatch(
        addToDeck({ cardId, cardImage: imageURL, cardName, added: true })
      );
    }
    return;
  };

  return (
    <div className={styles.card_container}>
      <img src={imageURL} alt={cardName} className={styles.image} />
      <div
        className={added ? styles.remove : styles.add}
        onClick={() => handleClick(cardId, cardId, imageURL, cardName, added)}
      >
        {!added && "Add to Deck +"}
        {added && "Remove from Deck"}
      </div>
    </div>
  );
}
