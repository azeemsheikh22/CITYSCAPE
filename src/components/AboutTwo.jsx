import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { aboutTwoRight, checkLists } from '../data/HomeTwoData/HomeTwoData';
import Button from '../common/Button';

const AboutTwo = () => {
    return (
        <>
               {/* ======================== About Two Section Start ========================== */}
               <section className="about-two padding-y-60">
                    <div className="container container-two">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="about-two__content">
                                    
                                    <SectionHeading
                                        headingClass="style-left"  
                                        subtitle="Know About Us"
                                        subtitleClass="" 
                                        title="Making Your Real Estate Dreams a Reality" 
                                        renderDesc={false}
                                        desc=""
                                        renderButton={false}
                                        buttonClass="btn-main"
                                        buttonText="View More"
                                    />
                                    
                                    <ul className="check-list">
                                        {
                                            checkLists.map((checkList, index) => {
                                                return (
                                                    <li className="check-list__item d-flex align-items-center" key={index}>
                                                        <span className="icon">{checkList.icon}</span>
                                                        <span className="text  text-white fw-light font-16">{checkList.text}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="about-two__button">
                                        <Button
                                            btnLink="/about" 
                                            btnClass="btn-main" 
                                            btnText="Add Listing" 
                                            spanClass="icon-right icon" 
                                            iconClass="fas fa-arrow-right" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-two__thumb">
                                    <img src={aboutTwoRight.thumb} alt="" className="cover-img"/>
                                    <div className="about-two-info">
                                        <h6 className="about-two-info__title">{aboutTwoRight.title}</h6>
                                        <span className="about-two-info__date font-18">{aboutTwoRight.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               {/* ======================== About Two Section End ========================== */}
        </>
    );
};

export default AboutTwo;