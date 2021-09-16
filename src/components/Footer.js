import React from 'react'

const Footer = () => {
    return (

        <footer>
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

        </footer>

    )
}

export default Footer