const PostSummaryItem = (post) => {
  return (`
            <div class="list-group-item border-top-0 border-end-0 border-start-0 ps-3">
                <div class="row align-items-center bg-light" style="overflow-x: auto;">
                <a class="mt-1"
                    style="font-weight: bold; font-size: 20px"
                    href="#" >${post.topic}
                </a>
                <div class="d-flex float-end position-relative" style="width: 100%;">
                    <img src="${post.img}" class="position-relative wd-post-image mb-3">
                    <div class="p-3" style="word-wrap: break-word; word-break: break-all;">
                        ${post.content}
                        <span class="d-flex mt-5 ps-4">
                            <i class="fa-regular fa-comment fa-lg me-5"></i>
                            <i class="fa-solid fa-retweet fa-lg me-5"></i>
                            <i class="fa-regular fa-heart fa-lg me-5"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square fa-lg me-5"></i>
                        </span>
                    </div>
                </div>
                </div>
            </div>         
  `);
}
export default PostSummaryItem;