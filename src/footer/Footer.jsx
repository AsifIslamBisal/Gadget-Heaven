import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div><br /><br />
            <hr />
            <footer className="footer pt-12 pl-52 ">
  <nav>
    <h4 className="font-bold text-xl">Services</h4>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;