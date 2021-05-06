import Head from "next/head";
import { useEffect, useState } from "react";
import Cards from "../utils/Cards";
import Card from "../components/Card";

export default function Home() {
  const [cardsArray, setCardsArray] = useState(null);
  useEffect(() => {
    Cards.fetchAllCards().then((res) => setCardsArray(res));
  }, []);

  return (
    <div>
      <Head>
        <title>Yugioh Picks</title>
      </Head>

      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cardsArray &&
          cardsArray
            .slice(0, 20)
            .map((info) => (
              <Card
                imageURL={info.card_images[0].image_url}
                cardName={info.name}
              />
            ))}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} A product of Khoi Nguyen</p>
      </footer>
    </div>
  );
}
