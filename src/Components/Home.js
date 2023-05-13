import React from "react";
import '../Styling/Components.css'
import ProfilePic from "../Styling/ProfilePic.jpeg";


export default function Home(){
    return(
        <div className="home-main-div">
        <div className="background-top">
            <div className="content">
                <div className="content-header">
                <h1>Welcome</h1>
                <h1>to my Portfolio</h1>
                </div>
                <a href="/contact"> Connect with me!</a>
            </div>
        </div>
        <div className="info-container">
            <div className="pic-div ">
                <img className="profilepic" src={ProfilePic} alt="ProfilePicture"/>
            </div>
            <div className="home-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single">
                                <h2>Subscribe to My Newsletter</h2>
                                <div className="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your email"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-theme" type="submit">Subscribe</button>
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