import React from 'react';
import Slider from "react-slick";

import { testimonials } from '../data/HomeOneData/HomeOneData';
import TestimonialItem from './items/TestimonialItem';
import TestimonialThumb from '../../public/assets/images/thumbs/testimonial-img.png';
import SectionHeading from '../common/SectionHeading';

var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    draggable: true,
    speed: 900,
    infinite: true,
    prevArrow: <button type="button" className="slick-prev"><i className="fas fa-arrow-left"></i></button>,
    nextArrow: <button type="button" className="slick-next"><i className="fas fa-arrow-right"></i></button>,
};

const Testimonial = () => {
    return (
        <>
            {/* ==================== Testimonials Section Start ==================== */}
            <section className="testimonial padding-y-60">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="section-heading style-left style-flex"  
                        subtitle="Client Testimonial"
                        subtitleClass="" 
                        title="Optimum Homes & Properties property for you" 
                        renderDesc={false}
                        desc="Use receiving accounts a number a currencies and get paid like a local Use receivin accounts a number paid the most beautiful think"
                        renderButton={false}
                        renderBesideDesc={true}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="testimonial__inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="testimonial-box overflow-hidden position-relative">
                                    <Slider {...settings}>
                                        {
                                            testimonials.map((testimonial, index) => {
                                                return (
                                                    <TestimonialItem testimonial={testimonial} key={index}/>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-thumb">
                                    <img src={TestimonialThumb} alt="" className="cover-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Testimonials Section End ==================== */}   
        </>
    );
};

export default Testimonial;