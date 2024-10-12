import React from "react";
function Footer(params) {
         const d = new Date();
         let year = d.getFullYear();
   return <div id="footer" > 
    <footer class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
    <div class="col-md-4 d-flex align-items-center ">
      <span class="mb-3 mb-md-0 text-body-secondary bold ">
        &copy;{year} Sulem Jibril Dawud</span>
    </div>

    <ul class="nav col-md-4 justify-content-end mx-5 list-unstyled  d-flex ">
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi  " width="24" height="24" src="pics\linkedin.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://github.com/SulemJ"><img class="bi  " width="24" height="24" src="pics\github.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://t.me/HBMme"><img class="bi  " width="24" height="24" src="pics\telegram.svg" ></img></a></li>
    </ul>
</footer>
</div>
}
export default Footer;