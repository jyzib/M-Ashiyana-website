import React from "react";
const getInTouch = () => {
    return (
        <div className="getIntouch">
            <div className="mainBodygit">
                <div className="headinGit">
                    <div className='headLineGit' >
                        <h2>Get in Touch</h2>
                    </div>
                    <h2 className='SublineGit' >For News,Update and Promotional Events</h2>
                </div>
                <div className="searchBar">
                    <input className="search" type="text" placeholder="Enter Your Email Address"></input>
                    <button class="button">Subscribe</button>
                </div>
            </div>
            <div className="contacts">
                <h3>Share us on:</h3>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}
export default getInTouch;