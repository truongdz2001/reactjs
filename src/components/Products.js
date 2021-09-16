import React from 'react'
import { Link } from 'react-router-dom';
import { API } from '../config';
const Products = (props) => {
  console.log(props);
  return (
    <div className="">
      
      <div className="row">
        <div className="slider_section">
          <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="first-slide" src="images/banner.jpg" alt="First slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <span>All New Phones </span>
                    <h1>up to 25% Flat Sale</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content
                  <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    <a className="buynow" href="#">Buy Now</a>
                    <ul className="social_icon">
                      <li> <a href="#"><i className="fa fa-facebook-f" /></a></li>
                      <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                      <li> <a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="second-slide" src="images/banner.jpg" alt="Second slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <span>All New Phones </span>
                    <h1>up to 25% Flat Sale</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content
                  <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    <a className="buynow" href="#">Buy Now</a>
                    <ul className="social_icon">
                      <li> <a href="#"><i className="fa fa-facebook-f" /></a></li>
                      <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                      <li> <a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="third-slide" src="images/banner.jpg" alt="Third slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <span>All New Phones </span>
                    <h1>up to 25% Flat Sale</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content
                  <br /> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    <a className="buynow" href="#">Buy Now</a>
                    <ul className="social_icon">
                      <li> <a href="#"><i className="fa fa-facebook-f" /></a></li>
                      <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                      <li> <a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <i className="fa fa-angle-left" />
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
        

      </div>

     <div>
  
</div>

          </div>

  )
}

export default Products
