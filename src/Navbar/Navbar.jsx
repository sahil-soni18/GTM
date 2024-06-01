import React, { useRef, useState } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Correct import path for react-icons/fa

const NavbarComponent = () => {
    const navRef = useRef();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const hideDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <nav className={styles['main-container']}>
                <Logo />
                <div ref={navRef} className={styles['menu-link']}>
                    <ul>
                    <li>
                             <NavLink to='/home' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Home</NavLink>
                         </li>
                         <li className={styles.dropdownContainer} onMouseEnter={toggleDropdown} onMouseLeave={hideDropdown}>
                             <NavLink to='/service' className={styles["navlinks","service"]} >Service</NavLink>
                             {showDropdown && (
                                <div className={styles.dropdownContent}>
                                    <NavLink to='/service/service1'>Cloud-Service</NavLink>
                                    <NavLink to='/service/service2'>Seo-Service</NavLink>
                                    <NavLink to='/service/service3'>Web Development</NavLink>
                                    <NavLink to='/service/service3'>Android Development</NavLink>
                                </div>
                            )}
                        </li>
                        <li>
                            <NavLink to='/products' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Products</NavLink>
                         </li>
                         <li>
                             <NavLink to='/team' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Team</NavLink>
                         </li>
                         <li>
                             <NavLink to='/blogs' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Blogs</NavLink>
                         </li>
                         <li>
                             <NavLink to='/carrier' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Carrier</NavLink>
                         </li>
                         <li>
                             <NavLink to='/director' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Director</NavLink>
                         </li>
                         <li>
                             <NavLink to='/aboutus' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>About us</NavLink>
                         </li>
                         <li>
                             <NavLink to='/' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Contact Us</NavLink>
                         </li>
                    </ul>
                    <button
                        className={`${styles['nav-btn']} ${styles['nav-close-btn']}`}
                        onClick={toggleDropdown}>
                        <FaTimes />
                    </button>
                </div>
                <button
                    className={styles['nav-btn']}
                    onClick={toggleDropdown}>
                    <FaBars />
                </button>
            </nav>
        </>
    );
};

export default NavbarComponent; // Changed the export name to match the component name
