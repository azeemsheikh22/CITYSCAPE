import React from 'react';

const PropertyTypeItem = ({ propertyType }) => {
    const { icon, title, desc } = propertyType;
    
    return (
        <>
            <div className="property-type-item">
                <span className="property-type-item__icon">
                    <img src={ icon } alt=""/>
                </span>
                <h6 className="property-type-item__title"> { title }</h6>
                <p className="property-type-item__desc font-18">{ desc }</p>
            </div>
        </>
    );
};

export default PropertyTypeItem;