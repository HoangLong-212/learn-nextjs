import { useRouter } from "next/router";
import React from "react";

export interface ProductsDetailPageProps {
  product: any;
}

export default function ProductsDetailPage({
  product,
}: ProductsDetailPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h2>
        {product.id} {product.title}
      </h2>
      <h2>
        {product.price} {product.description}
      </h2>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productsId: "1" } }],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const res = await fetch(
    `https://633b8350f11701a65f644cfe.mockapi.io/products/${params.productsId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    // revalidate: 10,
  };
}
