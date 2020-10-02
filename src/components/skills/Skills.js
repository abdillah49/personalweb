import React from 'react';

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="empat">Skills</h1>
            <div className="sub">
                <div id="skills">
                    <div className="row distable">
                        <div className="col-6">
                            <div className="skill level_9"><h5>HTML</h5><div className="bar"><div><span>90%</span></div></div></div>
                            <div className="skill level_8"><h5>Javascript / JQuery</h5><div className="bar"><div><span>80%</span></div></div></div>
                            <div className="skill level_85"><h5>PHP</h5><div className="bar"><div><span>85%</span></div></div></div>
                            <div className="skill level_95"><h5>MySQL</h5><div className="bar"><div><span>95%</span></div></div></div>
                        </div>
                        <div className="col-6">
                            <div className="skill level_9"><h5>Bootstrap / CSS</h5><div className="bar"><div><span>90%</span></div></div></div>
                            <div className="skill level_7"><h5>Photoshop</h5><div className="bar"><div><span>70%</span></div></div></div>
                            <div className="skill level_65"><h5>Illustrator</h5><div className="bar"><div><span>65%</span></div></div></div>
                            <div className="skill level_8"><h5>Photography</h5><div className="bar"><div><span>80%</span></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;