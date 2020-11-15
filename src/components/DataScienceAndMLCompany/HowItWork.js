import React from 'react'
import { Link } from 'gatsby'

import odroidc2 from '../../assets/images/architecture/recalbox_c2.png'
import gpicase from '../../assets/images/architecture/recalbox_gpi.png'
import nuc from '../../assets/images/architecture/recalbox_nuc.png'
import pcx64 from '../../assets/images/architecture/recalbox_pcx64.png'
import pcx86 from '../../assets/images/architecture/recalbox_pcx86.png'
import pizero from '../../assets/images/architecture/recalbox_rpi0.png'
import rpi1a from '../../assets/images/architecture/recalbox_rpi1a.png'
import rpi1b from '../../assets/images/architecture/recalbox_rpi1b.png'
import rpi2b from '../../assets/images/architecture/recalbox_rpi2b.png'
import rpi3a from '../../assets/images/architecture/recalbox_rpi3a.png'
import rpi3b from '../../assets/images/architecture/recalbox_rpi3B.png'
import rpi4b from '../../assets/images/architecture/recalbox_rpi4b.png'
import xu4 from '../../assets/images/architecture/recalbox_xu4.png'

import shape1 from '../../assets/images/shape/recalbox-shape1.png'

const HowItWork = () => {
    return (
        <section className="process-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    
                    <h2>Choisissez votre architecture</h2>
                    <p></p><br/>
                </div>

                <div className="row">
              
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            
                            <div className="image">
                            <Link to="/service-details">
                            <img src={pizero} alt="banner" />
                            </Link>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Raspberry Pi 0
                                </Link>
                            </h3>
                            <p></p>
                        </div>
               
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                          
                            <div className="image">
                                <img src={rpi1a} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 1 </h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                           
                            <div className="image">
                                <img src={rpi1b} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 1 B+</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box ">
                        
                            <div className="image">
                                <img src={gpicase} alt="banner" />
                            </div>
                            <h3>GPI Case</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                         
                            <div className="image">
                                <img src={rpi2b} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 2</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            
                            <div className="image">
                                <img src={rpi3a} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 3 A+</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                         
                            <div className="image">
                                <img src={rpi3b} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 3B / 3B+</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                        
                            <div className="image">
                                <img src={rpi4b} alt="banner" />
                            </div>
                            <h3>Raspberry Pi 4</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                    <p></p>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                           
                            <div className="image">
                                <img src={pcx86} alt="banner" />
                            </div>
                            <h3>PC 32 bits</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                           
                            <div className="image">
                                <img src={pcx64} alt="banner" />
                            </div>
                            <h3>PC 64 bits</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            
                            <div className="image">
                                <img src={nuc} alt="banner" />
                            </div>
                            <h3>Intel NUC</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                           
                            <div className="image">
                                <img src={xu4} alt="banner" />
                            </div>
                            <h3>Odroid XU4</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                          
                            <div className="image">
                                <img src={odroidc2} alt="banner" />
                            </div>
                            <h3>Odroid C2</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default HowItWork