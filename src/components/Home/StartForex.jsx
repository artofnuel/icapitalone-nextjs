"use client";
import React from "react";
import Image from "next/image";

export default function StartForex() {
    return (
        <div className="uk-section uk-padding-remove-vertical in-equity-12 uk-animation-toggle" tabindex="0">
            <div className="uk-container uk-margin-bottom">
                <div className="uk-width-1-1@m">
                    <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-box-shadow-medium uk-background-contain uk-background-top-center" data-src="img/in-equity-12-bg.png" data-uk-img="" style={{ backgroundImage: "url('/assets/image/in-equity-12-bg.png')" }}>
                        <div className="uk-grid-small uk-child-width-1-2@m uk-grid" data-uk-grid="">
                            <div className="uk-first-column">
                                <h2>Begin trading in three steps</h2>
                            </div>
                            <div className="uk-flex uk-flex-right uk-flex-middle button-app">
                                <h5 className="uk-margin-remove">Ready to get started?</h5>
                                <a href="register" className="uk-button uk-button-primary uk-border-rounded uk-margin-left  uk-animation-shake">Open account<i className="fas fa-arrow-circle-right uk-margin-small-left"></i></a>
                            </div>
                            <div className="uk-width-expand@m uk-grid-margin uk-first-column">
                                <div className="uk-flex uk-flex-left uk-margin-top in-steps active-step">
                                    <div className="uk-margin-right">
                                        <span className="in-icon-wrap circle">1</span>
                                    </div>
                                    <div className="uk-margin-right">
                                        <h5 className="uk-margin-remove">Register</h5>
                                        <p className="uk-margin-small-top">Create a free account using your verifiable information on our Registration page.</p>
                                    </div>
                                </div>
                                <div className="uk-flex uk-flex-left uk-margin-top in-steps">
                                    <div className="uk-margin-right">
                                        <span className="in-icon-wrap circle">2</span>
                                    </div>
                                    <div className="uk-margin-right">
                                        <h5 className="uk-margin-remove">Deposit/Trade</h5>
                                        <p className="uk-margin-small-top">Make a deposit to your personal wallet and select a suitable plan from your wallet balance</p>
                                    </div>
                                </div>
                                <div className="uk-flex uk-flex-left uk-margin-top in-steps">
                                    <div className="uk-margin-right">
                                        <span className="in-icon-wrap circle">3</span>
                                    </div>
                                    <div className="uk-margin-right">
                                        <h5 className="uk-margin-remove">Withdraw</h5>
                                        <p className="uk-margin-small-top">Provide details to your choice of withdrawal method and request a payment of your accrued profit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-3-5@m uk-grid-margin">
                                <Image className="in-img-mockup" src="/assets/image/in-equity-12-mockup.png" data-src="img/in-equity-12-mockup.png" alt="mockup" height="128" data-uk-img="" width="643" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}