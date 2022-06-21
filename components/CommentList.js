import timeago from 'lib/timeago';
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className='mt-6'>
      <p>
        { comment.author.name } { timeago.format(new Date(comment.createAt)) }
      </p>
      <p>
        { comment.content }
      </p>
    </div>
  )
};

export const CommentList = ({ comments }) => {

  if(!comments) return null;

  return (
    <>
      { comments.map((comment, i) => (
        <Comment key={ i } comment={ comment } />
      ))}
    </>
  )
};
