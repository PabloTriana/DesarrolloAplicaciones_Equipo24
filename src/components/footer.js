import React from "react";
function Footer(props) {
    return (
        <div className="componenteF">
            <h2>{props.children}</h2>
        </div>
    )
}
export default Footer;