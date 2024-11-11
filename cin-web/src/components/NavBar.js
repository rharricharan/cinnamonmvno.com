import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const handleHome = () => navigate('/');
  const [navbar, setNavBar] = useState(false);

  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const scrollTriggerPoint = 900;
    setScrolledPastHero(window.scrollY > scrollTriggerPoint);
    setNavBar(window.scrollY >= 80); // Set navbar active based on scroll position
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className={ navbar ? 'navbar active' : 'navbar' }>
      <nav>
        <a className={`logo ${scrolledPastHero ? 'scrolled' : 'initial'}`} onClick={handleHome}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="#ffffff">
            <path d="M17.6219 30C16.7539 30 15.8945 29.6745 15.2327 29.015C13.9093 27.6959 13.9093 25.5632 15.2327 24.2527L30.2292 9.30621C31.5526 7.98715 33.6839 7.98715 35.0074 9.30621C36.3309 10.6253 36.3309 12.7495 35.0074 14.0685L20.011 29.015C19.3492 29.6745 18.4898 30 17.6219 30Z" fill="#ffffff"/>
            <path d="M12.7835 16.1156C11.9155 16.1156 11.0561 15.7901 10.3944 15.1306L0.9926 5.75161C-0.330867 4.43255 -0.330867 2.30835 0.9926 0.989293C2.31607 -0.329764 4.45596 -0.329764 5.77083 0.989293L15.1726 10.3597C16.4961 11.6788 16.4961 13.803 15.1726 15.1221C14.5109 15.7816 13.6515 16.1071 12.7835 16.1071V16.1156Z" fill="#ffffff"/>
          </svg>
        </a>
        <div className='mid-nav'>
          <a className={`nav-link ${scrolledPastHero ? 'scrolled' : 'initial'}`}>Pricing</a>
          <a className={`nav-link ${scrolledPastHero ? 'scrolled' : 'initial'}`}>Solutions</a>
          <a className={`nav-link ${scrolledPastHero ? 'scrolled' : 'initial'}`}>Company</a>
        </div>
        <div className='ss-bttn'>
          <a className="nav-contact">Contact Us</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;