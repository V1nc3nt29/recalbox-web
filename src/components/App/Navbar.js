import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"
import recalstore from "../../assets/images/recalstore-menu.png"

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link"
                                        >
                                            La Recalbox 
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Interface
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   Systèmes et Compatibilité
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="https://forum.recalbox.com/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Forum
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="https://recalbox.gitbook.io/documentation/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Gitbook
                                                </Link>
                                            </li>

                                        </ul>

 
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Communauté 
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    F.A.Q
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   Blog
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="https://forum.recalbox.com/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Forum
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="https://recalbox.gitbook.io/documentation/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Gitbook
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    

                                    <li className="nav-item">
                                        <Link 
                                            to="/download " 
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            Téléchargement       
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Créer sa Recalbox 
                                        </Link>   
                                    </li>


                                    <li className="nav-item">
                                        <Link 
                                            to="https://www.kubii.fr/221-recalbox" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            <img src={recalstore} alt="Recalstore" /> 
                                        </Link>

                                
                                    </li>
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        
                                    </div>

                                </div>
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
