import React from 'react';
import './pricing.css';
import NavBarReg from '../components/NavBarReg';
import Footer from '../components/Footer';


function Pricing() {
    return (
        <div className='pricing-wrapper'>
            <NavBarReg />
            <div className='pricing-hero'>
                <h2 className='pricing-title'>
                We believe in straightforward pricing that scales with your business.
                </h2>
                <h3 className='pricing-p'>
                You deserve a communications solution that’s affordable, transparent, and built to grow with you. No hidden fees, no complicated structures – just clear pricing for clear connections.
                </h3>
                <a className="hero-cta-pricing">
                    Get started
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                    </svg>*/}
                </a>
            </div>
            <div className='pricing-plans-wrapper'>
                <h2 className='plans-title'>Our plans</h2>
                <div className='plan-wrapper'>
                    <div className='plan-wrap'>
                        <div className='plan-left'>
                            <h2 className='plan-title'>Pay as you go</h2>
                            <h3 className='plan-dec'>For businesses that need flexibility, our Pay-As-You-Go option allows you to scale without overcommitting. You pay for only what you use—ideal for startups or businesses with variable communication needs.</h3>
                            <a className="pricing-cta">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                    <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                                </svg>
                            </a>
                        </div>
                        <div className='plan-right'>
                            <h3 className='plan-list'>Affordable per-call rates</h3>
                            <h3 className='plan-list'>No contracts, no commitments</h3>
                            <h3 className='plan-list'>Scale up or down easily</h3>
                        </div>
                    </div>
                    <div className='plan-wrap-sec'>
                        <div className='plan-left'>
                            <h2 className='plan-title'>Standard Plan</h2>
                            <h3 className='plan-dec'>For small-to-midsize businesses looking for a dependable communications solution with predictable costs. Get everything you need to communicate clearly with clients and partners.</h3>
                            <a className="pricing-cta">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                    <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                                </svg>
                            </a>
                        </div>
                        <div className='plan-right'>
                            <h3 className='plan-list'>Affordable monthly rates</h3>
                            <h3 className='plan-list'>Unlimited calls and messaging</h3>
                            <h3 className='plan-list'>Comprehensive support</h3>
                        </div>
                    </div>
                    <div className='plan-wrap-sec'>
                        <div className='plan-left'>
                            <h2 className='plan-title'>Enterprise Custom Plans</h2>
                            <h3 className='plan-dec'>For larger organizations or those with specific needs, we offer customizable plans that adapt to the scale and scope of your operations. Whether you need thousands of lines or have unique integration needs, we’ll create a plan that works for you.</h3>
                            <a className="pricing-cta">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                    <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                                </svg>
                            </a>
                        </div>
                        <div className='plan-right'>
                            <h3 className='plan-list'>Custom pricing and features</h3>
                            <h3 className='plan-list'>Dedicated account management</h3>
                            <h3 className='plan-list'>Priority support and service</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industry-wrapper-pricing">
                <div className="industry-top-pricing">
                    <h2 className="industry-title">Why Choose Cinnamon’s Pricing?</h2>
                </div>
                <div className="industry-slide">
                    <div className="industry-card-pricing">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                            Transparent and Flexible
                            </h3>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Clear rates, no surprises. Choose the plan that fits your needs and pay only for what you use.</h3>
                        </div>
                    </div>
                    <div className="industry-card-pricing">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                            No Hidden Fees
                            </h3>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">What you see is what you get. Our pricing is transparent, with no extra charges or fine print.</h3>
                        </div>
                    </div>
                    <div className="industry-card-pricing">
                        <div className="in-card-top">
                            <h3 className="in-card-title">
                            Built to Grow with You
                            </h3>
                        </div>
                        <div className="in-card-bttm">
                                <h3 className="in-card-p">Whether you’re scaling a small business or managing a large enterprise, Cinnamon’s pricing adjusts to your needs.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;