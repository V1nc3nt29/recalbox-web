import React from 'react'
import ReactWOW from 'react-wow'
import starIconh2 from '../../assets/images/star-icon-h2.png'
import kubii from '../../assets/images/partner/kubii.png'
import restream from '../../assets/images/partner/restream.png'
import retroflag from '../../assets/images/partner/retroflag.png'
import screenscraper from '../../assets/images/partner/screenscraper.png'
import twitch from '../../assets/images/partner/twitch.png'
import rapidflyer from '../../assets/images/partner/rapidflyer.png'

const Partner = () => {
    return (
        
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
            
            <div id="partenaires" className="section-title">
                    <span className="sub-title-black">
                    <img src={starIconh2} alt="feature" />
                    <h2>Nos partenaires</h2>
                    </span>
                
                </div>
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="single-partner-item">
                            <a href="https://www.kubii.fr/" target="_blank">
                                <img src={kubii} alt="partner" />
                            </a>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.2s' animation='fadeInUp'>
                            <div className="single-partner-item">
                            <a href="https://restream.io/" target="_blank">
                                <img src={restream} alt="Restream" />
                            </a>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.3s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                <a href="http://retroflag.com/" target="_blank"> 
                                    <img src={retroflag} alt="Retroflag" />
                                </a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.4s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                <a href="https://www.screenscraper.fr/" target="_blank">
                                    <img src={screenscraper} alt="Screen Scraper" />
                                </a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.5s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                <a href="https://www.twitch.tv/" target="_blank"> 
                                  <img src={twitch} alt="Twitch" />
                                </a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <ReactWOW delay='.6s' animation='fadeInUp'>
                            <div className="single-partner-item">
                                <div className="single-partner-item">
                                <a href="https://www.rapid-flyer.com/" target="_blank" > 
                                  <img src={rapidflyer} alt="Rapidflyer" /> 
                                </a>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default Partner