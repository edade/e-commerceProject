import React from "react";

const Footer = () => {
  return (

<div className="lg:w-full sm:min-w-min flex flex-col lg:items-center sm:items-center sm:justify-center justify-around gap-y-16 bg-[#252B42] font-['montserrat']">
<div className="lg:items-start  sm:w-[80%] sm:items-center sm:justify-center  flex flex-col h-60 py-4  text-white lg:flex-row lg:w-[95%] lg:h-[8.875rem] lg:py-10 lg:justify-between">
  <div className="flex flex-col text-left">
    <h3 className="font-bold text-2xl leading-8 tracking-wide">
      Consulting Agency For Your Business
    </h3>
    <p className="text-sm leading-5 tracking-wider">
      the quick fox jumps over the lazy dog
    </p>
  </div>
  <button className="text-white bg-[#23A6F0] py-3 px-8 rounded">
    Contact Us
  </button>
</div>
<div className="w-full row-centered  text-white">
  <div className="lg:w-[90%] sm:w-[90%] lg:ml-9 sm:ml-14 flex flex-col justify-between gap-y-8 lg:flex-row text-left">
    <div className="footer-div">
      <p className=" mb-4 font-[600]">Company Info</p>
      <div className="flex flex-col gap-y-2.5">
        <a href="#">About Us</a>
        <a href="#">Carrier</a>
        <a href="#">We are hiring</a>
        <a href="#">Blog</a>
      </div>
    </div>
    <div className="footer-div">
      <p className="mb-4 font-[600]">Legal</p>
      <div className="flex flex-col gap-y-2.5">
        <a href="#">About Us</a>
        <a href="#">Carrier</a>
        <a href="#">We are hiring</a>
        <a href="#">Blog</a>
      </div>
    </div>
    <div className="footer-div">
      <p className="mb-4 font-[600]">Features</p>
      <div className="flex flex-col gap-y-2.5">
        <a href="#">Business Marketing</a>
        <a href="#">User Analytic</a>
        <a href="#">Live Chat</a>
        <a href="#">Unlimited Support</a>
      </div>
    </div>
    <div className="footer-div">
      <p className="mb-4 font-[600]">Resources</p>
      <div className="flex flex-col gap-y-2.5">
        <a href="#">IOS & Android</a>
        <a href="#">Watch a Demo</a>
        <a href="#">Customers</a>
        <a href="#">API</a>
      </div>
    </div>
    <div className="footer-div">
      <p className="mb-4 font-[600]">Get In Touch</p>
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center">
        <img className="h-[1rem] w-[1rem] mr-1" src="./img/contact.png" alt="Home" />
          <p>(480) 555-0103</p>
        </div>
        <div className="flex items-center">
        <img className="h-[1rem] w-[1rem] mr-1" src="./img/map.png" alt="Home" />
          <p>4517 Washington Ave.</p>
        </div>
        <div className="flex items-center">
        <img className="h-[1rem] w-[1rem] mr-1 " src="./img/email.png" alt="Home" />
          <p>debra.holt@example.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-row lg:w-[95%] h-32 items-center justify-between mt-16 text-left">
  <h6 className="font-bold text-sm leading-8 tracking-wider text-white">
    Made With Love By Finland All Right Reserved 
  </h6>
  <div className="flex gap-x-5">
  <img className="h-[1.7rem] w-[1.7rem] " src="./img/facebook.png" alt="Home" />
  <img className="h-[1.7rem] w-[1.7rem]" src="./img/instagram.png" alt="Home" />
  <img className="h-[1.7rem] w-[1.7rem]" src="./img/twitter.png" alt="Home" />
  </div>
</div>
    </div>
  );
};

export default Footer;