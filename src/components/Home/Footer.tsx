import React from 'react'
import Image from "next/image";

export default function Footer() {
    return (
        <footer>

            <div className="uk-section uk-footer-bg uk-section-primary uk-padding-large uk-padding-remove-horizontal">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-child-width-1-4@m uk-flex uk-grid" data-uk-grid="">
                        <div className="uk-first-column">
                            <h4 className="uk-heading-bullet">Financials</h4>
                            <ul className="uk-list uk-link-text">
                                <li><a href="https://www.ft.com">Financial Times</a></li>
                                <li><a href="https://www.wsj.com">The Wall Street Journal</a></li>
                                <li><a href="https://www.zerohedge.com">Zero Hedge</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="uk-heading-bullet">Legal</h4>
                            <ul className="uk-list uk-link-text">
                                <li><a href="support@icapitalplus.comterms">Terms &amp, Conditions</a></li>
                            </ul>
                        </div>
                        <div className="uk-visible@m">
                            <h4 className="uk-heading-bullet">Support</h4>
                            <ul className="uk-list uk-link-text">
                                <li><a href="support@icapitalplus.comabout">About Us</a></li>
                                <li><a href="support@icapitalplus.comcontact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="uk-flex-first uk-flex-last@m">
                            <ul className="uk-list uk-link-text">
                                <li><Image className="uk-margin-small-bottom" src="/images/icapital.png" data-src="images/icapital.png" alt="logo" width="130" height="36" /></li>
                                <li><a href="#"><i className="fas fa-phone uk-margin-small-right"></i> +1 (803) 398-3209</a></li>
                                <li><a href="#"><i className="fas fa-envelope uk-margin-small-right"></i> support@icapitalplus.com</a></li>
                                <li><a href="#"><i className="fas fa-map-marker-alt uk-margin-small-right"></i> 514 S. Magnolia St. Orlando, FL 32806 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-grid uk-flex uk-flex-center uk-margin-large-top uk-grid-stack" data-uk-grid="">
                        <div className="uk-width-5-6@m uk-margin-bottom uk-first-column">
                            <div className="in-footer-warning in-margin-top-20@s">
                                <h5 className="uk-text-small uk-text-uppercase"><span>Risk Warning</span></h5>
                                <p className="uk-text-small">Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary </p>
                            </div>
                        </div>
                        <div className="uk-width-2-2@m in-copyright-text uk-grid-margin uk-first-column">
                            <p>© iCapital Investment 2023. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="uk-visible@m">
                <a href="#" className="in-totop fas fa-chevron-up" data-uk-scroll="" style={{ opacity: 0.5 }}></a>
            </div>

        </footer>

    )
}
