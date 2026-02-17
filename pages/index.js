import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Appscrip Frontend Assignment</title>
        <meta
          name="description"
          content="Frontend assignment built with Next.js, SEO optimized and responsive design"
        />
      </Head>

      <Header />

      <main className={styles.container}>
        <h1 className={styles.heading}>Our Products</h1>

        <section className={styles.grid}>
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((item) => (
              <article key={item.id} className={styles.card}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))
          )}
        </section>
      </main>
    </>
  );
}
