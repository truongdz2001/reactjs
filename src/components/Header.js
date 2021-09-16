import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { signOut, isAuthenticated } from '../auth'
import { useLocation } from 'react-router-dom';

   
const Header = () => {

    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const {user} = isAuthenticated();

    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
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
                                            {pathname !== "/signin" && isLogged ? (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink exact className="nav-link"
                                                            activeClassName="active" aria-current="page"
                                                            to={user.role == 1 ? "/admin/dashboard" : "/user/dashboard"}>Dashboard</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link"
                                                            activeClassName="active"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => signOut(() => {
                                                                setIsLogged(false)
                                                                history.push('/')
                                                            })}
                                                        >Sign Out</a>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li><a href="/signin">SignIn</a></li>
                                                    <li><a href="/signup">SignUp</a></li>
                                                </>
                                            )
                                            }

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
                                    <li><img src="icon/call.png" />(+84) 86523361</li>
                                    <li><img src="icon/email.png" />truongdz@gmail.com</li>
                                    <li><img src="icon/loc.png" />Location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end header inner */}
        </header>
    )
}

export default Header
