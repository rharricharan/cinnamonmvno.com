import React from 'react';
import { useState, useEffect } from 'react';
import { navigate } from 'react';
import './navbar.css';

const NavBar = () => {

    const handleHome = () => {
        navigate('/');
    }

  // State to track if we've scrolled past the hero section
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value (e.g., 400) based on where you want the color change to happen
      const scrollTriggerPoint = 900;

      if (window.scrollY > scrollTriggerPoint) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to handle mouse events for showing/hiding dropdown
  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  // Define the styles for the text and logo
  const textColor = scrolledPastHero ? '#1a1a1a' : '#fff'; // Change colors based on scroll
  const logoColor = scrolledPastHero ? '#1a1a1a' : '#fff'; // Same for logo SVG

    return (
        <div className='nav-wrapper'>
            <nav>
                <a className="logo" style={{ fill: logoColor }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill={logoColor}>
                        <path d="M17.6219 30C16.7539 30 15.8945 29.6745 15.2327 29.015C13.9093 27.6959 13.9093 25.5632 15.2327 24.2527L30.2292 9.30621C31.5526 7.98715 33.6839 7.98715 35.0074 9.30621C36.3309 10.6253 36.3309 12.7495 35.0074 14.0685L20.011 29.015C19.3492 29.6745 18.4898 30 17.6219 30Z" fill={logoColor}/>
                        <path d="M12.7835 16.1156C11.9155 16.1156 11.0561 15.7901 10.3944 15.1306L0.9926 5.75161C-0.330867 4.43255 -0.330867 2.30835 0.9926 0.989293C2.31607 -0.329764 4.45596 -0.329764 5.77083 0.989293L15.1726 10.3597C16.4961 11.6788 16.4961 13.803 15.1726 15.1221C14.5109 15.7816 13.6515 16.1071 12.7835 16.1071V16.1156Z" fill={logoColor}/>
                    </svg>
                </a>
                <div className="mid-nav" style={{ color: textColor }}>
                    <a className="nav-link" style={{ color: textColor }}>Pricing</a>
                    <a className="nav-link" style={{ color: textColor }}>Solutions</a>
                    <a className="nav-link" style={{ color: textColor }}>Company</a>
                </div>
                <a className="nav-contact">contact us</a>
            </nav>
        </div>
    )
}

export default NavBar;