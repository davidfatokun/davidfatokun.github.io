import { useEffect, useState } from 'react'
import {
  faCss3, faDocker,
  faGitAlt,
  faHtml5, faJava,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="paragraph">

            <p>
            I'm a fourth year student at the University of British Columbia, where I am majoring in Computer Science,
            enrolled in the Co-op program, currently looking for work. I know myself to be a hardworking individual and
            an enthusiastic learner. I feel very strongly about utilizing every experience as an opportunity to get
            better and improve in various aspects of my life. I am also interested in learning and exploring new areas
            of Computer Science.
            </p>

            <h3>EDUCATION & AWARDS</h3>
            <h4>University of British Columbia&emsp;Vancouver, British Columbia | Sep 2019 - Apr 2023</h4>
            <p>Bachelor of Science (BSc) - Major in Computer Science, Year 4</p>
              <p className="bullet1">Completed 3rd year with a 3.3 GPA</p>
              <p className="bullet1">Awarded U.B.C. Science Dean’s Honour List in Year </p>

            <h3>TECHNICAL PROJECTS</h3>
            <h4>UBC Campus Information System (Group Project) &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  April 2022</h4>
              <p className="bullet1">
                Using Typescript, and other libraries and packages to query a dataset on the backend that contains details about UBC courses and classrooms to display the queried information on the frontend, using JavaScript, HTML, CSS, Rest API, Node.JS, Express and Bootstrap for users that want to seek information about a set of UBC courses or classrooms, such as courses that are taught by a particular instructor.
              </p>
            <h4>Covid 19 Health Database System (Group Project) &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  Dec 2021</h4>
              <p className="bullet1">
                Created a database system using PHP with CodeIgniter Framework, SQL, Docker, HTML and CSS, to store information pertaining to a customer booking an appointment to receive a vaccine dose at a vaccine center, made by a vaccine manufacturer. The database also records adverse events and orders placed from a vaccination center to a vaccine manufacturer. Currently converting this project to Java with Spring MVC Framework
              </p>
            <h4>Sports venue management application using Java &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Dec 2020</h4>
              <p className="bullet1">
                A sports venue management application that handles a variety of front desk operations such as sports and e-games room bookings, transactions, and identification
              </p>
              <p className="bullet1">
                Using Java’s object-oriented program, I created the sports venue management application as a graphical user interface with a Java frame and multiple panels in this frame. This frame projected responses to the user input onto the screen, which was collected using Java’s option pane, JButton and JComboBox.
              </p>
              <p className="bullet1">
                Since Java is an event driven program, the observer pattern was a very helpful tool. The event handler updated the program following a notification from the observable object, for each input
              </p>
              <p className="bullet1">
                All data collected from the user were stored offline and locally, using JSON. This data included customer bookings, transactions, and identification
              </p>
              <p className="bullet1">
                The schedule was held in a hashmap data structure where each key was a date, its value was that dates’ own schedule, these individual schedules contained a booking list for each sports/game event that day, represented as a constant number of arrays, each with a constant number of customers. Each booking time slot was either available or unavailable for a new booking. This data structure was in the runtime order of O(n), since the number of events and time slots per event were constant for each date.
              </p>

            <h3>WORK EXPERIENCE</h3>
            <h4>The Rec Room &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;  Vancouver, British Columbia |  Mar 2022 - Present</h4>
              <p className="bullet1">Line Cook for Fry, Grill, Salad and Shed Stations</p>
            <h4>Dairy Queen Canada	&emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; Calgary, Alberta |  Sep 2018 - Aug 2019</h4>
              <p className="bullet1">Responded to customer orders/needs at store counter and drive through</p>
              <p className="bullet2">Had to memorize the recipe for each menu item and prepare them in a timely manner when ordered</p>
              <p className="bullet1">Responsible for keeping the restaurant clean: sweeping, mopping, cleaning dishes and washrooms</p>
              <p className="bullet1">Became a go-to person for busy hours</p>


            <h3>TECHNICAL SKILLS</h3>
              <p className="bullet1">Comfortable using Java with Spring MVC Framework, Typescript, JavaScript, SQL, C++, Docker, HTML, CSS, Rest API, Github</p>


            <h3>INTERESTS</h3>
              <p className="bullet1">Sports games, e-games and social events with family & friends</p>
              <p className="bullet1">Software development, algorithm design, astronomy/astrophysics, philosophy</p>

          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="semi-circle-spin" />
    </>
  )
}

export default About
