import React, { useState } from "react";

// import { useSwipeable } from "react-swipeable";
// Components
import Footer from "./Footer";
// Hook
//import { useHospitalsFetch } from "../hooks/useHospitalsFetch";
// Images
import PeopleBeach from "../assets/images/photos/peopleBeach.jpg";
import PeopleCinema from "../assets/images/photos/peopleCinema.jpg";
import PeopleTalking from "../assets/images/photos/peopleTalking.jpg";
import Logo from "../assets/icons/RSVamos_Logo.png";
import GGLogo from "../assets/images/illustrations/GGLogo.png";
import Goal3 from "../assets/images/illustrations/3.png";
import Goal5 from "../assets/images/illustrations/5.png";
import Goal7 from "../assets/images/illustrations/7.png";
import Goal8 from "../assets/images/illustrations/8.png";
import Goal11 from "../assets/images/illustrations/11.png";
import Goal12 from "../assets/images/illustrations/12.png";
import Goal13 from "../assets/images/illustrations/13.png";
import Goal15 from "../assets/images/illustrations/15.png";
import Goal16 from "../assets/images/illustrations/16.png";
import Goal17 from "../assets/images/illustrations/17.png";

// Styles
import { Wrapper, Content, CarouselItem, GG } from "./Homepage.styles";

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`${index === activeIndex ? "active" : ""}`} onClick={() => {
                            updateIndex(index);
                        }}>
                            
                        </button>

                    );
                })}
            </div>
        </div>
    );
};

const Homepage = () => {
    return (
        <>
            <Wrapper>
                <Carousel>
                    <CarouselItem image={PeopleBeach} />
                    <CarouselItem image={PeopleCinema} />
                    <CarouselItem image={PeopleTalking} />
                </Carousel>
                <Content>
                    <br></br>
                    <h1>What is this?</h1>
                    <p>Are you interested on meeting new people? Or just going somewhere with friends?</p>
                    <p><b>Join our app!</b></p>
                    <br></br>
                    <div>
                        <img src={Logo} alt="Not-Found" id="logo" />
                    </div>
                    <p>Welcome! Our app consists on meeting people and go together to places in
                        Gran Canaria. You will see routes you can select with places to go and earn points
                        that you can use as discounts in other routes you want to do.
                    </p>
                    <div>
                        <img src={GGLogo} alt="Not-Found" id="gglogo" />
                    </div>
                    <p>The Global Goals are a set of 17 commitments made by 193 world leaders,
                        to end extreme poverty, inequality, and climate change by 2030.
                    </p>
                    <p>
                        The global goals we use in our app are:
                    </p>
                    <br></br>

                </Content>
            </Wrapper>

            <GG>
                <section id="globalGoals">
                    <figure>
                        <img src={Goal3} alt="Not-Found"  />
                        <figcaption id="goal3"><p>Ensure healthy lives and promote well-being for all at all ages</p></figcaption>
                    </figure>
                    <figure>
                        <figcaption id="goal5"><p>Achieve gender equality and empower all women and girls</p></figcaption>
                        <img src={Goal5} alt="Not-Found"  />
                    </figure>
                    <figure>
                        <img src={Goal7} alt="Not-Found"  />
                        <figcaption id="goal7"><p>Ensure access to affordable, reliable, sustainable and modern energy for all</p></figcaption>
                    </figure>
                    <figure>
                        <figcaption id="goal8"><p>Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</p></figcaption>
                        <img src={Goal8} alt="Not-Found"  />
                    </figure>
                    <figure>
                        <img src={Goal11} alt="Not-Found"  />
                        <figcaption id="goal11"><p>Make cities and human settlements inclusive, safe, resilient and sustainable</p></figcaption>
                    </figure>
                    <figure>
                        <figcaption id="goal12"><p>Ensure sustainable consumption and production patterns</p></figcaption>
                        <img src={Goal12} alt="Not-Found"  />
                    </figure>
                    <figure>
                        <img src={Goal13} alt="Not-Found"  />
                        <figcaption id="goal13"><p>Take urgent action to combat climate change and its impacts</p></figcaption>
                    </figure>
                    <figure>
                        <figcaption id="goal15"><p>Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests and combat desertification</p></figcaption>
                        <img src={Goal15} alt="Not-Found"  />
                    </figure>
                    <figure>
                        <img src={Goal16} alt="Not-Found"  />
                        <figcaption id="goal16"><p>Promote peaceful and inclusive societies for sustainable development</p></figcaption>
                    </figure>
                    <figure>
                        <figcaption id="goal17"><p>Strengthen the means of implementation and revitalize the global partnership for sustainable development</p></figcaption>
                        <img src={Goal17} alt="Not-Found"  />
                    </figure>

                </section>

            </GG>




            <Footer />
        </>

    )
}

export default Homepage;