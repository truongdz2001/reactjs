import React from 'react'
import Nav from './nav';

const Layout = ({ children }) => {
    return (
        <div>

            <div className="row">
                <div className="col-sm-3">
                    <Nav />
                </div>
                <div className="col-sm-9">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
