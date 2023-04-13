import exploreItems from './posts.js';
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
            <ur class='list-group'>
            ${exploreItems.map(exploreItem => {
    return (PostSummaryItem(exploreItem))
  }).join('')}
    </ur>
    `)
}
export default PostSummaryList;