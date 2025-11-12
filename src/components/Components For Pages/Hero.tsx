import React from 'react';
import './Hero.css';
import dogImage from '../../img/main/camilo-fierro-z7rcwqCi77s-unsplash.jpg';
import dogImage2 from '../../img/main/preillumination-seth-SLJn4Cpy0gI-unsplash.jpg';

const Hero: React.FC = () => {
    return (
        <>
            <div className="hero">
                <section className="hero-section">
                    <div className="hero-left">
                        <div className="hero-image-container">
                            <div className="abstract-shape shape1"></div>
                            <div className="abstract-shape shape2"></div>
                            <img src={dogImage} alt="Dog" className="hero-image"/>
                        </div>
                    </div>

                    <div className="hero-right" id="about">
                        <div className="about-box">
                            <h3>About us</h3>
                            <p>
                                For athletes, high altitude produces two contradictory effects on performance.
                                For explosive events Physiological respiration involves the mechanisms that ensure
                                that the composition of the functional The long barrow was built on land previously
                                inhabited in the Mesolithic period. It consisted of a s Physical space is often
                                conceived in three linear dimensions, although modern physicists usually con
                                In the eighteenth century the German philosopher Immanuel Kant developed a
                                theory of knowledge in wh
                            </p>
                        </div>
                    </div>
                </section>

                <section className="hero-section frame3">
                    {/* Left text box */}
                    <div className="hero-left side">
                        <div className="about-box">
                            <h3>What can we do for you?</h3>
                            <p>
                                For athletes, high altitude produces two contradictory effects on performance.
                                For explosive events, physiological respiration involves the mechanisms that ensure
                                that the composition of the functional. The long barrow was built on land previously
                                inhabited in the Mesolithic period. It consisted of a physical space often conceived
                                in three linear dimensions, although modern physicists usually consider more complex
                                frameworks of space and perception.
                            </p>
                        </div>
                    </div>

                    {/* Center image */}
                    <div className="hero-center">
                        <div className="hero-image-container">
                            <div className="abstract-shape shape1"></div>
                            <div className="abstract-shape shape2"></div>
                            <img src={dogImage2} alt="Dog training" className="hero-image"/>
                        </div>
                    </div>

                    {/* Right text box */}
                    <div className="hero-right bottom">
                        <div className="about-box">
                            <h3>News</h3>
                            <p>
                                For athletes, high altitude produces two contradictory effects on performance.
                                For explosive events, physiological respiration involves the mechanisms that
                                ensure consistent performance under varying conditions. It affects endurance,
                                coordination, and adaptation — forming the base of our philosophy in performance
                                and training methodology.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Hero;
