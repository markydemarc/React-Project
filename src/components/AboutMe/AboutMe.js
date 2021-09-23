import React from 'react'
import './AboutMe.css'
import imagen from "./img/m-imagen.jpg"

export const AboutMe = ()=> {

    return <section class="container">
             <div class="row">
              <article class="col-12">
              <h1 class="section__title">About Me</h1>
              <img src={ imagen } className="aboutme__img" alt="Reload"></img>
               <h2 class="section__subtitle">Marcos Demarchi, 33 yrs old.</h2>
               <h3 class="section__subtitle2">Creative Director, Copywriter, Content Creator.</h3>
               <p class="section__abtme__centertext">My career starts in 2011 as a creative copywriter and since then I worked with accounts and brands such as Unilever, Volkswagen, SCJohnson, Budweiser, American Express, IBM, YPF, among others. Always putting my best energy on them. I also write movies, I'm passionate about gaming and music and I'm venturing into the world of programming.</p>
               <h3 class="section__subtitle2">Education</h3>
               <ul>
               <li class="section__list">Advertising Degree - Universidad de Palermo. (i.p.)</li>
               <li class="section__list">Creativity - Brother Ad School, Buenos Aires.</li>
               </ul>
              </article>
             </div>
            </section>
}