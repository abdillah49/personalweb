import React from 'react';

const Education = () => {
    return (
        <div id="education">
            <h1 className="tiga">Education</h1>
            <ul className="timeline">
                <li>
                    <div className="timeline-user"><div></div></div>
                    <div className="timeline-content">
                        <span>2014 ~ </span><br />
                        Bachelor's Degree of Technical Information
                        <div className="text">STMIK - STIE Mikroskil, Medan</div>
                    </div>
                </li><li>
                    <div className="timeline-user"><div></div></div>
                    <div className="timeline-content">
                        <span>2011 ~ 2014</span><br />
                        Vocational High School of Software Engineering
                        <div className="text">SMK Swasta Mandiri, Percut Sei Tuan</div>
                    </div>
                </li><li>
                    <div className="timeline-user"><div></div></div>
                    <div className="timeline-content">
                        <span>2006 ~ 2009</span><br />
                        Middle School
                        <div className="text">SMP Negeri 37, Medan</div>
                    </div>
                </li><li>
                    <div className="timeline-user"><div></div></div>
                    <div className="timeline-content">
                        <span>2000 ~ 2006</span><br />
                        Elementary School
                        <div className="text">SD Negeri 064965, Medan</div>
                    </div>
                </li>										
            </ul>
        </div>
    );
}

export default Education;