import React from 'react';
import { ServiceList } from '../cmps/ServiceList';
import ReactContactForm from 'react-mail-form';
import { CarouselCmp } from '../cmps/Carousel';
import { Button } from 'react-bootstrap';

export function Home() {
  return (
    <div className="home">
      <img
        className="landing-page-image"
        src="https://costhack.com/wp-content/uploads/2019/11/surveillance-system-installation-cost.png"
        alt=""
      />
      <div className="landing-quick-service">
        <h2>הטמעת מערכות מקצועית</h2>
        <Button variant="outline-danger">לפתיחת קריאה</Button>
      </div>
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
