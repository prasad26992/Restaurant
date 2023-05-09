import React from "react";
import { NavLink } from "react-router-dom";
//import classes from "./Home.module.css";

function Home() {
  return (
    <>  

      <div className="container ">
        <div className="row div">

          <div className="sidebar col-md-6 ">
          <NavLink to="/blank">back</NavLink>
            <h4 className="mt-4">Create Dashboard</h4>
            <li><span> <i className="ri-repeat-one-line"></i></span>
              Dashboard
            </li>
            <li> <span><i className="ri-repeat-one-line"></i></span>
              Select
            </li>
          </div>
         
          <div className="col-md-6 my-5">
            <h2>dashboard information</h2>

            <label>dashboard Name</label>
            <br></br>
            
            <input type="text"></input>
            <br></br>
            

            <div className="mt-3">
        <input type="radio" value="Male" name="gender" /> Only Me <br></br>
        <input type="radio" value="Female" name="gender" /> EveryOne<br></br>
        <input type="radio" value="Other" name="gender" /> Other<br></br>
        </div>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
