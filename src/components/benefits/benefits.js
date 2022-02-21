import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import './benefits.scss';
import {useI18next} from "gatsby-plugin-react-i18next";
import {useBenefitsState} from "./benefits.state";

export function Benefits({title, description, benefits: benefitProps, quote}) {
    const {t} = useI18next();
    const {state, moveRight, moveLeft, returnShiftFor} = useBenefitsState(benefitProps);
    const {benefits} = state;
    
    function renderBenefit(benefit, i) {
        return (
            (benefit.content && <div key={i}>{benefit.content}</div>) || (
                <div key={i} className="benefit">
                    <img src={benefit.icon} alt="benefit-icon"/>
                    <h4>{t(benefit.title)}</h4>
                    <p className="p-small" dangerouslySetInnerHTML={{__html: t(benefit.description)}}/>
                </div>
            )
        );
    }
    
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md="10" lg="7">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Col>
            </Row>
            <Row className="scroller-container">
                <Col xs="2 my-5" className="scroller-buttons">
                    <div className="nav-buttons">
                        <button onClick={() => moveLeft()}>
                            <p>&#60;</p>
                        </button>
                        <br/>
                        <button onClick={() => moveRight()}>
                            <p>&#62;</p>
                        </button>
                    </div>
                </Col>
                <Col xs="10 my-5" style={{overflow: 'hidden'}} className="scroller-content">
                    <div className="benefits" style={{marginLeft: `-${returnShiftFor()}px`}}>
                        {benefits.map((benefit, i) => renderBenefit(benefit, i))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="10" md={{size: 7, offset: 5}} lg={{size: 4, offset: 7}}>
                    <p
                        className="text-left"
                        dangerouslySetInnerHTML={{
                            __html: quote
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

/*
class BenefitsComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        benefits: PropTypes.array,
        quote: PropTypes.string,
        locale: PropTypes.string,
        t: PropTypes.func,
        i18n: PropTypes.object,
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            benefits: [
                props.benefits[props.benefits.length - 1],
                ...props.benefits.slice(),
                ...props.benefits.slice(0, props.benefits.length - 1)
            ]
        };
        this.animating = false;
    }
    
    UNSAFE_componentWillReceiveProps(nextProps, nextCtx) {
        
        this.setState(() => {
            return {
                benefits: [
                    nextProps.benefits[nextProps.benefits.length - 1],
                    ...nextProps.benefits.slice(),
                    ...nextProps.benefits.slice(0, nextProps.benefits.length - 1)
                ]
            };
        });
        
    }
    
    returnShiftFor() {
        const screenSize = returnScreenSize();
        if (screenSize <= MEDIA_PHONE) {
            return screenSize;
        }
        return 420;
    }
    
    moveLeft() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `-=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {benefits} = state;
                
                let modifiedBenefits = [...benefits.slice(1), ...benefits[0]];
                
                anime({
                    targets: '.benefits',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });
                
                this.animating = false;
                return {
                    ...state,
                    benefits: modifiedBenefits
                };
            });
        });
    }
    
    moveRight() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `+=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {benefits} = state;
                
                let modifiedBenefits = [benefits[benefits.length - 1], ...benefits.slice(0, benefits.length - 1)];
                
                anime({
                    targets: '.benefits',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });
                
                this.animating = false;
                return {
                    ...state,
                    benefits: modifiedBenefits
                };
            });
        });
    }
    
    renderBenefit(benefit, i) {
        const {t} = this.props;
        
        return (
            (benefit.content && <div key={i}>{benefit.content}</div>) || (
                <div key={i} className="benefit">
                    <img src={benefit.icon} alt="benefit-icon"/>
                    <h4>{t(benefit.title)}</h4>
                    <p className="p-small" dangerouslySetInnerHTML={{__html: t(benefit.description)}}/>
                </div>
            )
        );
    }
    
    returnBenefitsStyle() {
        return {
            marginLeft: `-${this.returnShiftFor()}px`
        };
    }
    
    render() {
        const {title, description, quote} = this.props;
        const {benefits} = this.state;
        
        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md="10" lg="7">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </Col>
                </Row>
                <Row className="scroller-container">
                    <Col xs="2 my-5" className="scroller-buttons">
                        <div className="nav-buttons">
                            <button onClick={() => this.moveLeft()}>
                                <p>&#60;</p>
                            </button>
                            <br/>
                            <button onClick={() => this.moveRight()}>
                                <p>&#62;</p>
                            </button>
                        </div>
                    </Col>
                    <Col xs="10 my-5" style={{overflow: 'hidden'}} className="scroller-content">
                        <div className="benefits"
                            style={this.returnBenefitsStyle()}>{benefits.map((benefit, i) => this.renderBenefit(benefit, i))}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="10" md={{size: 7, offset: 5}} lg={{size: 4, offset: 7}}>
                        <p
                            className="text-left"
                            dangerouslySetInnerHTML={{
                                __html: quote
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export const Benefits = withTranslation()(BenefitsComponent);

*/
