import React from "react";
import "./Topbar.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/nav-logo-colored.png";
import { MdLocationPin } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar" name='top'>

      <div className="topbar-content container">

        <div className="address bar-box1 hide">

          <div className="address-header">
            <p><span>
            <MdLocationPin />
          </span> 721 S. A Street, 1st Floor, Oxnard CA 93030</p>
          </div>
        </div>

        <div className="email bar-box2">
          <div>
            <p><span><FiMail/></span> Info@OxnardRehab.biz</p>
          </div>
        </div>

        <div className="number bar-box3">
          <div>
            <p><span><AiOutlinePhone /></span><a href="tel:3237920535"> (323) 792-0535</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
