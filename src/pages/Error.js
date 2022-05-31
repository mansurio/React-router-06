import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className='section'>
     <h2>Error Not Found....</h2>
     <Link to='/' className='btn'>Back Home</Link>
    </section>
  )
}
