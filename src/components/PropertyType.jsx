import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { propertyTypes } from '../data/HomeOneData/HomeOneData';
import PropertyTypeItem from './items/PropertyTypeItem';

const PropertyType = () => {
    return (
        <>
            {/* ======================= Property Section Start ================================== */}
            <section className="property-type padding-y-120">
                <div className="container container-two">

                    <SectionHeading
                        headingClass=""  
                        subtitle="Property Type"
                        subtitleClass="bg-gray-100" 
                        title="Let us find the perfect the  property for you" 
                        renderDesc={false}
                        desc=""
                        renderButton={false}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="row gy-4">
                        
                        {
                            propertyTypes.map((propertyType, propertyTypeIndex) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 col-xs-6" key={propertyTypeIndex}>
                                        <PropertyTypeItem propertyType={propertyType}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
            {/* ======================= Property Section End ================================== */}   
        </>
    );
};

export default PropertyType;