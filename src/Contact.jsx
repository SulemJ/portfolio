import React from "react";

function Contact(params) {


    return <div  id="contact" class=" container">
         <p  class="center p-5 pb-3 " >Get in touch</p>
        <div class="  py-12 m-5 pb-5 "> 
            
             <ul class="nav col-md-10 col-sm-4 list-unstyled  d-flex up center">
      <li class="ms-3 up "><a class="up text-body-secondary"  target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi up " src="\pics\linkedin.svg"></img></a></li>
      <li class="ms-3 up "><a class="up text-body-secondary" target="_blank" href="https://github.com/SulemJ"><img class="bi up " src="\pics\github.svg"></img></a></li>
      <li class="ms-3 up"><a class="up text-body-secondary" target="_blank" href="https://t.me/HBMme"><img class="bi up " src="pics\telegram.svg" ></img></a></li>
      {/* <li class="ms-3 up"><a class="up text-body-secondary px-3 mx-4" target="_blank" href="https://t.me/HBMme"><img class="bi up " src="pics\gmail.svg" ></img></a></li> */}
      <li class="ms-3 up"><a class="up text-body-secondary"   target="_blank" href="https://leetcode.com/u/susuJibril/"><img class="bi up " src="pics\leetcode.svg" ></img></a></li>
    </ul>
        </div>
    </div>
}






export default Contact;