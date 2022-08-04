import React from 'react';
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { usePostViews } from '../lib/usePostViews';
import { LoadingDots } from './LoadingDots';

function PostCard(post: Post) {
  const {views, isLoading,isError} = usePostViews(post._raw.flattenedPath)

    return (
      <div className="mb-8">
        <h2 className="text-xl">
          <Link href={post.url}>
            <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
          </Link>
        </h2>
        <time dateTime={post.date} className="block text-xs text-gray-600 mb-2">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        {isError || isLoading ? <LoadingDots/> : (<p>{views} views</p>)}
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
    );
}

export default PostCard;