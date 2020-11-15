import React from 'react'
import {Link} from 'gatsby'

import starIconh2 from '../../assets/images/star-icon-h2.png'

import retrogaming from '../../assets/images/fonctionalites/retrogaming.png'
import kodi from '../../assets/images/fonctionalites/kodi.png'
import retroarch from '../../assets/images/fonctionalites/retroarch.png'

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                    </span>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={retrogaming} alt="Retrogaming" />
                            </div>
                            <h3>
                                
                                    Console rétrogaing
                               
                            </h3>
                            <p>La Recalbox vous propose une large sélection de consoles et de systèmes, 
                                depuis les premières bornes d'arcade, jusqu'aux plateformes 
                                comme la Playstation, en passant par la Nes et la Megadrive.</p>

                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={kodi} alt="Kodi" />
                            </div>

                            <h3>
                                
                                    Média Center
                                
                            </h3>

                            <p>Propulsée par Kodi, la Recalbox fait aussi office de Media Center. 
                                En la connectant au réseau domestique, vous pourrez lire les vidéos 
                                depuis tout appareil compatible (box internet, ordinateur). </p>
                            <p>&nbsp;</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                             <img src={retroarch} alt="Retroarch" />
                            </div>

                            <h3>
                                
                                Des dizaines de logiciels open-source
                               
                            </h3> 

                            <p>Recalbox OS est basé sur le système GNU/Linux. 
                                Il intègre des centaines de logiciels open-sources, du plus petit utilitaire, 
                                jusqu' à ses émulateurs et son frontend EmulationStation.</p>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;