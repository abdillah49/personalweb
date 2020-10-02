import React from 'react';
import Images from '../Images';

import ImgDesign from '../../assets/images/design.png';
import ImgWeb from '../../assets/images/web.png';
import ImgSport from '../../assets/images/sport.png';

const Interest = () => {
    return (
        <div id="interest">
            <h1 className="lima">Interest</h1>
            <div className="sub">
                <p>The meeting place for project promoters and investors. Project promoters based in the EU can register initiatives and boost its visibility to a large network of international investors. In case of an investor looking for investment opportunities in areas such as energy efficiency, transport or renewable energies, the EIPP portal will offer them a broad choice of viable projects.</p>

                <p>International call that allows cities to identify and select the best projects for the transformation of underutilized sites into beacons of sustainability and resiliency. For each site, the bidder teams will compete to buy or lease the site to implement their project (sale agreement, rental contract, lease-back, occupation, etc). At the end of the competition process, each site owner will organize the legal arrangement to finalize the site transfer.</p>
                
                <div className="interest row distable">
                    <div className="col-4">
                        <div className="inner">	
                            <div className="icon">
                                <Images src={ImgWeb} alt="Web App" />
                            </div>
                            <div className="title">Web App</div>
                            <div className="desc">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="inner">	
                            <div className="icon">
                                <Images src={ImgDesign} alt="Graphic Design" />
                            </div>
                            <div className="title">Graphic Design</div>
                            <div className="desc">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="inner">	
                            <div className="icon">
                                <Images src={ImgSport} alt="Sport" />
                            </div>
                            <div className="title">Sport</div>
                            <div className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interest;