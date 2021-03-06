import timeago from "lib/timeago";
import Link from "next/link";

export const Post = ({ post }) => {
  return(
    <div className="flex flex-col mb-4 border border-3 border-black p-10 bg-gray-200 mx-20 my-10">
      <div className="flex flex-shrink-0 pb-0">
        <div className="flex-shrink-0 block group">
          <div className="flex items-center text-gray-800">
            <Link href={`/r/${ post.subredditName }`}>
              <a className="mr-2 underline">
                /r/{ post.subredditName } 
              </a>
            </Link>
            Posted by { post.author.name }{' '}
            { timeago.format(new Date(post.createAt)) }
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Link href={ `/r/${ post.subredditName }/comments/${ post.id }`}>
          <a className="flex-shrink text-2xl font-bold color-primary width-auto">
            { post.title }
          </a>
        </Link>
        <p className="flex-shrink text-base font-normal color-primary width-auto mt-2">
          { post.content }
        </p>
      </div>
    </div>
  );
};