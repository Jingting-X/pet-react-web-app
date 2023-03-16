const Footnote = () => {
  return(`
      <div style="background-color: black">
        <div class="row">
            <ul class="col-sm-6 link-light" style="width: 450px">
                <div class="float-end me-5 mt-4">
                    <li style="list-style-type: none">
                        <p class="ps-5" style="font-family: cursive; font-size: 50px; color: lightpink">Dog Land</p>
                    </li>
                    <li style="list-style-type: none">
                        <span class="text-white ps-5 small">Produced by ...</span>
                    </li>
                    <li style="list-style-type: none">
                        <span class="text-white ps-5 small">2023, Dog Land</span>
                    </li>
                    <li style="list-style-type: none">
                        <span class="text-white ps-5 mb-5 small">All right reserved</span>
                    </li>
                </div>
            </ul>

            <ul class="col-sm-6 mt-5" style="width: 250px; list-style-type: none;">
                <li class="mb-4"><a class="link-light" href="#">About us</a></li>
                <li class="mb-4"><a class="link-light" href="#">Contact us</a></li>
            </ul>

            <ul class="col-sm-6 mt-5" style="width: 250px; list-style-type: none;">
                <li class="mb-4"><a class="link-light" href="#">Blog</a></li>
                <li class="mb-4"><a class="link-light" href="#">Event</a></li>
                <li class="mb-4"><a class="link-light" href="#">Setting</a></li>
                <li class="mb-4"><a class="link-light" href="#">Notifications</a></li>
            </ul>

            <ul class="col-sm-6 mt-5" style="width: 250px; list-style-type: none;">
                <li class="mb-4"><a class="link-light" href="#">Terms of Use</a></li>
                <li class="mb-4"><a class="link-light" href="#">Privacy Policy</a></li>
                <li class="mb-4"><a class="link-light" href="#">Q&A</a></li>
            </ul>
        </div>
    </div>
`);
}
export default Footnote;