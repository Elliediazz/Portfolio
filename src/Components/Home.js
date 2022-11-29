import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpeg";


export default function Home(){
    return(
        <div className="home-main-div">
        <div className="background-top">
            <div className="content">
                <h1>Welcome</h1>
                <h1>to my Portfolio</h1>
                <a href="/contact"> Connect with me!</a>
            </div>
        </div>
        <div className="info-container">
            <div className="pic-div ">
                <img className="profilepic" src={ProfilePic} alt="ProfilePicture"/>
            </div>
            <div class="home-newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="single">
                                <h2>Subscribe to My Newsletter</h2>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Enter your email"/>
                                <span class="input-group-btn">
                                <button class="btn btn-theme" type="submit">Subscribe</button>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}