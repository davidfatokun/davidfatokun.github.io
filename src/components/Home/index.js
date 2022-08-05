import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D', 'a', 'v', 'i', 'd', ' ', 'F', 'a', 't','o', 'k', 'u', 'n', ]
  const jobArray1 = [
    'A',
    ' ',
    'C',
    'o',
    'm',
    'u',
    'p',
    'u',
    't',
    'e',
    'r',
    ' ',
    'S',
    'c',
    'i',
    'e',
    'n',
    'c',
    'e',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    'S',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={22}
            />
          </h1>
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          <br/>
          <br/>
          <br/>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="semi-circle-spin" />
    </>
  )
}

export default Home