import Link from "next/link";
import React from "react";

export interface PostListPageProps {
  posts: any;
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>List of Posts</h1>
      <hr />
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
