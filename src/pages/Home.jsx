import React, { useState, useEffect } from 'react'
import { BuissnesService } from '../services/buissnes-service'
import ReactContactForm from 'react-mail-form';

export function Home() {

    const [services, setServices] = useState();

    useEffect(() => {
        setServices(BuissnesService.getServices)
      }, []);

    return (
        <div className="home">
            <img className="landing-page-image" src="https://secureblackops.com/wp-content/uploads/2019/02/Security-System-Installation-1110x550.jpg" alt="" />
            <div className="main-container">
                <h1>התקנות כל סוגי המערכות </h1>
                <div className="service-list">
                    {services && services.map(service => <div className="service" key={service.name}>
                    <img src={service.img} alt="" />
                    <div className="service-desc">
                    <h2>{service.name}</h2>
                    <p>{service.desc}</p>
                    <button className="info-btn">עוד פרטים</button>
                    </div>
                    </div>)}
                </div>
                <h2>אנחנו כאן לשירותכם</h2>
                <ReactContactForm
                 to="adi.ahronov@gmail.com"
                 contentsPlaceholder="צור קשר!"
                 buttonText="שלח מייל"
                 titlePlaceholder="מה תהיה מעוניין לשאול"
                 className="mail-form" />
            </div>
        </div>
    )
}
