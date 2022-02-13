import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Kenji Tomita</title>
        <meta name="description" content="tommykw Web Engineer based in Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>
            <div>About Me</div>
          </h1>

          <p className={styles.description}>
            Kenji Tomita< br />
            I am passionate about Web Development and Design.
          </p>
        </header>


        <section>
          <h2>Articles</h2>
        </section>

        <section>
          <h2>Projects</h2>
        </section>

        <section>
          <h2>Skills</h2>
        </section>

        <section>
          <h2>Carrer</h2>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 Kenji Tomita | Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
