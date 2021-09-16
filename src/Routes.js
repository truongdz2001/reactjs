import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Header from './core/header';
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import UserDashboard from './user/userDashboard';
import AdminRoute from './auth/adminRoute';
import Outproduct from './components/outproduct';
import CategoryAPI from './api/categoryAPI';
import ProductAPI from './api/productAPI';
import AboutMenu from './pages/aboutMenu';
import NewAbout from './components/newAbout';
import ProductList from './pages/admin/page/product/product';
import CategoryList from './pages/admin/page/category/category';
import AdminDashboard from './pages/admin/page/dashboard/dashboard';
import ProductAdd from './pages/admin/page/product/addProduct';
import ProductDetailPage from './pages/product-detail';
import CategoryAdd from './pages/admin/page/category/addCategory';

import ProductEditPage from './pages/admin/page/product/editProduct';


const Routes = (props) => {
    return (
        <Router>
            {/* <Header /> */}
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route exact path="/outproduct">
                    <Outproduct />
                </Route>
                <Route exact path="/aboutmenu">
                    <AboutMenu />
                </Route>
                <Route exact path="/about" >
                    <NewAbout />
                </Route>
                <Route exact path="/product/list" >
                    <ProductList {...props}/>
                </Route>
                <Route exact path="/category/list" >
                    <CategoryList {...props}/>
                </Route>
                <Route exact path="/product/add"  >
                    <ProductAdd {...props} />
                </Route>
                <Route exac path="/product/editProduct">
                    <ProductEditPage />
                </Route>
                <Route exact path="/category/add"  >
                    <CategoryAdd {...props} />
                </Route>
                <Route exact path="/product/detail" >
                    <ProductDetailPage />
                </Route>
                <Route path="*" exact component={NotFound} />
            </Switch>
            <Switch>
                <Route exact path="/admin/:path?/:path?">
                    <AdminRoute exact path="/admin/dashboard">
                        <AdminDashboard />
                    </AdminRoute>
                </Route>
                <Route exact path="/user/:path?/:path?">
                    <PrivateRoute exact path="/user/dashboard">
                        <UserDashboard />
                    </PrivateRoute>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;