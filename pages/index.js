import Head from "next/head";
import { useEffect, useState, Fragment } from "react";
import Cards from "../utils/Cards";
import Card from "../components/Card";
import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Home() {
  const [cardsArray, setCardsArray] = useState(null);
  useEffect(() => {
    Cards.fetchAllCards().then((res) => setCardsArray(res));
  }, []);

  return (
    <>
      <Head>
        <title>Yugioh Picks</title>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <h1 style={{ fontSize: "1.8rem", margin: "0 1%", cursor: "pointer" }}>
            Yugioh Picks
          </h1>
        </Link>
        <Link href="/deck">
          <span className={styles.span}>My deck</span>
        </Link>
      </header>

      <main>
        <div style={{ margin: "3% 4%" }}>
          <form>
            <label for="card" hidden>
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
            cardsArray.slice(0, 21).map((info, index) => (
              <Fragment key={index}>
                <Card
                  imageURL={info.card_images[0].image_url}
                  cardName={info.name}
                />
              </Fragment>
            ))}
        </div>

        <div className={styles.pagination}>1 2 3...</div>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} A product of{" "}
        <a
          href="https://bit.ly/khoiuna_links"
          className={styles.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Khoi Nguyen
        </a>
      </footer>
    </>
  );
}
