import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location
  const [navbar, setNavBar] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define route-specific settings
  const isHomePage = location.pathname === '/pricing';
  const isSolutionsPage = location.pathname === '/solutions';
  const isCompanyPage = location.pathname === '/company';

  // Scroll handler to change navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggerPoint = 900;
      const hasScrolled = window.scrollY > scrollTriggerPoint;
      setScrolledPastHero(hasScrolled);
      setNavBar(hasScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!setIsMobileMenuOpen);
  }
  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <nav>
        <a className={`logo ${scrolledPastHero ? '#1a1a1a' : '#ffffff'}`} onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill={scrolledPastHero ? '#1a1a1a' : '#ffffff'}>
            <path d="M17.6219 30C16.7539 30 15.8945 29.6745 15.2327 29.015C13.9093 27.6959 13.9093 25.5632 15.2327 24.2527L30.2292 9.30621C31.5526 7.98715 33.6839 7.98715 35.0074 9.30621C36.3309 10.6253 36.3309 12.7495 35.0074 14.0685L20.011 29.015C19.3492 29.6745 18.4898 30 17.6219 30Z" fill={scrolledPastHero ? '#1a1a1a' : '#ffffff'} />
            <path d="M12.7835 16.1156C11.9155 16.1156 11.0561 15.7901 10.3944 15.1306L0.9926 5.75161C-0.330867 4.43255 -0.330867 2.30835 0.9926 0.989293C2.31607 -0.329764 4.45596 -0.329764 5.77083 0.989293L15.1726 10.3597C16.4961 11.6788 16.4961 13.803 15.1726 15.1221C14.5109 15.7816 13.6515 16.1071 12.7835 16.1071V16.1156Z" fill={scrolledPastHero ? '#1a1a1a' : '#ffffff'} />
          </svg>
        </a>
        <div className={`mid-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a className={`nav-link ${isHomePage ? 'pricing-active' : ''} ${scrolledPastHero ? 'scrolled' : 'initial'}`} onClick={() => navigate('/pricing')}>Pricing</a>
          <a className={`nav-link ${isSolutionsPage ? 'solutions-active' : ''}`} onClick={() => navigate('/solutions')}>Solutions</a>
          <a className={`nav-link ${isCompanyPage ? 'company-active' : ''}`} onClick={() => navigate('/company')}>Company</a>
        </div>
        <div className='ss-bttn'>
          <a className="nav-contact" onClick={() => navigate('/contact')}>Contact Us</a>
          <a className='hamburger-menu' onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={scrolledPastHero ? '#1a1a1a' : '#ffffff'}>
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill={scrolledPastHero ? '#1a1a1a' : '#ffffff'} />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
