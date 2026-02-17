export default function ProductCard({ product }) {
  return (
    <article>
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
    </article>
  );
}
