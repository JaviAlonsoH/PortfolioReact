import React from 'react'
import { Fade, Flip } from 'react-reveal'
import './/Aboutme.css'

function AboutMe() {
    return (
        <div className="aboutme-container">
            <Fade left cascade>
                <h1>About Me</h1>
                <Fade left>
                    <div className="aboutme-desc">
                        <p>My name is Javier and I'm a junior developer.</p>
                        <br></br>
                        <p>
                            In the past few years I've been studying and working on different stuff.
                            I got a degree in Sound Production in an academy called SAE Institute.
                            Just after that, I met a music producer who hired me as his sound engineer in his studio, where I had the pleasure to record with some good artists like "El Cigala".
                            I made 2 years there until I got interested on studying development and programming.
                        </p>
                        <br></br>
                        <p>
                            Up until now I have been studying and learning different technologies and
                            programming languages for about 2 years. I'm about to face my first internship as a developer and I'm excited about
                            the things I want to make on the future.
                        </p>
                    </div>
                </Fade>
            </Fade>
        </div >
    )
}

export default AboutMe
