import React from 'react';
import circle_icon from "../../images/circle_icon.svg"
import camera_icon from "../../images/camera_icon.png"
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Postview() {

    const navigate = useNavigate();

    return <>
        <div id='main-container'>
            <header id='head-container'>
                <section id='left-section' onClick={() => navigate("ListAll")}>
                    <div id='img-container'>
                        <img src={circle_icon} alt="circle_icon" />
                    </div>
                    <h2>Instaclone</h2>
                </section>

                <section id='right-section'>
                    <div id='img-container'>
                        <Link to={"NewPost"} >
                            <img src={camera_icon} alt="camera_icon" />
                        </Link>
                    </div>
                </section>
            </header>

            <div id='posts'>
                <Outlet />
            </div>
        </div>
    </>
}
