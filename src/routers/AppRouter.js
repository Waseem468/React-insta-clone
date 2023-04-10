import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "../components/Posts/ListAll/AllPosts";
import LandingPage from "../components/LandingPage/LandingPage";
import NewPost from "../components/New post/NewPost";
import Postview from "../components/Postview/Postview";


export default function AppRouter() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="posts" element={<Postview/>} >
                <Route path="ListAll" element={<AllPosts />} />
                <Route path="NewPost" element={<NewPost/>} />
            </Route>
        </Routes>
    </BrowserRouter>
}