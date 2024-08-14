import React, { useState, useEffect } from "react";
import beautifulimage from "../image/hero_endframe__cvklg0xk3w6e_large 2.png";
import luxury from "../image/gilles-lambert-pb_lF8VWaPU-unsplash.jpg";
import hero from "../image/marie-michele-bouchard--W2PJu9-iZI-unsplash.jpg";
import IPhoneicons from "../image/1200px-Apple_gray_logo 1.png";
import "../style/nabar.css";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 7); // just for this demo, today + 7 days

    const timer = setInterval(() => {
      const now = new Date();
      const difference = compareDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="slider" src={beautifulimage} alt="First slide" />
          <Carousel.Caption>
            <img src={IPhoneicons} alt="IphoneIcons" />
            <h3>iPhone 14 Series</h3>
            <p>Up to 10% off Voucher</p>
            <p>Shop Now</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={luxury} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={hero} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="timer">
        <h1 className="FlashSales">Flash Sales</h1>
        <span id="days">{timeLeft.days}</span> days
        <span id="hours">{timeLeft.hours}</span> hours
        <span id="minutes">{timeLeft.minutes}</span> minutes
        <span id="seconds">{timeLeft.seconds}</span> seconds
      </div>
    </div>
  );
}

export default Slider;
