import React from "react";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";

const Applayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Applayout;