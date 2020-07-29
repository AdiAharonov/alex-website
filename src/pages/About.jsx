import React from 'react'
import { Gallery } from '../cmps/Gallery' 

export function About() {
    return (
        <div className="about">
            <img src="https://irp-cdn.multiscreensite.com/eb491d6e/dms3rep/multi/IMG_3689-515525cc.jpg" alt="" className="about-page-image" />
            <div className="main-container">
            <h2>א.א מערכות - כל מה שצריך במקום אחד</h2>
            <h3>התקנת מערכות מקצועית </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate officiis, aliquam, maxime ad expedita omnis, a distinctio recusandae incidunt atque praesentium libero numquam dolorum? Ut praesentium dolorum ad quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia consequatur fugit laboriosam, voluptates vitae obcaecati vel delectus accusamus veritatis facere quisquam numquam dolore tempore hic, totam sequi! Sequi, explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio exercitationem, repudiandae illum adipisci explicabo! Perspiciatis, autem eius ipsum doloribus porro delectus vel, fuga maxime laudantium, ad eum? Laudantium, ducimus?</p>
            <Gallery />
            </div>
        </div>
    )
}
