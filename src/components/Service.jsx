import React from 'react';
import { services } from '../data/HomeTwoData/HomeTwoData';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <section className="service padding-t-120 padding-b-60">
                <div className="container container-two">
                    <div className="row gy-4">
                        {
                            services.map((service, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 col-xs-6" key={index}>
                                        <div className="service-item">
                                            <span className="service-item__icon">
                                                <img src={service.icon} alt=""/>
                                            </span>
                                            <h6 className="service-item__title">{service.title}</h6>
                                            <span className="service-item__text font-18 d-block">{service.text}</span>
                                            <Link to={service.btnLink} className="simple-btn text-gradient fw-semibold font-14">{service.btnText} 
                                                <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })   
                        }
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;