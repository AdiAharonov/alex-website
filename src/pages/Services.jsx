import React from 'react'
import { ServiceList } from '../cmps/ServiceList'

export function Services() {

    return (
        <div className="services main-container">
            <h2>כל המערכות שאתה צריך במקום אחד</h2>
            <ServiceList />
        </div>
    )
}
