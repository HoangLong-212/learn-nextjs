import Link from "next/link";
import React from "react";

export interface ProductsListPageProps {
  products: any;
}

export default function ProductsListPage({ products }: ProductsListPageProps) {
  return (
    <div>
      <h1>List of Products</h1>
      <hr />
      {products.map((product: any) => (
        <div key={product.id}>
          <Link href={`products/${product.id}`} passHref>
            <div>
              <h2>
                {product.id} {product.title}
              </h2>
              <h2>
                {product.description} {product.price}
              </h2>
            </div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://633b8350f11701a65f644cfe.mockapi.io/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
