import React from 'react'

const NewAbout = () => {
    return (
        <header>
            {/* header inner */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <a href="/"><img src="images/logo.png" alt="#" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                        <ul className="menu-area-main">
                                            <li className="active"> <a href="/">Home</a> </li>
                                            <li> <a href="/about">About</a> </li>
                                            <li><a href="/signin">SignIn</a></li>
                                            <li><a href="/signup">SignUp</a></li>
                                            <li className="last">
                                                <a href="#"><img src="images/search_icon.png" alt="icon" /></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-6">
                            <div className="location_icon_bottum">
                                <ul>
                                    <li><img src="icon/call.png" />(+71)9876543109</li>
                                    <li><img src="icon/email.png" />demo@gmail.com</li>
                                    <li><img src="icon/loc.png" />Location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < div className="about" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                            <div className="about_img">
                                <figure><img src="images/about.png" alt="img" /></figure>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                            <div className="about_box">
                                <h3>About Us</h3>
                                <span>Our Mobile Shop</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <br></br>
            {/* end header inner */}
            <div id="contact" className="footer">
                <div className="container">
                    <div className="row pdn-top-30">
                        <div className="col-md-12 ">
                            <div className="footer-box">
                                <div className="headinga">
                                    <h3>Address</h3>
                                    <span>Healing Center, 176 W Streetname,New York, NY 10014, US</span>
                                    <p>(+84) 86523361
                                 <br />truongdz@gmail.com</p>
                                </div>
                                <ul className="location_icon">
                                    <li> <a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li> <a href="#"><i className="fa fa-instagram" /></a></li>
                                </ul>
                                <div className="menu-bottom">
                                    <ul className="link">
                                        <li> <a href="#">Home</a></li>
                                        <li> <a href="#">About</a></li>
                                        <li> <a href="#">SignIn</a></li>
                                        <li> <a href="#">SignUp</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>


    )
}

export default NewAbout
