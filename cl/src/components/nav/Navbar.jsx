import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks, customerLoggedNavLinks } from "../../helpers/navbarLinks";
import SignoutConfirmModal from "../modals/SignoutConfirmModal";
import { Menu, X } from "react-feather";
import "./N.css";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { loggedIn, getLoggedIn } = useContext(AuthContext);
    const navigation = loggedIn.state ? customerLoggedNavLinks : navLinks;
    const { items } = useContext(CartContext);
    const itemCount = items.length;

    const logout = async () => {
        await axios.get("/users/logout");
        await getLoggedIn();
        navigate("/");

        localStorage.clear();
        setTimeout(() => window.location.reload(), 3);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`text-gray-800 ${window.location.pathname === "/" ? "bg-lighter-blue" : ""}`}>
            {showModal && (
                <SignoutConfirmModal setShowModal={setShowModal} execute={logout} />
            )}
            <div className="flex mx-auto max-w-screen-2xl justify-between items-center px-4 min-h-12 relative">
                <Link to="/">
                    <img src={LogoBlue} alt="blue-logo" className="logo" />
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? <X className="w-8 h-8 text-light-blue" /> : <Menu className="w-8 h-8 text-light-blue" />}
                    </button>
                </div>
                <nav className={`md:flex ${menuOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
                    {navigation.map((navLink, index) =>
                        navLink.name === "Cart" && loggedIn.role === "customer" ? (
                            <div key={index} className="relative flex items-center py-2 px-4">
                                <Link className="font-semibold text-lg" to={navLink.path}>
                                    {navLink.name}
                                </Link>
                                <span className="ml-2 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-light-blue rounded-full">
                                    {itemCount}
                                </span>
                            </div>
                        ) : (
                            <Link className="mx-5 font-semibold text-lg block py-2 px-4" to={navLink.path} key={index}>
                                {navLink.name}
                            </Link>
                        )
                    )}
                    {loggedIn.state ? (
                        <button
                            className="ml-5 font-semibold text-lg bg-[#11B4F5] text-white py-3 px-8 rounded-full block mx-4 my-2 transition-colors duration-300 hover:bg-[#9DD6F7]"
                            onClick={() => setShowModal(true)}
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link
                        className="ml-5 font-semibold text-lg bg-[#11B4F5] text-white py-1.5 px-8 rounded-full block mx-4 my-1"
                        to="/auth/login"
                    >
                        Sign In
                    </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
