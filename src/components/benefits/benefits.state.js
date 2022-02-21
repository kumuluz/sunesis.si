import React, {useRef, useState} from "react";
import {MEDIA_PHONE, returnScreenSize} from "../../layouts/common";
import anime from "animejs";


function rearrangeBenefits(benefits) {
    return [
        benefits[benefits.length - 1], // last elem
        ...benefits.slice(), // all elements
        ...benefits.slice(0, benefits.length - 1), // all elems, but last
    ];
}

export function useBenefitsState(benefits) {
    const animating = useRef(false);
    
    const [state, setter] = useState({
        benefits: rearrangeBenefits(benefits),
    });
    
    function returnShiftFor() {
        const screenSize = returnScreenSize();
        if (screenSize <= MEDIA_PHONE) {
            return screenSize;
        }
        return 420;
    }
    
    function moveLeft() {
        const shiftFor = returnShiftFor().toString(10);
        if (animating.current) {
            return;
        }
        
        animating.current = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `-=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            setter(prevState => {
                const {benefits} = prevState;
                let modifiedBenefits = [...benefits.slice(1), benefits[0]];
                try {
                    anime({
                        targets: '.benefits',
                        translateX: 0,
                        easing: 'none',
                        duration: 0
                    });
                } catch (_) {
        
                }
                animating.current = false;
                return {
                    ...prevState,
                    benefits: modifiedBenefits,
                };
            });
        }).catch(_ => {
    
        })
    }
    
    function moveRight() {
        const shiftFor = returnShiftFor().toString(10);
        if (animating.current){
            return;
        }
        animating.current = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `+=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            setter(prevState => {
                const {benefits} = prevState;
                let modifiedBenefits = [benefits[benefits.length - 1], ...benefits.slice(0, benefits.length - 1)];
                try {
                    anime({
                        targets: '.benefits',
                        translateX: 0,
                        easing: 'none',
                        duration: 0
                    });
                } catch (_) {
                
                }
                animating.current = false;
                return {
                    ...prevState,
                    benefits: modifiedBenefits,
                };
            });
        }).catch(_ => {
        
        });
    }
    
    return {
        state,
        moveLeft,
        moveRight,
        returnShiftFor,
    }
}
