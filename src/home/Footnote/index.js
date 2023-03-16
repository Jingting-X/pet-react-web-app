import React from 'react';

const Footnote = () => {
  return(
      <div style={{backgroundColor: 'black'}}>
        <div className="row">
          <ul className="col-sm-6 link-light" style={{width: '450px'}}>
            <div className="float-end me-5 mt-4">
              <li style={{listStyleType: 'none'}}>
                <p className="ps-5" style={{fontFamily: 'cursive', fontSize: '50px', color: 'lightpink'}}>Dog Land</p>
              </li>
              <li style={{listStyleType: 'none'}}>
                <span className="text-white ps-5 small">Produced by ...</span>
              </li>
              <li style={{listStyleType: 'none'}}>
                <span className="text-white ps-5 small">2023, Dog Land</span>
              </li>
              <li style={{listStyleType: 'none'}}>
                <span className="text-white ps-5 mb-5 small">All right reserved</span>
              </li>
            </div>
          </ul>

          <ul className="col-sm-6 mt-5" style={{width: '250px', listStyleType: 'none'}}>
            <li className="mb-4"><a className="link-light" href="#">About us</a></li>
            <li className="mb-4"><a className="link-light" href="#">Contact us</a></li>
          </ul>

          <ul className="col-sm-6 mt-5" style={{width: '250px', listStyleType: 'none'}}>
            <li className="mb-4"><a className="link-light" href="#">Blog</a></li>
            <li className="mb-4"><a className="link-light" href="#">Event</a></li>
            <li className="mb-4"><a className="link-light" href="#">Setting</a></li>
            <li className="mb-4"><a className="link-light" href="#">Notifications</a></li>
          </ul>

          <ul className="col-sm-6 mt-5" style={{width: '250px', listStyleType: 'none'}}>
            <li className="mb-4"><a className="link-light" href="#">Terms of Use</a></li>
            <li className="mb-4"><a className="link-light" href="#">Privacy Policy</a></li>
            <li className="mb-4"><a className="link-light" href="#">Q&A</a></li>
          </ul>
        </div>
      </div>
);
}
export default Footnote;