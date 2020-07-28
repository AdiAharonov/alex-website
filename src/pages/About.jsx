import React from 'react'
import { Gallery } from '../cmps/Gallery' 

export function About() {
    return (
        <div className="about">
            <img src="https://lh3.googleusercontent.com/proxy/5Jut4mp2lW340R21d1JXd3QSFb_QioA6S7m-RHzJjNwar47NLGEW4VEtHIGUgYvxZ2FTKlk6dbClr3yEP8hiXNNthB_JlkD4G7g6gELhJnAcZ4XUyHaMzZvCGxBxSzGWzFhkf444n2oe2jE" alt="" className="about-page-image" />
            <div className="main-container">
            <h2>א.א מערכות - כל מה שצריך במקום אחד</h2>
            <h3>התקנת מערכות מקצועית </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate officiis, aliquam, maxime ad expedita omnis, a distinctio recusandae incidunt atque praesentium libero numquam dolorum? Ut praesentium dolorum ad quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia consequatur fugit laboriosam, voluptates vitae obcaecati vel delectus accusamus veritatis facere quisquam numquam dolore tempore hic, totam sequi! Sequi, explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio exercitationem, repudiandae illum adipisci explicabo! Perspiciatis, autem eius ipsum doloribus porro delectus vel, fuga maxime laudantium, ad eum? Laudantium, ducimus?</p>
            <Gallery />
            </div>
        </div>
    )
}
