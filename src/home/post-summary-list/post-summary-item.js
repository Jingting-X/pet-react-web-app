import React from "react";

const PostSummaryItem = (
    {
      posts = {
        "topic": 'Post Title',
        "img": '../../img/german.jpeg',
        "content": 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...'
      }
    }
) => {
  return(
      <div className="list-group-item border-top-0 border-end-0 border-start-0 ps-3">
        <div className="row align-items-center bg-light" style={{ overflowX: 'auto' }}>
          <a className="mt-1"
             style={{ fontWeight: 'bold', fontSize: '20px' }}
             href="#">{posts.topic}
          </a>
          <div className="d-flex float-end position-relative" style={{ width: '100%' }}>
            <img src={posts.img} className="position-relative mb-3" style={{ width: '35%' }}/>
            <div className="p-3" style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
              {posts.content}
              <span className="d-flex mt-5 ps-4">
                <i className="fa-regular fa-comment fa-lg me-5"></i>
                <i className="fa-solid fa-retweet fa-lg me-5"></i>
                <i className="fa-regular fa-heart fa-lg me-5"></i>
                <i className="fa-solid fa-arrow-up-right-from-square fa-lg me-5"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
);
};
export default PostSummaryItem;