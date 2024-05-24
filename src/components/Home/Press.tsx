import React from 'react'
import Image from "next/image";
export default function Press() {
    return (
        <div className="uk-section uk-padding-remove-vertical in-equity-10">
            <div className="uk-container">
                <div className="uk-grid uk-grid-stack" data-uk-grid="">
                    <div className="uk-width-1-1 uk-first-column">
                        <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                            <div className="uk-grid-divider uk-grid" data-uk-grid="">
                                <div className="uk-width-auto@m uk-flex uk-flex-middle uk-flex-center@s uk-first-column">
                                    <h4>We are in the press</h4>
                                </div>
                                <div className="uk-width-expand@m">
                                    <div className="uk-grid-medium uk-child-width-1-5@m uk-child-width-1-2@s uk-text-center in-client-logo-3 uk-grid" data-uk-grid="">
                                        <div className="uk-tile uk-tile-default uk-first-column">
                                            <Image className="uk-margin-remove" src="img/in-equity-press-1.svg" alt="equity-press" width="170" height="68" />
                                        </div>
                                        <div className="uk-tile uk-tile-default">
                                            <Image className="uk-margin-remove" src="img/in-equity-press-2.svg" alt="equity-press" width="170" height="68" />
                                        </div>
                                        <div className="uk-tile uk-tile-default">
                                            <Image className="uk-margin-remove" src="img/in-equity-press-3.svg" alt="equity-press" width="170" height="68" />
                                        </div>
                                        <div className="uk-tile uk-tile-default">
                                            <Image className="uk-margin-remove" src="img/in-equity-press-4.svg" alt="equity-press" width="170" height="68" />
                                        </div>
                                        <div className="uk-tile uk-tile-default uk-visible@m">
                                            <Image className="uk-margin-remove" src="img/in-equity-press-5.svg" alt="equity-press" width="170" height="68" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
