import React from 'react';
import { Carousel } from 'react-bootstrap';

export function CarouselCmp() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.itoutcomes.com/wp-content/uploads/2016/08/Installer-Solution.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>כל המערכות שתצטרך במקום אחד</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.asecurelife.com/app/uploads/2017/03/security-system-installation.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>שירות מקצועי ואמין</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dxcdn.azureedge.net/dxprodimages/0006967_accurate-electrical-and-instrumentation-system-design-and-installation.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>מחירים נוחים</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
