import React from 'react'
import starIconh2 from '../../assets/images/star-icon-h2.png'
import icon1 from '../../assets/images/funfacts/fun-icon1.png'
import icon2 from '../../assets/images/funfacts/fun-icon2.png'
import icon3 from '../../assets/images/funfacts/fun-icon3.png'
import icon4 from '../../assets/images/funfacts/fun-icon4.png'

const FunFacts = () => {
    return (
        <section className="funfacts-area bg-image pt-100 pb-70">

                <div className="section-title">
                    <span className="sub-title">
                    <img src={starIconh2} alt="feature" />
                    <h2>La Recalbox en chiffres</h2>
                    </span>
                
                </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-3 col-6">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon1} alt="fun" />
                            </div>
                            <h3>40k</h3>
                            <p>Jeux compatibes</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon2} alt="fun" />
                            </div>
                            <h3>5</h3>
                            <p>Joueurs</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon3} alt="fun" />
                            </div>
                            <h3>100</h3>
                            <p>Systèmes</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 col-6">
                        <div className="single-funfacts-item">
                            <div className="icon">
                                <img src={icon4} alt="fun" />
                            </div>
                            <h3>∞</h3>
                            <p>Heures de jeu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFacts;