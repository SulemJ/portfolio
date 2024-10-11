import React from "react";
import {
  AiOutlineFile,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
function Header(params) {
    return <div id="header" >
    <nav class="navbar justify-content-center navbar-expand-lg   pt-1 pb-1  border-top ">
      <div class="container-fluid ">
        <a href="/" class=" d-flex align-items-center mb-3 mb-md-0 me-md-auto  link-body-emphasis text-decoration-none">      
          <img src="/pics/s1.svg" alt="s." width={100} />
        </a>
        <button class="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
  
        <div class="collapse  navbar-collapse " id="navbarNav">
          <ul class="navbar-nav  nav ms-auto justify-content-end mx-5">
            <li class="nav-item  mx-2"><a href="#home" class="nav-link  link" aria-current="page"><AiOutlineHome style={{ marginBottom: "7px" }} />Home</a></li>
            <li class="nav-item  mx-2"><a href="#about" class="nav-link link">< AiOutlineUser style={{ marginBottom: "2px" }} />About</a></li>
            <li class="nav-item  mx-2"><a href="#project" class="nav-link link"><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />Projects</a></li>
            <li class="nav-item  mx-2"><a target="_blank" href="https://docs.google.com/document/d/1PkJBPl6V0cdl9krGj5rs3hMds1QWqiZU3pF7WwGjprA/edit?usp=sharing" class="nav-link link"><AiOutlineFile style={{ marginBottom: "2px" }} />Resume</a></li>
            <li class="nav-item  mx-2"><a href="#contact"  class="nav-link link"><AiOutlinePhone style={{ marginBottom: "1px" }} />Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
</div>
}
export default Header;