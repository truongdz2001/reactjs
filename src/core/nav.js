import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { signOut, isAuthenticated } from '../auth'
import { useLocation } from 'react-router-dom';
const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const {user} = isAuthenticated();

    useEffect(() => {
        isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isLogged && (
                    <>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" 
                            activeClassName="active" aria-current="page" 
                            to={user.role == 1 ? "/admin/dashboard" : "/user/dashboard"}>Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"
                                activeClassName="active"
                                style={{ cursor: 'pointer' }}
                                onClick={() => signOut(() => {
                                    setIsLogged(false)
                                    history.push('/')
                                })}
                            >Sign Out</p>
                        </li>
                    </>
                )}
            </ul>
        </>
    )
}

export default Nav
