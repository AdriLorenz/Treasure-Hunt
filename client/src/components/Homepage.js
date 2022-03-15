import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";
// Components
import Footer from "./Footer";
// Hook
//import { useHospitalsFetch } from "../hooks/useHospitalsFetch";
// Styles
import { Wrapper } from "./Homepage.styles";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

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
            <div className="inner" style={{ transform: 'translateX(-0%)' }}>
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
        <Wrapper>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </Carousel>
            <Footer />
        </Wrapper>

    )
}

export default Homepage;