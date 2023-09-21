import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1290904409/photo/abstract-digital-news-concept.jpg?s=170667a&w=0&k=20&c=aWxZ2Tus_lAeyJUWcIYaxjeGLrzBlpO59f8uU31-8Gk="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>News </h3>
          <h5>Stay informed read any article!</h5 >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets1.cbsnewsstatic.com/hub/i/2022/04/27/0dff5232-5874-4e69-9c09-0ee19d878c6c/first-alert-weather-blue.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Weather</h3>
          <p>Find out the weather for today, stay prepared!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://play-lh.googleusercontent.com/umXYHlf13FStsUFuB-8J_v77T-ZvaedxCn8ZrtOPDROdFy6FFHTQzamfwKgjCiiCGk0=w1024"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 >MTA</h4>
          <h5 >All MTA information needed here, check out the MTA in the nav bar!</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;

