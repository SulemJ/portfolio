import React from "react";


function Project (params) {
  return  <div id="project" class=" container">
    <p class="p-5 pb-3  center">My Projects</p>
   <div class="album py-5 ">
    <div >
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" src="pics/door.png" alt="" />
             <div class="card-body">
              <p class="card-text">
              A web app that allows users to post jobs, service providers to register & apply for tasks; admins to manage registrations & approvals.
              </p>
              <div class="icons ">
              <i class="fab devicon-css3-plain-wordmark colored m-2"></i>
              <img width={50} class="mb-5 " src="pics/ejs.svg" alt="" />
              <i class="fab devicon-bootstrap-plain-wordmark colored m-2"></i>
              <i class="fab devicon-postgresql-plain-wordmark colored m-2"></i>
              <i class="fab devicon-nodejs-plain-wordmark colored m-2"></i>
              <i class="fab devicon-express-original colored m-2"></i>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"> </div>
                  <a href="https://door-to-door-service-system-1.onrender.com/" target="_blank"> <button type="button" class="btn btn-lg btn-outline-secondary">View Site</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" src="pics/makeup.png" alt="" />
             <div class="card-body">
              <p class="card-text">
              An elegant platform that offers product recommendations of over 1000 products to help users explore makeup products.
               </p>
              <div class="icons ">
              <i class="fab devicon-css3-plain-wordmark colored m-2"></i>
              <i class="fab devicon-bootstrap-plain-wordmark colored m-2"></i>
              <img width={50} class="mb-5 " src="pics/api.svg" alt="" />
              <i class="fab devicon-nodejs-plain-wordmark colored m-2"></i>
              <i class="fab devicon-express-original colored m-2"></i>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"> </div>
                  <a href="https://make-beauty-316z.onrender.com/" target="_blank"> <button type="button" class="btn btn-lg btn-outline-secondary">View Site</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src="pics/bookreview.png" class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" alt="" /> <div class="card-body">
              <p class="card-text">A space dedicated to literature enthusiasts, allows users to explore, review, and discuss novels from various genres.</p>
              <div class="icons ">
              <i class="fab devicon-css3-plain-wordmark colored m-2"></i>
              <i class="fab devicon-bootstrap-plain-wordmark colored m-2"></i>
              <i class="fab devicon-postgresql-plain-wordmark colored m-2"></i>
              <img width={50} class="mb-5 " src="pics/api.svg" alt="" />
              <i class="fab devicon-nodejs-plain-wordmark colored m-2"></i>
              <i class="fab devicon-express-original colored m-2"></i>
              </div>
              <div class="d-flex justify-content-between align-items-center ">
                <div class="btn-group"></div>
                <a href="https://novel-note.onrender.com/" target="_blank"> <button type="button" class=" btn btn-lg btn-outline-secondary">View Site</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" src="pics/store.png" alt="" />
             <div class="card-body">
              <p class="card-text">
             A simple app where users can browse items, product details, and experience clean UI that simulates a real e-commerce app.</p>
              <div class="icons ">
              <i class="fab devicon-react-original-wordmark colored"></i>

              <i class="fab devicon-bootstrap-plain-wordmark colored m-2"></i>
              <img width={50} class="mb-4 " src="pics/api.svg" alt="" />
              <i class="fab devicon-nodejs-plain-wordmark colored m-2"></i>
              <i class="fab devicon-express-original colored m-2"></i>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"> </div>
                <a href="https://online-store-idzf.onrender.com/" target="_blank"> <button type="button" class="btn btn-lg btn-outline-secondary">View Site</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src="pics/blog.png" class="bd-placeholder-img card-img-top" role="img" width="100%" height="225" alt="" /> 
          <div class="card-body">
              <p class="card-text">A dynamic blog platform With a simple and user-friendly design where users share their thoughts, ideas, and experiences. </p>
              <div class="icons ">
              <i class="fab devicon-css3-plain-wordmark colored m-2 "></i>
              <i class="fab devicon-javascript-plain colored m-2 "></i>
              <i class="fab devicon-bootstrap-plain-wordmark colored m-2 "></i>
              <i class="fab devicon-nodejs-plain-wordmark colored m-2 "></i>
              <img width={45}  class="mb-5 " src="pics/ejs.svg" alt="" />
              <i class="fab devicon-express-original colored m-2 "></i>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"></div>
                <a href="https://blog-spot-website.onrender.com/" target="_blank"> <button type="button" class=" btn btn-lg btn-outline-secondary">View Site</button></a>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>
</div>
</div>
}
 export default Project;