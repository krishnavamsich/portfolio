import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <sectio id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Vamsi</span> <br/> React Developer</span>
        <p className="introPara">I am a skilled React Developer With Experience in creating <br/> visually appealing and user friendly websites</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' /> Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </sectio>
  )
}

export default Intro
