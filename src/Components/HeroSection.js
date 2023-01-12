import React from "react";
import $ from "jquery";

export default function HeroSection() {
  $("#myvideo").hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
      this.removeAttribute("controls");
    } else {
      this.setAttribute("controls", "controls");
    }
  });
  return (
    <div className="hero-section">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 p-0 m-0">

      <div className="rowabc">

       <div className="col-md-6">
          <img src="./Asserts/Picture1.png" className="Pic"/>
       </div>

        <div className="col-md-6">
        <img src="./Asserts/Iphone123.jpg" className="Iphone"/>
        </div>

      </div>

            <div className="text-center">
              <a
                href="#"
              >
                {" "}
                Chart
              </a>
              <a href="#">
                Telegram
              </a>
              <a href="#">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
