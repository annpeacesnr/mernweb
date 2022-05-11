import React from "react";

const Services = () => {
  return (
    <div>
      <div id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-microphone fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Recording and Mixing</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-home fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Studio Bookings</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-phone fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Contact Support</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-music fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Sound Production</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-address-book fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Corporate Support</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <div class="card-body text-center">
                    <i className="fa fa-desktop fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Online Support</h5>
                  <p class="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
