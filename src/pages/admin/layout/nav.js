import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="">
            <div className="sidebar">
                <nav className="">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="list-group-item">
                            <NavLink to="/product/list" className="nav-link btn btn-primary" >
                                <p>
                                    Product
                                    </p>
                            </NavLink>
                        </li>
                        <li className="list-group-item">
                            <NavLink to="/category/list" className="nav-link btn btn-primary"  >

                                <p>
                                    Category
                                    </p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default Nav
