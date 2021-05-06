import styles from "../styles/index.module.css";

export default function Card({ imageURL, cardName }) {
  return (
    <div className={styles.card_container}>
      <img src={imageURL} alt={cardName} className={styles.image} />
      <div className={styles.add}>Add to Deck +</div>
    </div>
  );
}
