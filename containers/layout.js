import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectDeckNum } from "../features/cardsSlice";
import { useEffect, useRef } from "react";
import { loadCardsAsync } from "../features/cardsSlice";
import { useRouter } from "next/router";

export default function Layout({ page, children }) {
  const deckNum = useSelector(selectDeckNum);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const load = setTimeout(() => {
      dispatch(loadCardsAsync());
    });

    return () => {
      clearTimeout(load);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Search cards and build your own Yu-gi-oh Deck"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="og:title" content="Yugioh Picks" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <title>Yugioh Picks | {page === "home" ? "Home" : "My Deck"}</title>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <h1 style={{ fontSize: "1.8rem", margin: "0 1%", cursor: "pointer" }}>
            Yugioh Picks
          </h1>
        </Link>
        {page === "home" && (
          <Link href="/deck">
            <span className={styles.span}>My deck ( {deckNum || 0} )</span>
          </Link>
        )}
        {page === "deck" && (
          <span className={styles.span} onClick={() => router.back()}>
            Go Back
          </span>
        )}
      </header>

      <main>{children}</main>

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
