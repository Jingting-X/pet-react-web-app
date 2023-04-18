import React from 'react';

const Footnote = () => {
    return (
        // <div className="wd-footer mt-5">
        //     <div className="row h-75 mt-4 pb-0">
        //         <ul className="col-4 col-sm link-dark">
        //             <div className="float-end me-5 mt-4">
        //                 <li style={{listStyleType: 'none'}}>
        //                     <p className="ps-5" style={{fontFamily: 'cursive', fontSize: '50px', color: 'darkpink'}}>Dog
        //                         Land</p>
        //                 </li>
        //                 <li style={{listStyleType: 'none'}}>
        //                     <span className="text-black ps-5 small">Produced by ...</span>
        //                 </li>
        //                 <li style={{listStyleType: 'none'}}>
        //                     <span className="text-black ps-5 small">2023, Dog Land</span>
        //                 </li>
        //                 <li style={{listStyleType: 'none'}}>
        //                     <span className="text-black ps-5 mb-5 small">All right reserved</span>
        //                 </li>
        //             </div>
        //         </ul>

        //         <ul className="col-2 col-sm mt-5" style={{width: '250px', listStyleType: 'none'}}>
        //             <li className="mb-4"><a className="link-dark" href="#">About us</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Contact us</a></li>
        //         </ul>

        //         <ul className="col-2 col-sm mt-5" style={{width: '250px', listStyleType: 'none'}}>
        //             <li className="mb-4"><a className="link-dark" href="#">Blog</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Event</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Setting</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Notifications</a></li>
        //         </ul>

        //         <ul className="col-2 col-sm mt-5 ml-auto" style={{width: '250px', listStyleType: 'none'}}>
        //             <li className="mb-4"><a className="link-dark" href="#">Terms of Use</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Privacy Policy</a></li>
        //             <li className="mb-4"><a className="link-dark" href="#">Q&A</a></li>
        //         </ul>
        //     </div>
        // </div>
        <div className="container mt-5 me-0 pe-0">
            <div className="text-center text-lg-start text-black" style={{ backgroundColor: 'lightpink' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-1 mb-md-0">
                            <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-2 mx-auto" style={{ width: '100px', height: '100px' }}>
                                <img className="rounded-circle" src="../../img/icon.png" height="75" alt=""/>
                            </div>
                            <div className="text-center mr-2">A dog social media website, a platform dedicated to connecting dog owners, dog lovers, and third-party service providers. </div>
                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a className="text-black px-2" href="#!">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-black px-2" href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-black ps-2" href="#!">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-5 mb-1 mb-md-0">
                            <h5 className="text-uppercase mb-4">Dogs</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Dog training</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Dog hospital</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Dog events</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Dog store</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-5 mb-1 mb-md-0">
                            <h5 className="text-uppercase mb-4">About</h5>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>General information</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>About us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Job</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mb-1 mb-md-0">
                            <h5 className="text-uppercase mb-4">Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p><i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-black" style={{ backgroundColor: 'lightpink' }}>
                        <p className="text-black" href="#">© 2023 Copyright: dogland.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footnote;
