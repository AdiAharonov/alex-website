import React, { useState, useEffect } from 'react';
import { BuissnesService } from '../services/buissnes-service'

export function ServiceList() {
    const [services, setServices] = useState();

    useEffect(() => {
        setServices(BuissnesService.getServices)
      }, []);

  return (
    <div>
      {services &&
        services.map((service) => (
          <div className="service" key={service.name}>
            <img src={service.img} alt="" />
            <div className="service-desc">
              <h2>{service.name}</h2>
              <p>{service.desc}</p>
              <button className="info-btn">עוד פרטים</button>
            </div>
          </div>
        ))}
    </div>
  );
}
