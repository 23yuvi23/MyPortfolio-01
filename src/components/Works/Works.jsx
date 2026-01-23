import "./works.css"
import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"
import Portfolio4 from "../../assets/portfolio-4.png"
import Portfolio5 from "../../assets/portfolio-5.png"
import Portfolio6 from "../../assets/portfolio-5.png"

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Passionate Full Stack Developer with hands-on experience in building scalable, secure, and high-performance web applications.
Proficient in frontend and backend development using modern technologies and currently exploring DevOps and Cloud
Infrastructure to streamline deployment and automation. Strong problem-solving mindset with a focus on clean architecture,
efficiency, and continuous learning in fast-paced development environments.
</span>

<div className="worksImgs">
    <img src={Portfolio1} alt="" className="worksImg" />
    <img src={Portfolio2} alt="" className="worksImg" />
    <img src={Portfolio3} alt="" className="worksImg" />
    <img src={Portfolio4} alt="" className="worksImg" />
    <img src={Portfolio5} alt="" className="worksImg" />
    <img src={Portfolio6} alt="" className="worksImg" />
</div>
<button className="workBtn">See More</button>
    </section>
  )
}

export default Works