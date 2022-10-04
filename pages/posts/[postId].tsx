import { useRouter } from "next/router";
import React from "react";

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>
        {post.id} {post.title}
      </p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true, 
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
