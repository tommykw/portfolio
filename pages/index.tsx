import Head from "next/head";
import Image from "next/image";
import { Grid, Box, Center, Frame } from "react-every-layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Kenji Tomita</title>
        <meta
          name="description"
          content="tommykw Web Engineer based in Tokyo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Frame ratio="1:2">
          <h1>How To Create A Book Cover</h1>

      </Frame>

      {/* Center */}
      {/* Stack */}
      <main className={styles.main}>
        {/* Cluster */}
        {/* Cover */}
        <header>
          <h1 className={styles.title}>
            <div>About Me</div>
          </h1>

          <p className={styles.description}>
            Kenji Tomita
            <br />I am passionate about Web Development and Design.
          </p>
        </header>

        <Center
           andText
           gutters="0"
           intrinsic={false}
           max="var(--measure)"
        >
          <h2>Articles</h2>
          </Center>
        

          <Center
           andText
           gutters="0"
           intrinsic={false}
           max="var(--measure)"
        >
                  <Grid isWide={true} min="250px" space="var(--s2)">
          <div className={styles.card}>
            <a href="https://zenn.dev/tommykw">
              <div>
                <picture>
                  <img
                    className={styles.output_image}
                    src="/zenn.png"
                    alt="Zenn"
                  />
                </picture>
                <h3>Dev</h3>
                <p>Post articles about the web.</p>
              </div>
            </a>
          </div>

          <div className={styles.card}>
            <a href="https://speakerdeck.com/tommykw">
              <div>
                <picture>
                  <img
                    className={styles.output_image}
                    src="/devto.png"
                    alt="Dev"
                  />
                </picture>
                <h3>Speackerdeck</h3>
                <p>This is a presentation material about the web.</p>
              </div>
            </a>
          </div>

          <div className={styles.card}>
            <a href="https://speakerdeck.com/tommykw">
              <div>
                <picture>
                  <img
                    className={styles.output_image}
                    src="/devto.png"
                    alt="Dev"
                  />
                </picture>
                <h3>Speackerdeck</h3>
                <p>This is a presentation material about the web.</p>
              </div>
            </a>
          </div>
        </Grid>

          </Center>

        <Center
           andText
           gutters="0"
           intrinsic={false}
           max="var(--measure)"
        >
          <h2>Projects</h2>
          {/* Grid */}

        </Center>

        <Center
           andText
           gutters="0"
           intrinsic={false}
           max="var(--measure)"
        >

          <h2>Skills</h2>
          {/* Grid */}
        </Center>

        <Center
           andText
           gutters="0"
           intrinsic={false}
           max="var(--measure)"
        >

          <h2>Carrer</h2>
          {/* Stack */}
          <ul>
            <li>Connehito 2016- / Android Enginner/Frontend Enginner</li>
            <li>Diverse 2014- / Android Enginner</li>
            <li>Livedoor 2011- / Web Enginner</li>
            <li>Any 2008- / Web Enginner</li>
          </ul>
        </Center>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 Kenji Tomita | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
