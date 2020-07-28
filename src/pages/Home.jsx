import React from 'react';
import { ServiceList } from '../cmps/ServiceList';
import ReactContactForm from 'react-mail-form';
import { CarouselCmp } from '../cmps/Carousel';

export function Home() {
  return (
    <div className="home">
      <img
        className="landing-page-image"
        src="https://secureblackops.com/wp-content/uploads/2019/02/Security-System-Installation-1110x550.jpg"
        alt=""
      />
      <div className="main-container">
        <h1>התקנות כל סוגי המערכות </h1>
        <CarouselCmp />
        <h2>צריך להתקין מערכת בבית או בעסק?</h2>
        <ServiceList />
        <h2>אנחנו כאן לשירותכם</h2>
        <ReactContactForm
          to="adi.ahronov@gmail.com"
          contentsPlaceholder="צור קשר!"
          buttonText="שלח מייל"
          titlePlaceholder="מה תהיה מעוניין לשאול"
          className="mail-form"
        />
      </div>
    </div>
  );
}
