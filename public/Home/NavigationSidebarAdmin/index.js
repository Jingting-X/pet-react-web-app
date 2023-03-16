const NavigationSidebarAdmin = () => {
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
      <a class="list-group-item bg-light" href="#">
        <i class="fa-solid fa-bars fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">Setting</span>
      </a>
      <a class="list-group-item bg-light" href="#">
        <i class="fa-regular fa-bell fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">Notifications</span>
      </a>
      <a class="list-group-item bg-light" href="#">
        <i class="fa-solid fa-user-shield fa-lg"></i>
        <span class="ms-1 d-none d-xl-inline">Admin Center</span>
      </a>
    </div> 
`);
}
export default NavigationSidebarAdmin;

