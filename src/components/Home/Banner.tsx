"use client";
import React from "react";
import Image from "next/image";
export default function Banner() {
    return (
        <div className="uk-section uk-padding-remove-vertical in-slideshow-gradient">
            <div id="particles-js" className="uk-light in-slideshow uk-background-contain uk-slideshow" data-src="img/in-equity-decor-1.svg" data-uk-img="" data-uk-slideshow="" style={{ backgroundimage: "url('/assets/image/in-equity-decor-1.svg')" }}>
                <hr />
                <ul className="uk-slideshow-items" style={{ minHeight: "580px" }}>
                    <li className="uk-flex uk-flex-middle uk-active uk-transition-active" tabindex="-1">
                        <div className="uk-container">
                            <div className="uk-grid-large uk-flex-middle uk-grid uk-grid-stack" data-uk-grid="">
                                <div className="uk-width-1-2@s in-slide-text uk-first-column">

                                    <h1 className="uk-heading-small">The worlds most <span className="in-highlight">powerful</span> trading platform.</h1>
                                    <p className="uk-text-lead uk-visible@m">Trade Cryptocurrencies, Stock Indices, Commodities and Forex from a single account</p>

                                    <div className="uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s uk-margin-medium-top uk-visible@s uk-grid" data-uk-grid="" data-market="TSLA,GOOGL,AAPL">
                                        <div className="uk-first-column">
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-tesla.svg" data-src="img/in-symbol-tesla.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">TSLA<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-google.svg" data-src="img/in-symbol-google.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">GOOGL<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-visible@m">
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-apple.svg" data-src="img/in-symbol-apple.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">AAPL<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="in-badge-text uk-text-small uk-margin-remove-bottom uk-visible@m"><span className="uk-label uk-label-success in-label-small">Note</span>Trading in Forex/ CFDs is highly speculative and carries a high level of risk.</p>
                                </div>
                                <div className="in-slide-img uk-first-column">
                                    <Image className=" home-slider-img" src="/assets/image/in-equity-slide-1.png" data-src="img/in-equity-slide-1.png" alt="image-slide" data-uk-img="" width="652" height="746" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="uk-flex uk-flex-middle" tabindex="-1">
                        <div className="uk-container">
                            <div className="uk-grid-large uk-flex-middle uk-grid uk-grid-stack" data-uk-grid="">
                                <div className="uk-width-1-2@s in-slide-text uk-first-column">

                                    <h1 className="uk-heading-small">Reach out to new trading <span className="in-highlight">experience</span>.</h1>
                                    <p className="uk-text-lead uk-visible@m">We have been proud to offer traders a powerful and advanced trading platform technologies</p>

                                    <div className="uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s uk-margin-medium-top uk-visible@s uk-grid uk-grid-stack" data-uk-grid="" data-market="MCD,AMZN,MSFT">
                                        <div className="uk-first-column">
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-mcdonalds.svg" data-src="img/in-symbol-mcdonalds.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">MCD<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-amazon.svg" data-src="img/in-symbol-amazon.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">AMZN<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uk-visible@m">
                                            <div className="uk-card uk-card-small uk-card-secondary uk-card-body uk-border-rounded uk-flex uk-flex-middle">
                                                <div className="in-symbol-logo">
                                                    <Image src="/assets/image/in-symbol-microsoft.svg" data-src="img/in-symbol-microsoft.svg" alt="ticker" data-uk-img="" width="28" height="28" />
                                                </div>
                                                <div className="in-price">
                                                    <h6 className="uk-margin-remove">MSFT<span className="uk-text-small"></span></h6>
                                                    <p className="uk-margin-remove"><span className="fas fa-spinner fa-xs"></span>loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="in-badge-text uk-text-small uk-margin-remove-bottom uk-visible@m"><span className="uk-label uk-label-success in-label-small">Note</span>Trading in Forex/ CFDs is highly speculative and carries a high level of risk.</p>
                                </div>
                                <div className="in-slide-img uk-first-column">
                                    <Image className=" home-slider-img" src="/assets/image/in-equity-slide-2.png" data-src="img/in-equity-slide-2.png" alt="image-slide" data-uk-img="" width="652" height="746" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="uk-container">
                    <div className="uk-position-relative uk-grid uk-grid-stack" data-uk-grid="">
                        <ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-right uk-flex uk-flex-middle uk-first-column"><li uk-slideshow-item="0" className="uk-active"><a href=""></a></li><li uk-slideshow-item="1" className=""><a href=""></a></li></ul>
                    </div>
                </div>
                <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="1366" height="580"></canvas></div>
        </div>
    )
}