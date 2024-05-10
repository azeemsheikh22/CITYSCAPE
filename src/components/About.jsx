import React from 'react';
import { aboutContent, aboutStatistics } from '../data/HomeOneData/HomeOneData';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';

import CountUp from 'react-countup';

const About = () => {
    return (
        <>
            {/* ======================== About Section Start ========================== */}
            <section className="about padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-thumb">
                                <img src={aboutContent.thumb} alt=""/>
                                <div className="client-statistics flx-align">
                                    <span className="client-statistics__icon">
                                        {aboutStatistics.icon}
                                    </span>
                                    <div className="client-statistics__content">
                                        <h5 className="client-statistics__number statisticsCounter">
                                            <CountUp end={parseInt(aboutStatistics.number)}/>
                                        </h5>
                                        <span className="client-statistics__text fs-18">{aboutStatistics.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading 
                                    headingClass="style-left"  
                                    subtitle="About Us"
                                    subtitleClass="" 
                                    title="Stay with us feel at home Your perfect stay awaits" 
                                    renderDesc={false}
                                    desc=""
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />
                                
                                <div className="about-box d-flex">
                                    <div className="about-box__icon">
                                        <img src={aboutContent.icon} alt="" />
                                    </div>
                                    <div className="about-box__content">
                                        <h6 className="about-box__title">{aboutContent.title}</h6>
                                        <p className="about-box__desc font-13">{aboutContent.desc}</p>
                                    </div>
                                </div>
                                <div className="about-button">
                                    <Button 
                                        btnLink="/about-us" 
                                        btnClass="btn-main" 
                                        btnText="Learn More" 
                                        spanClass="icon-right" 
                                        iconClass="fas fa-arrow-right" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================== About Section End ========================== */}
   
        </>
    );
};

export default About;