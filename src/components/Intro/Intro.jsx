import React from 'react'
import "./Intro.css"
import bg from "../../assets/image.png"
import btn from "../../assets/hireme.png"
import {Link} from "react-scroll"

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Yuvi
                                    </span> <br />Fullstack Developer</span>
        <p className="introPara">I am a skilled web designer with experience in creating
        visually appealing and user friendly websites.</p>
        <Link><button className="btn">
        <img src={btn} alt="Hire Me" className='btnImg'/>Hire Me</button>
        </Link>
        
        </div>
        <img src={bg} alt="profilee" className="bg" />
    </section>
  )
}

export default Intro