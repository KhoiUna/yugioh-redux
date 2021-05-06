import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Deck() {
  return (
    <>
      <Head>
        <title>Yugioh Picks | My Deck</title>
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
        <div></div>
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
