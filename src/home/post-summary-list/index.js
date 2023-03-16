import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item.js";

const PostSummaryList = () => {
  return(
      <ul className="list-group">
        {
          postsArray.map(post =>
              <PostSummaryItem
                  key={post._id} posts={post}/>
          )
        }
      </ul>
  );
};
export default PostSummaryList;

