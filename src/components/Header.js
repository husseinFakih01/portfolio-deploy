import React from "react";
import Typed from "react-typed";

const Header = ()=> {

    return(
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <Typed
                className="typed-text"
                strings={["Welcome", "To My","Website"]}
                typeSpeed={40}
                backSpeed={60}
                loop

                />

            </div>
     </div>

    )
}

export default Header;