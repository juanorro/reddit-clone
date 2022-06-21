import React from 'react';
import { Posts } from 'components/Posts';
import { getPostsFromSubreddit, getSubreddit } from 'lib/data';
import prisma from 'lib/prisma';
import Link from 'next/link';

const SubredditPage = ({ subreddit, posts }) => {

  if(!subreddit) {
    return <p className='text-center p-5'>Subreddit does not exists</p>
  }
  return (
    <>
      <Link href={'/'}>
        <a className='text-center p-5 underline block'>
          Back to homepage
        </a>
      </Link>
      <p className='text-center p-5'>/r/{ subreddit.name }</p>
      <Posts posts={ posts } />
    </>
  )
};

export const getServerSideProps = async ({ params }) => {
  
  const subreddit = await getSubreddit(params.subreddit, prisma);
  let posts = await getPostsFromSubreddit(params.subreddit, prisma);
  posts = JSON.parse(JSON.stringify(posts));

  return {
    props: {
      subreddit,
      posts,
    }
  }
}

export default SubredditPage;