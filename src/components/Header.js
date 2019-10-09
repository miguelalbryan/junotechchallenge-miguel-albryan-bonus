import React from "react"
import '../styling/Header.css';
function Header(){
    return(
    <div className="header">
    
        <div className="container clearfix">
             <img id="logo" src={require('./tiff-logo-white.png')} alt="Tiff Logo" />
            
                <nav>
                    <a href="">Example</a>
                    <a href="">Nav</a>
                    <a href="">Bar</a>
                </nav>
        </div>
    </div>

    )
}

export default Header