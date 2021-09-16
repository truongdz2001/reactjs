import React, { useState } from 'react'
import Layout from '../core/Layout';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn, authenticate, isAuthenticated } from '../auth';


const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false);

    const { user } = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToRef(true)
                    })
                    console.log(dataUser);

                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const redirectUser = () => {
        if (redirectToRef) {
            if (user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    }
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button class="btn btn-primary" type="đăng nhập">Đăng nhập</button>
            </form>
        )
    }
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
                                    <li><img src="icon/call.png" />(+84) 86523361</li>
                                    <li><img src="icon/email.png" />truongdz@gmail.com</li>
                                    <li><img src="icon/loc.png" />Location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {redirectUser()}
                {signInForm()}
                {showError()}
                {showLoading()}

            </div>
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



export default SignIn
