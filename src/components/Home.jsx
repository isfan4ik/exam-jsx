import React from 'react'
import logo from '../images/logo.png'
import img from '../images/img.png'
import headerimgg from '../images/headerimgg.png'
import  a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import d from '../images/d.png'
import f from '../images/f.png'
import e from '../images/e.png'
import IMAGE from '../images/IMAGE.png'
import Frame1omg from  '../images/Frame1omg.png'
import Frame2omg from  '../images/Frame2omg.png'
import Frame3omg from '../images/Frame3omg.png'
import Frame4omg from '../images/Frame4omg.png'
import Frame1 from '../images/Frame1.png'
import Frame2 from '../images/Frame2.png'
import Frame3 from '../images/Frame3.png'
import '../components/Home.css'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
        <header>
          
         <nav>
        <img className='nav-logo' src={logo} alt="" />
        <a href="./index.html" class="nav-link">Home</a>
        <a href="./index.html" class="nav-link2">About</a>
        <a href="./index.html" class="nav-link3">Team</a>
        <a href="./index.html" class="nav-link4">Shop</a>
        <img className='header-img' src={img} alt="" />
        <h3 class="header-text">FUTURE OF eSPORTS</h3>
        <h1 class="header-text2">Unleash The Next Generation of Gaming</h1>
        <p class="header-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>


        <div class="button" data-tooltip="Size: 1.98Gb">
            <div class="button-wrapper">
              <div class="text">Download</div>
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                </span>
              </div>
            </div>


            <h3 class="header-text4">View our team</h3>
            <img className='header-img2' src={headerimgg} alt="" />
               
          <Link to={"/Login"}><button className="nav-button">Register</button> </Link>
         </nav>
        </header>

            <main>
               <section>
                  <div className='section-div'>
                  <h2 class="section-text">Our Sponsors</h2>
                  <p class="section-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                   <img  className='section-img'  src={a} alt="" />
                   <img  className='section-img2' src={b} alt="" />
                   <img  className='section-img3' src={c} alt="" />
                   <img  className='section-img4' src={d} alt="" />
                   <img  className='section-img5' src={f} alt="" />
                   <img  className='section-img6' src={e} alt="" />
                  </div>
               </section>
               <section>
                  <div className='section-div2'>
                       <img className='div2-img' src={IMAGE} alt="" />
                       <img className='div2-img2' src={img} alt="" />
                       <h3 class="div2-text">FUTURE OF eSPORTS</h3>
                       <h1 class="div2-text2">Your one stop shop gaming needs!</h1>
                       <p class="div2-text3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                  <img  className='div2-img3' src={Frame1omg} alt="" />
                  <img className='div2-img4' src={Frame2omg} alt="" />
                  <img className='div2-img5' src={Frame3omg} alt="" />
                  <img className='div2-img6' src={Frame4omg} alt="" />
                  </div>
               </section>
               <section>
                 <div className='section-div3'>
                 <img className='div3-img' src={Frame1} alt="" />
                  <img className='div3-img2' src={Frame2} alt="" />
                  <img className='div3-img3' src={Frame3} alt="" />
                 </div>
               </section>
            </main>
            <footer>
                 <div class="footer-div">
                 <h1 class="footer-text">Join the largest gaming community</h1>
                 <p class="footer-text2">lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo</p>
                 <a href="./nimadur.html"><button class="buttonn type1"></button></a>
                </div>
                </footer>
                </div>

                
  )
}

export default Home