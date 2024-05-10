import React from 'react';
import CountUp from 'react-countup';

const CounterFourItem = ({ counterFourItem }) => {
    
    const { icon, number, text} = counterFourItem; 
    
    return (
        <div className="counter-three-item style-two flx-align">
            <span className="counter-three-item__icon">
                <img src={icon} alt=""/>
            </span>
            <div className="counter-three-item__content">
                <h2 className="counter-three-item__number text-heading">
                    <CountUp end={parseInt(number)} duration={6} delay={0.2} />
                </h2>
                
                <span className="counter-three-item__text text-body">{text}</span>
            </div>
        </div>   
    );
};

export default CounterFourItem;