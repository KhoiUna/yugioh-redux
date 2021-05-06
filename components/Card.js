export default function Card({ imageURL, cardName }) {
  return (
    <img src={imageURL} alt={cardName} style={{ width: "20%", margin: "1%" }} />
  );
}
