import { Post } from './Post';

export const Posts = ({ posts }) => {
  if(!posts) return null;

  return (
    <>
      { posts.map((post, i) => (
        <Post key={ i } post={ post } />
      ))}
    </>
  )
};