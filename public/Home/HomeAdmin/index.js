import NavigationSidebarAdmin from "../NavigationSidebarAdmin/index.js";
import WelcomeAdmin from "../WelcomeAdmin/index.js";
import ExploreComponent from "./ExploreComponent.js";
import Footnote from "../Footnote/index.js";

function exploreComponent() {
  $('#home-user').append(`
    <div class="text-center fw-bold mt-2"
        style="font-family: cursive; font-size: 80px; color: lightpink">
        Dog Land
    </div>
    <div class="container">
    <div class="row mt-4 mb-4">
        <li class="col-2 col-md-2 col-lg-2 col-xl-2" style="list-style-type: none">
        ${NavigationSidebarAdmin()}
        </li>
        <li class="col-10 col-md-7 col-lg-7 col-xl-7" style="list-style-type: none">
        ${ExploreComponent()}
        </li>
        <li class="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3" style="list-style-type: none">
        ${WelcomeAdmin()}
        </li>
    </div>
    </div>
    <div>
    ${Footnote()}
    </div>
`);
}
$(exploreComponent);