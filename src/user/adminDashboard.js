// import React from 'react'
// import Layout from '../core/Layout';
// import {Link} from 'react-router-dom';
// import {isAuthenticated} from '../auth'
// const AdminDashboard = () => {
//     const {user} = isAuthenticated();
//     console.log(user)
//     return (
//         <div>
//             <Layout title="Dashboard" description="Admin Dashboard">
//                 <div className="row">
//                     <div className="col-4">
//                         <div className="card-header">Create</div>
//                         <ul className="list-group">
//                             <li className="list-group-item"><Link to="/product/list">Sản phẩm</Link></li>
//                             <li className="list-group-item"><Link to="/category/list">Danh mục sản phẩm</Link></li>
//                         </ul>
//                     </div>
//                     <div className="col-8">
//                         <div className="card">
//                         <div className="card-header">Thông tin user</div>
//                         <ul className="list-group">
//                             <li className="list-group-item">Name: {user.name}</li>
//                             <li className="list-group-item">Email: {user.email}</li>
//                             <li className="list-group-item">{user.role == 1 ? 'Admin' : 'Register user'}</li>
//                         </ul>
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         </div>
//     )
// }

// export default AdminDashboard
