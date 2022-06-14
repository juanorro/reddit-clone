import { getPosts } from "lib/data";
import prisma from "lib/prisma";
import Head from "next/head";
import { Posts } from "components/Posts";

export default function Home({ posts }) {

  console.log('posts =>', posts);
  return (
    <div>
      <Head>
        <title>Reddit clone</title>
        <meta name="description" content="flavio bootcamp week 11" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts posts={ posts } />
    </div>
  )
};

export const getServerSideProps = async (ctx) => {
  let posts = await getPosts(prisma);
  posts = JSON.parse(JSON.stringify(posts))

  return {
    props: {
      posts: posts,
    }
  }
}
