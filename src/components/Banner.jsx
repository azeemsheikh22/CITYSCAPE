import React from 'react';
import { bannerContent } from './../data/HomeOneData/HomeOneData';

import TabFilter from '../common/TabFilter';

const Banner = () => {
    return (
        <>
            {/*========================== Banner Section Start ==========================*/}
            <section className="banner">
                <div className="container container-two">
                    <div className="position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-inner position-relative">
                                    <div className="banner-content">
                                        <span className="banner-content__subtitle text-uppercase font-14"> {bannerContent.subtitle} </span>
                                        <h1 className="banner-content__title">{bannerContent.title} <span className="text-gradient">{bannerContent.gradientTitle}</span> </h1>
                                        <p className="banner-content__desc font-18">{bannerContent.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-0 order-1">
                                <div className="banner-thumb">
                                    <img src={bannerContent.thumb} alt=""/>
                                    <img src="assets/images/shapes/shape-triangle.png" alt="" className="shape-element one"/>
                                    <img src="assets/images/shapes/shape-circle.png" alt="" className="shape-element two"/>
                                    <img src="assets/images/shapes/shape-moon.png" alt="" className="shape-element three"/>
                                </div>  
                            </div>
                            <div className="col-lg-12">

                                {/* Tab Filter */}
                                <TabFilter colClass="col-lg-3 col-sm-6 col-xs-6"/>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/*========================== Banner Section End ==========================*/}   
        </>
    );
};

export default Banner;