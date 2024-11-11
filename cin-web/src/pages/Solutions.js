import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './solutions.css';

function Solutions() {
    return (
        <div className="company-wrapper">
            <NavBar />
            <div className="company-hero">
                <div className="left-hero">
                    <h2 className="left-title">
                        We believe in creating solutions that feel as natural as a face-to-face conversation.
                    </h2>
                    <h3 className="left-p">
                        From enterprise teams to small businesses, we’re committed to enhancing how you connect. Our technology supports real human interactions—no frustration, just smooth, reliable communication.
                    </h3>
                    <div className="bttn-container-company-hero">
                        <a className="company-hero-bttn">
                            Get started
                            {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                            </svg>*/}
                        </a>
                    </div>
                </div>
                <div className="right-hero">
                    <img src="/sol-1.jpg" />
                </div>
            </div>
            <div className="industry-wrapper">
                <div className="industry-top">
                    <h2 className="industry-title">Designed for Every Industry</h2>
                </div>
                <div className="industry-slide">
                    <div className="industry-card">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                                Finance
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z" fill="#290B00"/>
                             </svg>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Build trust with secure, reliable communication. Cinnamon ensures that your conversations with clients are clear, safe, and dependable, enabling you to deliver exceptional service.</h3>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                                Healthcare
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.364 10.98C19.926 12.541 19.926 15.074 18.364 16.636L12.707 22.293C12.317 22.683 11.683 22.683 11.293 22.293L5.63598 16.636C4.07398 15.074 4.07398 12.541 5.63598 10.979C7.19798 9.417 9.73098 9.417 11.293 10.979L11.999 11.686L12.707 10.979C14.269 9.417 16.802 9.417 18.364 10.979V10.98ZM7.04998 12.392C6.26998 13.173 6.26998 14.44 7.04998 15.221L12 20.171L16.95 15.221C17.73 14.44 17.73 13.173 16.95 12.392C16.169 11.612 14.902 11.612 14.12 12.394L11.998 14.512L9.87798 12.392C9.09798 11.612 7.83098 11.612 7.04998 12.392V12.392ZM12 1C14.21 1 16 2.79 16 5C16 7.21 14.21 9 12 9C9.78998 9 7.99998 7.21 7.99998 5C7.99998 2.79 9.78998 1 12 1ZM12 3C10.895 3 9.99998 3.895 9.99998 5C9.99998 6.105 10.895 7 12 7C13.105 7 14 6.105 14 5C14 3.895 13.105 3 12 3Z" fill="#290B00"/>
                            </svg>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Consistency and clarity are critical in healthcare. Cinnamon keeps professionals connected with patients and colleagues, ensuring that every conversation is as seamless as it is secure.</h3>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                                Retail
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 16V4H2V2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V15H18.438L20.438 7H8V5H21.72C21.872 5 22.022 5.03466 22.1586 5.10134C22.2952 5.16801 22.4148 5.26495 22.5083 5.38479C22.6019 5.50462 22.6668 5.6442 22.6983 5.79291C22.7298 5.94162 22.7269 6.09555 22.69 6.243L20.19 16.243C20.1358 16.4592 20.011 16.6512 19.8352 16.7883C19.6595 16.9255 19.4429 17 19.22 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V16ZM6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23ZM18 23C17.4696 23 16.9609 22.7893 16.5858 22.4142C16.2107 22.0391 16 21.5304 16 21C16 20.4696 16.2107 19.9609 16.5858 19.5858C16.9609 19.2107 17.4696 19 18 19C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z" fill="#290B00"/>
                            </svg>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Stay close to your customers, wherever they are. With Cinnamon, customer support teams are empowered to respond swiftly and efficiently, keeping your brand experience consistent.</h3>
                        </div>
                    </div>
                    <div className="industry-card">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                                Transport & Logistics
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.965 18C8.84612 18.8343 8.43021 19.5977 7.79368 20.1499C7.15714 20.7022 6.34272 21.0063 5.5 21.0063C4.65728 21.0063 3.84286 20.7022 3.20632 20.1499C2.56979 19.5977 2.15388 18.8343 2.035 18H1V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8H20L23 12.056V18H20.965C20.8461 18.8343 20.4302 19.5977 19.7937 20.1499C19.1571 20.7022 18.3427 21.0063 17.5 21.0063C16.6573 21.0063 15.8429 20.7022 15.2063 20.1499C14.5698 19.5977 14.1539 18.8343 14.035 18H8.965ZM15 7H3V15.05C3.39456 14.6472 3.8806 14.3457 4.41675 14.1711C4.9529 13.9966 5.52329 13.9541 6.07938 14.0474C6.63546 14.1407 7.16077 14.3669 7.61061 14.7069C8.06044 15.0469 8.42148 15.4905 8.663 16H14.337C14.505 15.647 14.73 15.326 15 15.05V7ZM17 13H21V12.715L18.992 10H17V13ZM17.5 19C17.898 19 18.2796 18.8419 18.561 18.5605C18.8424 18.2791 19.0005 17.8975 19.0005 17.4995C19.0005 17.1015 18.8424 16.7199 18.561 16.4385C18.2796 16.1571 17.898 15.999 17.5 15.999C17.102 15.999 16.7204 16.1571 16.439 16.4385C16.1576 16.7199 15.9995 17.1015 15.9995 17.4995C15.9995 17.8975 16.1576 18.2791 16.439 18.5605C16.7204 18.8419 17.102 19 17.5 19V19ZM7 17.5C7 17.303 6.9612 17.108 6.88582 16.926C6.81044 16.744 6.69995 16.5786 6.56066 16.4393C6.42137 16.3001 6.25601 16.1896 6.07403 16.1142C5.89204 16.0388 5.69698 16 5.5 16C5.30302 16 5.10796 16.0388 4.92597 16.1142C4.74399 16.1896 4.57863 16.3001 4.43934 16.4393C4.30005 16.5786 4.18956 16.744 4.11418 16.926C4.0388 17.108 4 17.303 4 17.5C4 17.8978 4.15804 18.2794 4.43934 18.5607C4.72064 18.842 5.10218 19 5.5 19C5.89782 19 6.27936 18.842 6.56066 18.5607C6.84196 18.2794 7 17.8978 7 17.5V17.5Z" fill="#290B00"/>
                            </svg>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Efficient coordination on the move. Cinnamon’s high-fidelity communications help your team stay organized and connected, keeping operations on track in real-time.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-hero">
                <div className="right-hero">
                    <img src="/network-1.svg" />
                </div>
                <div className="left-hero">
                    <h2 className="left-title">
                        Customized Solutions,<br />Effortless Integration
                    </h2>
                    <h3 className="left-p">
                        Our technology is crafted to integrate smoothly into your existing systems, helping your team hit the ground running without unnecessary downtime or complexity. With plug-and-play setup, Cinnamon lets you scale up or down without technical headaches, so you can focus on what you do best.
                    </h3>
                    <div className="bttn-container-company">
                        <a className="sol-cta">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="custom-hero">
                <div className="left-hero">
                    <h2 className="left-title">
                        Empower Your Team<br />with Tools that Work
                    </h2>
                    <h3 className="left-p">
                        Cinnamon’s tools are designed for simplicity, accessibility, and impact, ensuring your team has everything they need to communicate effectively. We’re here to support you with seamless setup, ongoing support, and solutions that grow with your business.
                    </h3>
                    <div className="bttn-container-company">
                        <a className="sol-cta">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="right-hero">
                    <img src="/logo-sol.svg" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Solutions;