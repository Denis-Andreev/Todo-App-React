import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => (
    <nav className={"navbar navbar-dark navbar-expand-lg text-light bg-dark"}>
        <div className="navbar-brand">
            Notes app
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    to={"/"}
                    className="nav-link"
                    exact
                    activeClassName="active"
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to={"/about"}
                    className="nav-link"
                    activeClassName="active"
                >About</NavLink>
            </li>
        </ul>
    </nav>
)