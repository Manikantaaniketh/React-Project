import React, { useContext, useState, useEffect, useRef } from "react";
import "./Nav.css";
import Lease from "/src/assets/lease.png";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu, GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LuTentTree } from "react-icons/lu";
import { FaTreeCity, FaHeart } from "react-icons/fa6";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { dataContext } from "../../Context/Usercontext";


function Nav() {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchQuery, shortlist } = useContext(dataContext);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (visible &&
        menuRef.current && !menuRef.current.contains(event.target) &&
        btnRef.current && !btnRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible]);

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const value = searchText.trim();

    if (!value) {
      alert("Please enter a destination");
      return;
    }

    const searchablePaths = ["/Trending", "/Houses", "/Rooms", "/Farm", "/Pool", "/Tent", "/Cabins", "/Shops", "/Forest"];
    const isSearchablePage = searchablePaths.some(path => location.pathname === path || location.pathname.startsWith(path + '/'));

    setSearchQuery(value.toLowerCase());

    if (!isSearchablePage || location.pathname === "/") {
      navigate(`/Trending?search=${encodeURIComponent(value.toLowerCase())}`);
    }

    setSearchText("");
  };

  const handleClear = () => {
    setSearchText("");
    setSearchQuery("");
  };

  const clearSearch = () => {
    setSearchText("");
    setSearchQuery("");
  };

  const closeMenu = () => setVisible(false);

  const isLandingPage = location.pathname === "/";

  return (
    <div id="Nav">
      {visible && (
        <div className="hamburger" ref={menuRef}>
          <Link to="/Login" onClick={closeMenu}><div className="ham1">Login</div></Link>
          <Link to="/Signup" onClick={closeMenu}><div className="ham1">Sign up</div></Link>
          <hr className="menu-divider" />
          <Link to="/Payment" onClick={closeMenu}><div className="ham1">My Bookings</div></Link>
          <Link to="/Listing" onClick={closeMenu}><div className="ham1">List your home</div></Link>
          <Link to="/About" onClick={closeMenu}><div className="ham1">About Us</div></Link>
          <Link to="/Contact" onClick={closeMenu}><div className="ham1">Help center</div></Link>
        </div>
      )}

      <div className="nav1">
        <Link to="/">
          <div className="logo">
            <img src={Lease} alt="Logo" className="logo-img" />
            <h1>Lease Hub</h1>
          </div>
        </Link>

        <div className="search">
          <input
            type="text"
            placeholder="Search Destination"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>
            <span>Search</span> <IoSearch />
          </button>
        </div>

        <div className="ham">
          <Link to="/Listing">
            <button id="btn1">List Your Home</button>
          </Link>

          <Link to="/Shortlist" className="shortlist-nav-link">
            <FaHeart className="nav-heart" />
            {shortlist.length > 0 && (
              <span className="shortlist-count">{shortlist.length}</span>
            )}
          </Link>

          <button id="btn2" ref={btnRef} onClick={() => setVisible(!visible)}>
            <GiHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      <div className="nav2">
        <NavLink to="/Trending" onClick={clearSearch}><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
        <NavLink to="/Houses" onClick={clearSearch}><div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
        <NavLink to="/Rooms" onClick={clearSearch}><div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div></NavLink>
        <NavLink to="/Farm" onClick={clearSearch}><div className="svg11"><PiFarm /><h3>Farm Houses</h3></div></NavLink>
        <NavLink to="/Pool" onClick={clearSearch}><div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div></NavLink>
        <NavLink to="/Tent" onClick={clearSearch}><div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div></NavLink>
        <NavLink to="/Cabins" onClick={clearSearch}><div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div></NavLink>
        <NavLink to="/Shops" onClick={clearSearch}><div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div></NavLink>
        <NavLink to="/Forest" onClick={clearSearch}><div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div></NavLink>
      </div>
    </div>
  );
}

export default Nav;
