import React, {Component} from "react";
import Carousel from 'react-multi-carousel';

import {references} from '../../../content/references';
import '../../../../node_modules/react-multi-carousel/lib/styles.css';
import "./references-spinner.scss";

export class ReferencesSpinner extends Component {
    
    render() {
        
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 4
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 4
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 2
            }
        };
        
        return (
            <Carousel responsive={responsive} arrows={false} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                {references.map((reference, index) => (
                    <div className="spinner-item" key={index}>
                        <img src={reference.image} alt={reference.name}/>
                    </div>
                ))}
            </Carousel>
        );
    }
    
}
