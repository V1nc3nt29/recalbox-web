import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import DO from '../../assets/images/systems/3do.png'


const Pricing = () => {
    return (
        <div className="membership-levels-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="priceing" /> 
                        Pricing
                    </span>
                    <h2>Pricing Plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="membership-levels-table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    <span className="title">Console</span>
                                </th>
                                <th>
                                    <span className="title">System</span>
                                </th>
                                <th>
                                    <span className="title">Année</span>
                                </th>
                                <th>
                                    <span className="title">Extensions des Roms</span>
                                </th>
                                <th>
                                    <span className="title">Chemin des Roms</span>
                                </th>
                                <th>
                                    <span className="title">Bios</span>
                                </th>
                                <th>
                                    <span className="title">Chemin du Bios</span>
                                </th>
                                <th>
                                    <span className="title">MD5</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* 3DO */}
                            <tr>
                                <td><p align="center"><img src={DO} alt="priceing" /></p></td>
                                <td>3do</td>
                                <td>1993</td>
                                <td>.iso</td>
                                <td>/share/roms/3do</td>
                                <td>panafz10.bin</td>
                                <td>/share/bios</td>
                            </tr>
                            {/* nintendo */}
                            <tr>
                                <td><p align="center"><img src={DO} alt="priceing" /></p></td>
                                <td>Nintendo 3DS</td>
                                <td>1993</td>
                                <td>.iso</td>
                                <td>/share/roms/3do</td>
                                <td>
                                    <p>scph101.bin</p>
                                    <p>scph7001.bin</p>
                                    <p>scph5501.bin</p>
                                    <p>scph1001.bin</p>

                                </td>
                                <td>
                                    /share/bios
                                </td>
                                <td>
                                    <p>C53CA5908936D412331790F4426C6C33</p>
                                    <p>6E3735FF4C7DC899EE98981385F6F3D0</p>
                                    <p>1E68C231D0896B7EADCAD1D7D8E76129</p>
                                    <p>924E392ED05558FFDB115408C263DCCF</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Highest Speed
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        1 GB Storage
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Unlimited Website
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Unlimited Users
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        24x7 Great Support
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Data Security and Backups
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Monthly Reports and Analytics
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        Get it now
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        Get it now
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        Get it now
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing