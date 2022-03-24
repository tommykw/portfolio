import Head from "next/head";
import Image from "next/image";
import { Grid, Box, Center, Cluster, Stack, Frame } from "react-every-layout";
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

      <header>
        <Frame className={styles.header} ratio="1:3">
          <Box>
            <Center andText gutters="0" intrinsic={false} max="var(--measure)">
              <Box>
                <img
                  className={styles.profileicon}
                  src="/image/icon.png"
                  width="64"
                  height="64"
                  alt="icon"
                />
              </Box>
              <div className={styles.textprimary}>tommykw</div>
              <div className={styles.textprimary}>(Kenji Tomita)</div>
            </Center>
          </Box>
        </Frame>
      </header>

      <main className={styles.main_container}>
        <Center andText gutters="0" intrinsic={false} max="var(--measure)">
          <h2 id="about_me">About Me</h2>
          <p className={styles.description}>
            Kenji Tomita
            <br />
            <br />
            I am a Web Developer based in Tokyo, Japan.
            <br />
            I am passionate about making programming interesting and
            approachable for all. <br />
            In my spare time, I love to sing gospel songs.
          </p>
        </Center>
        <br /><br />

        <Center andText gutters="0" intrinsic={false} max="var(--measure)">
          <h2 id="articles">Articles</h2>
        </Center>

        <Center andText gutters="0" intrinsic={false} max="820px">
          <Grid isWide={true} min="250px" space="1rem">
            <div className={styles.card}>
              <a href="https://zenn.dev/tommykw">
                <div>
                  <picture>
                    <img
                      className={styles.output_image}
                      src="/zenn2.png"
                      alt="Zenn"
                    />
                  </picture>
                  <h3>Zenn</h3>
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
                      src="/speackerdeck.png"
                      alt="Speackerdeck"
                    />
                  </picture>
                  <h3>Speakerdeck</h3>
                  <p>This is a presentation material about the web.</p>
                </div>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://dev.to/tommykw">
                <div>
                  <picture>
                    <img
                      className={styles.output_image}
                      src="/devto.png"
                      alt="Dev"
                    />
                  </picture>
                  <h3>Dev</h3>
                  <p>This is a presentation material about the web.</p>
                </div>
              </a>
            </div>
          </Grid>
        </Center>
        <br /><br />

        <Center andText gutters="0" intrinsic={false} max="30ch">
          <h2 id="projects">Projects</h2>
          <Grid isWide={true} min="120px" space="1rem">
            <Box
            borderWidth="0px" 
              invert={false} 
              padding="var(--s0)"
              className={styles.output_github}
            >
              <a href="https://github.com/tommykw/pull-request-reviewer-reminder-action"><img src="https://gh-card.dev/repos/tommykw/pull-request-reviewer-reminder-action.svg" /></a>
            </Box>
            <Box
            borderWidth="0px" 
              invert={false} 
              padding="var(--s0)"
              className={styles.output_github}
            >
              <a href="https://github.com/tommykw/pull-request-reviewee-reminder-action"><img src="https://gh-card.dev/repos/tommykw/pull-request-reviewee-reminder-action.svg" /></a>
            </Box>
            <Box
            borderWidth="0px" 
              invert={false} 
              padding="var(--s0)"
              className={styles.output_github}
            >
              <a href="https://github.com/tommykw/pull-request-reviewee-reminder-action"><img src="https://gh-card.dev/repos/tommykw/pull-request-reviewee-reminder-action.svg" /></a>
            </Box>
          </Grid>
        </Center>

        <Center andText gutters="0" intrinsic={false} max="300px">
          <h2 id="skills">Skills</h2>
        </Center>
        <br /><br />

        <Center andText gutters="5" intrinsic={false} max="30ch">
          <Cluster align="center" justify="center" space="5rem">
            <div className={styles.skill_box}>
              <Box borderWidth="0px" invert={false} padding="var(--s0)">
                <a href="https://www.typescriptlang.org/">
                  <img
                    src="/image/skill/ts-logo.png"
                    alt="ts"
                    width={64}
                    height={64}
                  />
                </a>
              </Box>

              <Box borderWidth="0px" invert={false} padding="var(--s0)">
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS">
                  <img
                    className={styles.logoimage}
                    src="/image/skill/css-logo.png"
                    alt="ts"
                    width={64}
                    height={64}
                  />
                </a>
              </Box>

              <Box borderWidth="0px" invert={false} padding="var(--s0)">
                <a href="https://reactjs.org/">
                  <img
                    className={styles.logoimage}
                    src="/image/skill/react-logo.png"
                    alt="ts"
                    width={64}
                    height={64}
                  />
                </a>
              </Box>

              <Box borderWidth="0px" invert={false} padding="var(--s0)">
                <a href="https://kotlinlang.org/">
                  <img
                    className={styles.logoimage}
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

        <br /><br /><br /><br />

        <Center andText gutters="0" intrinsic={false} max="50ch">
          <h2 id="carrer">Carrer</h2>
          {/* Stack */}
          <Stack recursive={false} space="2rem">
            <Box
              className={styles.carrer_box}
              borderWidth="1px #e2e8f0"
              invert={false}
              padding="1em"
            >
              <p className={styles.carrer_box_date}>2016 - present</p>
              <p>Connehito, Inc. / Android Enginner. Frontend Enginner</p>
            </Box>
            <Box
              className={styles.carrer_box}
              borderWidth="1px #e2e8f0"
              invert={false}
              padding="1em"
            >
              <p className={styles.carrer_box_date}>2014 - 2016</p>
              <p>Diverse, Inc. / Android Enginner</p>
            </Box>
            <Box
              className={styles.carrer_box}
              borderWidth="1px #e2e8f0"
              invert={false}
              padding="1em"
            >
              <p className={styles.carrer_box_date}>2010 - 2014</p>
              <p>livedoor Co.,Ltd. / Web Enginner. Android Enginner</p>
            </Box>
            <Box
              className={styles.carrer_box}
              borderWidth="1px #e2e8f0"
              invert={false}
              padding="1em"
            >
              <p className={styles.carrer_box_date}>2008 - 2010</p>
              <p>Any, Inc. / Web Enginner</p>
            </Box>
          </Stack>
        </Center>
        <br />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 - present Kenji Tomita | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
