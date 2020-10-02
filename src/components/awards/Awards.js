import React from 'react';
import Images from '../Images';

import ImgSatu from '../../assets/images/images1.jpg';
import ImgDua from '../../assets/images/images2.jpg';
import ImgTiga from '../../assets/images/images3.jpg';
import ImgEmpat from '../../assets/images/images4.jpg';
import ImgLima from '../../assets/images/images5.jpg';
import ImgEnam from '../../assets/images/images6.jpg';
import ImgTujuh from '../../assets/images/images7.jpg';
import ImgDelapan from '../../assets/images/images8.jpg';

const Awards = () => {
    return (
        <div id="awards">
            <h1 className="enam">Awards</h1>
            <div id="portfolio">
                <div className="portfolio-items row distable">
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg"> 
                                <a href={ImgSatu} title="Website 1">
                                    <div className="hover-text">
                                        <h4>Website 1</h4>
                                    </div>
                                    <Images src={ImgSatu} className="img-responsive" alt="Website 1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgDua} title="Certificate 1">
                                    <div className="hover-text">
                                        <h4>Certificate 1</h4>
                                    </div>
                                    <Images src={ImgDua} className="img-responsive" alt="Certificate 1"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgTiga} title="Certificate 2">
                                    <div className="hover-text">
                                        <h4>Certificate 2</h4>
                                    </div>
                                    <Images src={ImgTiga} className="img-responsive" alt="Certificate 2"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgEmpat} title="Website 2">
                                    <div className="hover-text">
                                        <h4>Website 2</h4>
                                    </div>
                                    <Images src={ImgEmpat} className="img-responsive" alt="Website 2"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgLima} title="Website 3">
                                    <div className="hover-text">
                                        <h4>Website 3</h4>
                                    </div>
                                    <Images src={ImgLima} className="img-responsive" alt="Website 3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgEnam} title="Certificate 3">
                                    <div className="hover-text">
                                        <h4>Certificate 3</h4>
                                    </div>
                                    <Images src={ImgEnam} className="img-responsive" alt="Certificate 3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgTujuh} title="Certificate 4">
                                    <div className="hover-text">
                                        <h4>Certificate 4</h4>
                                    </div>
                                    <Images src={ImgTujuh} className="img-responsive" alt="Certificate 4"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href={ImgDelapan} title="Website 4">
                                    <div className="hover-text">
                                        <h4>Website 4</h4>
                                    </div>
                                    <Images src={ImgDelapan} className="img-responsive" alt="Website 4"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;