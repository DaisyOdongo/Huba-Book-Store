import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer class="footer">
        <div class="row">
            <div class="col-sm-6 col-md-4 footer-navigation">
                <h3><a href="#">Huba<span>BookStore</span></a></h3>
                <p class="links"><a href="#">Home</a><strong> &middot; </strong><a href="#">Pricing</a><strong> &middot; </strong><a href="#">About</a><strong> &middot; </strong><a href="#">Faq</a><strong> &middot; </strong><a href="#">Contact</a></p>
                <p class="company-name">HUBABOOKSTORE.COM &copy; 2020</p>
            </div>
            <div class="col-sm-6 col-md-4 footer-contacts">
                <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                    <p><span class="new-line-span">21 Revolution Street</span>NY, USA</p>
                </div>
                <div><i class="fa fa-phone footer-contacts-icon"></i>
                    <p class="footer-center-info email text-left"> +1 9485045958</p>
                </div>
                <div><i class="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="#" target="_blank">support@hubabookstore.com</a></p>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-4 footer-about">
                <h4>About the company</h4>
                <p>Hubabookstore.com is one of the leading website for online books.</p>
                <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;