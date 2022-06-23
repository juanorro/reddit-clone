import timeago from 'lib/timeago';
import React, { useState } from 'react';
import { NewComment } from './NewComment';

const Comment = ({ comment, post }) => {

  const [showReply, setShowReply] = useState(false);

  return (
    <div className='mt-6'>
      <p>
        { comment.author.name } { timeago.format(new Date(comment.createdAt)) }
      </p>
      <p>
        { comment.content }
      </p>
      { showReply ? (
        <div>
          <NewComment post={ post } comment={ comment } />
        </div>
      ) : (
        <p 
          className='underline text-sm cursor-pointer'
          onClick={ () => setShowReply(true) }
        >
          Reply
        </p>
      )}
    </div>
  )
};

export const CommentList = ({ comments, post }) => {

  if(!comments) return null;

  return (
    <>
      { comments.map((comment, i) => (
        <>
          <Comment key={ i } comment={ comment } post={ post } />
          { comment.comments && (
            <div>
              <CommentList comments={comment.comments} post={ post } />
            </div>
          )}
        </>
      ))}
    </>
  )
};
