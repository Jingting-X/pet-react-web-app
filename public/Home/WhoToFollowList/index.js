import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
            <ul class="list-group fw-bold mb-4 rounded-circle text-center"
                style="font-size: 20px; color: gray; background-color: lightblue">
                Welcome back! XXXX
            </ul>
           <ul class="list-group rounded-5">
                <li class="list-group-item fw-bold">
                    Who to follow
                </li>
            ${who.map(who => {
                return (WhoToFollowListItem(who))
  }).join('')}
           </ul>
        `)
}
export default WhoToFollowList;