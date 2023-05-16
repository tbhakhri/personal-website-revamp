import "./About.css";

function About(){
    return(
        <div className = "about-holder">
            <div className = "about-title">
                <h1>About</h1>
            </div>
            <div className = "about-description">
                I'm a student based in the New York Metropolitan Area who is currently pursuing a Computer Science degree at the 
                University of California, Berkeley. As of now, I am an aspiring software engineer but I hope to gain experience with 
                ML/AI, VR, and quantum computing. Feel free to take a look around my website and get to know me!
            </div>
            <div className = "circle-holder">
                <div className = "circle">
                    <div className = "circle-inner">
                        <div className = "circle-front">
                            <div className = "front-content">
                                Talk to me about...
                            </div>
                        </div>

                        <div className = "circle-back">
                            <div className = "back-content">
                                <li>Software Engineering</li>
                                <li>ML/AI</li>
                                <li>Quantum Physics</li>
                                <li>Mathematics</li>
                                <li>Poetry</li>
                                <li>Anime</li>
                                <li>Christopher Nolan Movies</li>
                                <li>Classical Music</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "circle">
                    <div className = "circle-inner">
                        <div className = "circle-front">
                            <div className = "front-content">
                                Classes I've Taken...
                            </div>
                        </div>

                        <div className = "circle-back">
                            <div className = "back-content">
                                <li>Interpretation of Computer Programs</li>
                                <li>Discrete Math and Probability Theory</li>
                                <li>Linear Algebra and Differential Equations</li>
                                <li>Data Structures</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "circle">
                    <div className = "circle-inner">
                        <div className = "circle-front">
                            <div className = "front-content">
                                Skills I have...
                            </div>
                        </div>

                        <div className = "circle-back">
                            <div className = "back-content">
                                <li>Python</li>
                                <li>Java</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                                <li>Google OAuth</li>
                                <li>Scheme</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;