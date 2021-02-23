import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import FirstWrapper from "./FirstWrapper";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Piko Tabacaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
          <div>

              <FirstWrapper />
          </div>
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default Home;
