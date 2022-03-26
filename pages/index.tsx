import Head from "next/head";
import Image from "next/image";
import { Grid, Box, Center, Cluster, Stack, Frame } from "react-every-layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles["container-root"]}>
      <Head>
        <title>Portfolio | Kenji Tomita</title>
        <meta
          name="description"
          content="tommykw Web Engineer based in Tokyo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Frame className={styles["header-frame"]} ratio="1:3">
          <Box>
            <Center andText>
              <h1>Beyond Average</h1>
              <Image src="/image/icon.png" width="64" height="64" alt="icon" />
              <div className={styles["header-text"]}>tommykw</div>
              <div className={styles["header-text"]}>(Kenji Tomita)</div>
            </Center>
          </Box>
        </Frame>
      </header>

      <main className={styles["container-content"]}>
        <section>
          <Center andText>
            <h2 id="about_me">About Me</h2>
            <p className={styles["about-me-description"]}>
              Hi, my name is Kenji Tomita. I am a Web Developer based in Tokyo,
              Japan.
              <br />
              <br />
              I am passionate about making programming interesting and
              approachable for all. And besides, I believe the web should be
              open and safe for everyone. In my spare time, I love to sing
              gospel songs.
              <br />
              <br />
              For collaboration, email me at destinys.lotus.1108mn@gmail.com.
            </p>
          </Center>
        </section>

        <section>
          <Center andText max="820px">
            <h2 id="articles">Articles</h2>
            <Grid min="250px" space="1rem">
              <div className={styles["article-card"]}>
                <a href="https://zenn.dev/tommykw">
                  <div>
                    <Image
                      width={260}
                      height={260}
                      src="/image/article/zenn.png"
                      alt="Zenn"
                    />
                    <h3>Zenn</h3>
                    <p>Post articles about the web.</p>
                  </div>
                </a>
              </div>

              <div className={styles["article-card"]}>
                <a href="https://speakerdeck.com/tommykw">
                  <div>
                    <Image
                      width={260}
                      height={260}
                      src="/image/article/speackerdeck.png"
                      alt="Speackerdeck"
                    />
                    <h3>Speakerdeck</h3>
                    <p>This is a presentation material about the web.</p>
                  </div>
                </a>
              </div>

              <div className={styles["article-card"]}>
                <a href="https://dev.to/tommykw">
                  <div>
                    <Image
                      width={260}
                      height={260}
                      src="/image/article/devto.png"
                      alt="Dev"
                    />
                    <h3>Dev</h3>
                    <p>Share information about the web.</p>
                  </div>
                </a>
              </div>
            </Grid>
          </Center>
        </section>

        <section>
          <Center andText max="820px">
            <h2 id="projects">Projects</h2>
            <Grid min="250px" space="1rem">
              <Box className={styles["project-box"]}>
                <a href="https://github.com/tommykw/pull-request-reviewer-reminder-action">
                  <picture>
                    <img src="https://gh-card.dev/repos/tommykw/pull-request-reviewer-reminder-action.svg" />
                  </picture>
                </a>
              </Box>

              <Box className={styles["project-box"]}>
                <a href="https://github.com/tommykw/pull-request-reviewee-reminder-action">
                  <picture>
                    <img src="https://gh-card.dev/repos/tommykw/pull-request-reviewee-reminder-action.svg" />
                  </picture>
                </a>
              </Box>
            </Grid>
          </Center>
        </section>

        <section>
          <Center andText max="180px">
            <h2 id="skills">Skills</h2>
            <br />
            <Cluster align="center" justify="center" space="2rem">
              <div className={styles["skill-box"]}>
                <Box>
                  <a href="https://www.typescriptlang.org/">
                    <Image
                      src="/image/skill/ts-logo.png"
                      alt="ts"
                      width={64}
                      height={64}
                    />
                  </a>
                </Box>

                <Box>
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS">
                    <Image
                      src="/image/skill/css-logo.png"
                      alt="ts"
                      width={64}
                      height={64}
                    />
                  </a>
                </Box>

                <Box>
                  <a href="https://reactjs.org/">
                    <Image
                      src="/image/skill/react-logo.png"
                      alt="ts"
                      width={64}
                      height={64}
                    />
                  </a>
                </Box>

                <Box>
                  <a href="https://kotlinlang.org/">
                    <Image
                      src="/image/skill/kotlin-logo.png"
                      alt="ts"
                      width={64}
                      height={64}
                    />
                  </a>
                </Box>
              </div>
            </Cluster>
          </Center>
        </section>

        <section>
          <Center className={styles["carrer-container"]} andText max="500px">
            <h2 id="carrer">Carrer</h2>
            <Stack space="1rem">
              <Box
                className={styles["carrer-box"]}
                borderWidth="1px #e2e8f0"
                padding="1em"
              >
                <p className={styles["carrer-box-date"]}>2016 - present</p>
                <p>Connehito, Inc. / Android Enginner. Frontend Enginner</p>
              </Box>
              <Box
                className={styles["carrer-box"]}
                borderWidth="1px #e2e8f0"
                padding="1em"
              >
                <p className={styles["carrer-box-date"]}>2014 - 2016</p>
                <p>Diverse, Inc. / Android Enginner</p>
              </Box>
              <Box
                className={styles["carrer-box"]}
                borderWidth="1px #e2e8f0"
                padding="1em"
              >
                <p className={styles["carrer-box-date"]}>2010 - 2014</p>
                <p>livedoor Co.,Ltd. / Web Enginner. Android Enginner</p>
              </Box>
              <Box
                className={styles["carrer-box"]}
                borderWidth="1px #e2e8f0"
                padding="1em"
              >
                <p className={styles["carrer-box-date"]}>2008 - 2010</p>
                <p>Any, Inc. / Web Enginner</p>
              </Box>
            </Stack>
          </Center>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2022 - present Kenji Tomita | Powered by{" "}
        <span className={styles["footer-logo"]}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </span>
      </footer>
    </div>
  );
}
