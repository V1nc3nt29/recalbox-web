import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import {Link} from 'gatsby'

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h3>SUPER NNTENDO</h3>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    
                                    <p>Year: <b>2020</b></p>
                                    <p>Accepted File Extensions: <b>.cue .ccd .chd .exe .iso .m3u .pbp .toc</b></p>
                                    <p>Roms folder: <b>/home/pi/RetroPie/roms/psx</b></p>
                                    <p>Bios Folder: <b>/home/pi/RetroPie/BIOS</b></p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            </Accordion>
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                SaaS Solutions
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                eCommerce Platforms
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-segmentation"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Research
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                           
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-analytics"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Analytics
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Technology
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne