import React, { useState, useEffect } from "react";
import "./css/navbar.css";

const Nav = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else setScroll(false);
        });
    }, []);
    return (
        <div className={`nav ${scroll && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />

            <img
                className="user"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="user"
            />
        </div>
    );
};

export default Nav;
