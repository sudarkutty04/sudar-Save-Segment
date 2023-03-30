import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="segment">Segment</NavLink>
                </li>
            </ul>
        </nav> 
        );
}

export default Navbar;