import "./About.css";

function About(){
    return(
        <div className = "about-holder">
            <div className = "about-title">
                <h1>About</h1>
            </div>
            <div className = "about-description">
                When I was younger, I wanted to be everything from a Marine Biologist, to President. My career plans have certainly changed, 
                but what’s remained the same is a passion for problem solving, mathematics, and technology. I’m always looking for new fields 
                to gain experience in!
            </div>
            <div className = "circle-holder">
                <div className = "circle">
                    <span className = "pre-hover">
                        Talk to me about...
                    </span>

                    <span className = "post-hover">
                        <ul>
                            <li>Software Engineering</li>
                            <li>ML/AI</li>
                            <li>Quantum Physics</li>
                            <li>Mathematics</li>
                            <li>Poetry</li>
                            <li>Anime</li>
                            <li>Christopher Nolan Movies</li>
                            <li>Classical Music</li>
                        </ul>
                    </span>
                </div>
                <div className = "circle">
                    <span className = "pre-hover">
                        Classes I've Taken...
                    </span>
                    <span className = "post-hover">
                        <ul>
                            <li>The Structure and Interpretation of Computer Programs</li>
                            <li>Discrete Math and Probability Theory</li>
                            <li>Linear Algebra and Differential Equations</li>
                        </ul>
                    </span>
                </div>
                <div className = "circle">
                    <span className = "pre-hover">
                        Skills I have...
                    </span>
                    <span className = "post-hover">
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostgreSQL</li>
                            <li>Google OAuth</li>
                            <li>R</li>
                            <li>C++</li>
                            <li>MATLAB</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default About;