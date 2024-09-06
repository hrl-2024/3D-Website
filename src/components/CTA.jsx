import React from 'react'
import { Link } from 'react-router-dom'

const base = import.meta.env.VITE_BASE_URL;

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Have a project in mind? <br className='sm:block hidden' />
            Let's work together!
        </p>
        <Link to={`${base}contact`} className='btn'>
        Contact
        </Link>
    </section>
  )
}

export default CTA