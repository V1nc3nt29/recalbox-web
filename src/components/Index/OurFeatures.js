import React from 'react'
import starIconh2 from '../../assets/images/star-icon-h2.png'
import players from '../../assets/images/fonctionalites/players.png'
import rewind from '../../assets/images/fonctionalites/rewind.png'
import savestate from '../../assets/images/fonctionalites/savestate.png'
import screenshot from '../../assets/images/fonctionalites/screenshot.png'
import update from '../../assets/images/fonctionalites/update.png'
import wireless from '../../assets/images/fonctionalites/wireless.png'

const OurFeatures = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                    <img src={starIconh2} alt="feature" />
                    <h2>Les fonctionnalités</h2>
                    </span>
                
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={update} alt="feature" />
                            </div>
                            <h3>Mise à jour en ligne</h3>
                            <p>Profitez des derniers émulateurs, des dernières optimisations 
                                en mettant votre Recalbox à jour d'un simple clic.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={players} alt="feature" />
                            </div>
                            <h3>5 Players Modo</h3>
                            <p>ous avez plusieurs manettes USB, Bluetooth, PS3, XBOX 360, Wiimotes ? 
                                Vous avez des amis ? Jouez à 5 !</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={rewind} alt="feature" />
                            </div>
                            <h3>Rembobinage</h3>
                            <p>Contrôlez le temps et rembobinez le jeu en cas d’erreur mortelle !</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={screenshot} alt="feature" />
                            </div>
                            <h3>Screenshots</h3>
                            <p>Prenez des captures d'écran de vos parties et partagez les !</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={savestate} alt="feature" />
                            </div>
                            <h3>SaveStates</h3>
                            <p>Sauvegardez n’importe où dans le jeu, et rechargez vos parties aussi rapidement !</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={wireless} alt="feature" />
                            </div>
                            <h3>Manettes sans fils</h3>
                            <p>La Recalbox supporte les manettes XBOX 360, PS3, 8Bitdo et bluetooth standard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFeatures