"use client";
import React from 'react';
import Image from "next/image";

const Header = ()=>{
    return (
        <header>
        <div className="uk-section uk-padding-remove-vertical">
            <nav className="uk-navbar-container uk-navbar-transparent uk-sticky" data-uk-sticky="show-on-up: true, animation: uk-animation-slide-top," >
                <div className="uk-container uk-navbar" data-uk-navbar="">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item">

                            <a className="uk-logo" href="https://icapitalplus.com">
                                <Image src="/images/icapital.png" data-src="images/icapital.png" alt="iCapital Investment" data-uk-img="" width="146" height="39" />
                            </a>


                            <ul className="uk-navbar-nav uk-visible@m">
                                <li className="uk-active"><a href="#" className="navbar-link" aria-expanded="false">CFD &amp, Forex<i className="fas fa-chevron-down"></i></a>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li>
                                                <a href="cfd_trading">CFD Trading</a>
                                            </li>
                                            <li>
                                                <a href="how_it_is_done">How is it Done?</a>
                                            </li>
                                            <li>
                                                <a href="cfd_strategies">CFD Strategies</a>
                                            </li>
                                            <li>
                                                <a href="forex_trading">Forex Trading</a>
                                            </li>
                                            <li>
                                                <a href="forex_strategies">Strategies for Forex</a>
                                            </li>
                                            <li>
                                                <a href="cfd_glossary">CFD Glossary</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#" className="navbar-link" aria-expanded="false">Markets<i className="fas fa-chevron-down"></i></a>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li>
                                                <a href="forex">Forex</a>
                                            </li>
                                            <li>
                                                <a href="options">Stocks</a>
                                            </li>
                                            <li>
                                                <a href="bitcoin">Cryptocurrency</a>
                                            </li>
                                            <li>
                                                <a href="gold">Gold</a>
                                            </li>
                                            <li>
                                                <a href="real_estate">Real Estate</a>
                                            </li>
                                            <li>
                                                <a href="bonds">Bonds</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#" className="navbar-link" aria-expanded="false">Education<i className="fas fa-chevron-down"></i></a>
                                    <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ left: "472.567px", top: "81px," }}>
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li>
                                                <a href="beginner">Beginner</a>
                                            </li>
                                            <li>
                                                <a href="intermediate">Intermediate</a>
                                            </li>
                                            <li>
                                                <a href="advanced">Advanced</a>
                                            </li>
                                            <li>
                                                <a href="technical_analysis">Technical Analysis</a>
                                            </li>
                                            <li>
                                                <a href="fundamental_analysis">Fundamental Analysis</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#" className="navbar-link" aria-expanded="false">Resources<i className="fas fa-chevron-down"></i></a>
                                    <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div className="uk-navbar-dropdown-grid uk-child-width-1-2 uk-grid uk-grid-stack" data-uk-grid="">
                                            <div>
                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                    <b>Trading Platforms</b>
                                                    <li>
                                                        <a href="premium_trader">Premium Trader</a>
                                                    </li>
                                                    <li>
                                                        <a href="metatrader4">MetaTrader4</a>
                                                    </li>
                                                    <li>
                                                        <a href="metatrader5">MetaTrader5</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                    <li><a className="uk-disabled" href="#">We use trusted and verifiable platforms that aids traders achieve the best possible profits from their trades.</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#" className="navbar-link" aria-expanded="false">Company<i className="fas fa-chevron-down"></i></a>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li>
                                                <a href="about">About Us</a>
                                            </li>
                                            <li>
                                                <a href="contact">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="low_trading_cost">Low trading costs</a>
                                            </li>
                                            <li>
                                                <a href="market_range">Wide range of markets</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <div className="uk-navbar-item in-mobile-nav uk-hidden@m"><a className="uk-button" href="#modal-full" data-uk-toggle="" aria-expanded="false"><i className="fas fa-bars"></i></a><div id="modal-full" className="uk-modal-full uk-modal" data-uk-modal="">
                                <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport="">
                                    <a className="uk-modal-close-full uk-button"><i className="fas fa-times"></i></a>
                                    <div className="uk-width-large uk-padding-large">
                                        <ul className="uk-nav-default uk-nav-parent-icon uk-nav" data-uk-nav="">
                                            <li className="uk-active uk-parent"><a href="#" className="navbar-link" aria-expanded="false">CFD &amp, Forex</a>

                                                <ul className="uk-nav-sub" hidden="">
                                                    <li>
                                                        <a href="cfd_trading">CFD Trading</a>
                                                    </li>
                                                    <li>
                                                        <a href="how_it_is_done">How is it Done?</a>
                                                    </li>
                                                    <li>
                                                        <a href="cfd_strategies">CFD Strategies</a>
                                                    </li>
                                                    <li>
                                                        <a href="forex_trading">Forex Trading</a>
                                                    </li>
                                                    <li>
                                                        <a href="forex_strategies">Strategies for Forex</a>
                                                    </li>
                                                    <li>
                                                        <a href="cfd_glossary">CFD Glossary</a>
                                                    </li>
                                                </ul>

                                            </li>
                                            <li className="uk-parent"><a href="#" className="navbar-link" aria-expanded="false">Markets</a>

                                                <ul className="uk-nav-sub" hidden="">
                                                    <li>
                                                        <a href="forex">Forex</a>
                                                    </li>
                                                    <li>
                                                        <a href="options">Stocks</a>
                                                    </li>
                                                    <li>
                                                        <a href="bitcoin">Cryptocurrency</a>
                                                    </li>
                                                    <li>
                                                        <a href="gold">Gold</a>
                                                    </li>
                                                    <li>
                                                        <a href="real_estate">Real Estate</a>
                                                    </li>
                                                    <li>
                                                        <a href="bonds">Bonds</a>
                                                    </li>
                                                </ul>

                                            </li>
                                            <li className="uk-parent"><a href="#" className="navbar-link" aria-expanded="false">Education</a>

                                                <ul className="uk-nav-sub" hidden="">
                                                    <li>
                                                        <a href="beginner">Beginner</a>
                                                    </li>
                                                    <li>
                                                        <a href="intermediate">Intermediate</a>
                                                    </li>
                                                    <li>
                                                        <a href="advanced">Advanced</a>
                                                    </li>
                                                    <li>
                                                        <a href="technical_analysis">Technical Analysis</a>
                                                    </li>
                                                    <li>
                                                        <a href="fundamental_analysis">Fundamental Analysis</a>
                                                    </li>
                                                </ul>

                                            </li>
                                            <li className="uk-parent"><a href="#" className="navbar-link" aria-expanded="false">Resources</a>



                                                <ul className="uk-nav-sub" hidden="">
                                                    <b>Trading Platforms</b>
                                                    <li>
                                                        <a href="premium_trader">Premium Trader</a>
                                                    </li>
                                                    <li>
                                                        <a href="metatrader4">MetaTrader4</a>
                                                    </li>
                                                    <li>
                                                        <a href="metatrader5">MetaTrader5</a>
                                                    </li>
                                                </ul>






                                            </li>
                                            <li className="uk-parent"><a href="#" className="navbar-link" aria-expanded="false">Company</a>

                                                <ul className="uk-nav-sub" hidden="">
                                                    <li>
                                                        <a href="about">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="low_trading_cost">Low trading costs</a>
                                                    </li>
                                                    <li>
                                                        <a href="market_range">Wide range of markets</a>
                                                    </li>
                                                </ul>

                                            </li>
                                        </ul>
                                        <a href="/login" className="uk-button uk-button-primary uk-border-rounded uk-align-center" style={{ marginBottom: "-12px" }}>Get Started<i className="fas fa-sign-in-alt uk-margin-small-left"></i></a>
                                    </div>
                                </div></div></div></div>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="uk-navbar-item uk-visible@m in-optional-nav uk-width-1-2" style={{ paddingLeft: "2px !important" }}>
                            <a href="login" className="uk-button uk-button-primary uk-border-rounded" style={{ backgroundColor: "#a8a4a4" }}>Sign-in</a>
                        </div>
                        <div className="uk-navbar-item uk-visible@m in-optional-nav uk-width-1-2" style={{ paddingLeft: "2px !important" }}>
                            <a href="register" className="uk-button uk-button-primary uk-border-rounded">Get Started</a>
                        </div>
                    </div>
                </div>
            </nav><div className="uk-sticky-placeholder" style={{ height: "92px", margin: "0px" }} hidden=""></div>
        </div>

    </header>
    );
}
export default Header;