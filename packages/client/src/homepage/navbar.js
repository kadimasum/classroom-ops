import React from "react";
import './homepage.css'
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <div className="nav_container">
            <div className="nav_wrapper">
                <div className="logo_wrapper">
                    <h2>ClassroomOps</h2>
                </div>
                <div className="nav_items_wrapper">
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/FAQs">FAQs</NavLink>
                    <button className="signup_btn">Sign Up</button>
                    <button className="login_btn">Login</button>
                </div>
            </div>
        </div>
    )
}