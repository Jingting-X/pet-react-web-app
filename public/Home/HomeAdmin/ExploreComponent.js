import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="row">
        <div class="wd-search-bar">
            <i class="fa-solid fa-magnifying-glass wd-search-icon"></i>
            <input type="text" 
                   placeholder="Search your favorite dog.."
                   class="form-control wd-round-corner bg-light ps-5 ms-3">
        </div>
    </div>
    
    <div class="position-relative">
        <img src="../../img/dypuppies.png" class="col-sm-12 mt-2 mb-3 rounded-5">
    </div>
    ${PostSummaryList()} 
`);
}
export default ExploreComponent;