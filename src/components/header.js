import React from "react";
import logo from "../img/amelogo.png"
function Header(){
    return(
        <div className="componenteH">
            <img src={logo} alt="logo" className="logo"></img>
        </div>
    )
}
export default Header;