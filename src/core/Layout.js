import React from 'react'


const Layout = ({ title = "title", description = "Description", className, children }) => {
    return (
        <>

            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
               <h2>{title}</h2>
               <p>{description}</p>
               
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
