import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <div className='about'>
      <h1>This is a feedback app</h1>
      <p>Version 1.0.0</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default AboutPage