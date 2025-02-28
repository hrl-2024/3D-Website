import { render } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const base = import.meta.env.VITE_BASE_URL;

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
          {btnText}
          <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContend = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Ruihang (Henry)</span> 👋
            <br />
            Software engineer; BA/MS in Computer Science.
        </h1>
    ),
    2: (
        <InfoBox
            text="Looking for full time SWE job"
            link = {`${base}about`}
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Worked on multiple projects"
            link = {`${base}projects`}
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link = {`${base}contact`}
            btnText="Let's Talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContend[currentStage] || null;
}

export default HomeInfo