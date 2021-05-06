import styles from "../styles/index.module.css";

export default function Card({ cardId, imageURL, cardName }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.card_container}>
      <img src={imageURL} alt={cardName} className={styles.image} />
      <div className={styles.add} onClick={() => handleClick(cardId)}>
        Add to Deck +
      </div>
    </div>
  );
}
