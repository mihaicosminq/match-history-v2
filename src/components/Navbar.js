import {
    Link,
    Outlet,
} from "react-router-dom";
import image from "./xayah.png"
import "./Navbar.css"


function Navbar() {

    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary">
                <div
                    className="container-fluid">
                    <span
                        className="navbar-brand"
                        href="#">
                        <img width="80"
                             src={image}/>
                    </span>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav">
                        <ul className="navbar-nav"
                            style={{alignItems: "center"}}>
                            <li className="nav-item"
                            >
                                <span>
                                    <Link
                                        style={{textDecoration: "none"}}
                                        to="/">Home
                                    </Link>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span
                                    className="nav-link">
                                    <Link
                                        className="textLink"
                                        to="/champions">Champions</Link>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span
                                    className="nav-link">
                                     <Link
                                         style={{textDecoration: "none"}}
                                         to="/challenger">Challenger
                            Leaderboard</Link>


                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Outlet/>


        </>
    )
}


export default Navbar;