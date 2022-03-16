import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Wrapper, Content, CarouselItem, gg } from "./Homepage.styles";

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
                            {index + 1}
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

            </Content>
            </Wrapper>

            <gg></gg>
            <section id="globalGoals">
                <figure>
                    <img src={Goal3} alt="Not-Found" id="goal3" />
                    <figcaption><p>a</p></figcaption>
                </figure>
                <figure>
                    <figcaption><p>and</p></figcaption>
                    <img src={Goal7} alt="Not-Found" id="goal7" />
                </figure>
                <figure>
                    <img src={Goal8} alt="Not-Found" id="goal8" />
                    <figcaption><p>a</p></figcaption>
                </figure>
                <figure>
                    <figcaption><p>a</p></figcaption>
                    <img src={Goal11} alt="Not-Found" id="goal11" />
                </figure>
                <figure>
                    <img src={Goal12} alt="Not-Found" id="goal12" />
                    <figcaption><p>a</p></figcaption>
                </figure>
                <figure>
                    <figcaption><p>app</p></figcaption>
                    <img src={Goal13} alt="Not-Found" id="goal13" />
                </figure>
                <figure>
                    <img src={Goal15} alt="Not-Found" id="goal15" />
                    <figcaption><p>a</p></figcaption>
                </figure>
                <figure>
                    <figcaption><p>a</p></figcaption>
                    <img src={Goal16} alt="Not-Found" id="goal16" />
                </figure>
                <figure>
                    <img src={Goal17} alt="Not-Found" id="goal17" />
                    <figcaption><p>a</p></figcaption>
                </figure>

            </section>




            <Footer />
        </>

    )
}

export default Homepage;