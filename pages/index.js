import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yugioh Picks</title>
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <p>&copy {new Date().getFullYear()} A product of Khoi Nguyen</p>
      </footer>
    </div>
  );
}
