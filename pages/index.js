import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Appscrip Frontend Assignment</title>
        <meta
          name="description"
          content="Frontend assignment built with Next.js, SSR, SEO optimized and responsive design"
        />
      </Head>

      <Header />

      <main className={styles.container}>
        <h1 className={styles.heading}>Our Products</h1>

        <section className={styles.grid}>
          {products.map((item) => (
            <article key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
