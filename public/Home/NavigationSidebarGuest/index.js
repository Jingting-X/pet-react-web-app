const NavigationSidebarGuest = () => {
  return(`
   <div class="list-group rounded-3">
      <a class="list-group-item bg-light" href="#">
        <i class="fa fa-home"></i>
        <span class="ms-1 d-none d-xl-inline">Home</span>
      </a>
      <a class="list-group-item bg-light" href="#">
        <i class="fas fa-hashtag fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">About</span>
      </a>
      <a class="list-group-item bg-light" href="#">
        <i class="fa-solid fa-calendar-days fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">Event</span>
      </a>
      <a class="list-group-item bg-light" href="#">
        <i class="fa-solid fa-book fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">Post</span>
      </a>
    </div> 
`);
}
export default NavigationSidebarGuest;

