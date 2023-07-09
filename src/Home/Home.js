import "./Home.css";
import pic from ".././assets/home-pic.png";
import gradpic from ".././assets/grad-pic.png";
import FadeInSection from "../components/FadeInSection/FadeInSection";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from ".././components/Button/Button.js";
import Typewriter from 'typewriter-effect';



function Home(){
    let [courseBoxes, setCourseBoxes] = useState([]);
    let [skillBoxes, setSkillBoxes] = useState([]);
    let [interestBoxes, setInterestBoxes] = useState([]);

    useEffect(() => {
        const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_INTERESTS_ID}`;
        const url2 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_COURSEWORK_ID}`;
        const url3 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_SKILLS_ID}`;

        const config = {
            headers : {
            "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
            }
    };

    
    axios.get(url1, config)
    .then(res => {
        let tableEntries1 = res.data.records;
        let interests = [];

        tableEntries1.forEach(record => {
        let entry = record.fields;
        let interest = {
            type: entry["Type"],
            interest: entry["Interest"]
        }
        interests.push(interest);
        });

        console.log(interests);
        setInterestBoxes(interests);
    })

    .catch(err=> console.log(err))

    

    axios.get(url2, config)
    .then(res => {
        let tableEntries2 = res.data.records;
        let courses = [];

        tableEntries2.forEach(record => {
        let entry = record.fields;
        let course = {
            semester: entry["Semester"],
            courses: entry["Courses"]
        }
        courses.push(course);
        });

        courseBoxes.sort((a, b) => a.order - b.order);
        console.log(courses);
        setCourseBoxes(courses);
    })
    .catch(err=> console.log(err))
    
    console.log("Finished fetching experience table from Airtable...");

    axios.get(url3, config)
    .then(res => {
        let tableEntries3 = res.data.records;
        let skills = [];

        tableEntries3.forEach(record => {
        let entry = record.fields;
        let skill = {
            type: entry["Type"],
            skill: entry["Skill"],

        }
        skills.push(skill);
        });

        console.log(skills);
        setSkillBoxes(skills);
    })
    .catch(err=> console.log(err))
    
    console.log("Finished fetching experience table from Airtable...");
   


}, []); 




    const Courses = () => <div className = "info-box">{courseBoxes.map(function (course){
            return (
                <div className = "box-text" key={course.semester}>
                    <div className = "semester-name">{course.semester}</div>
                    {course.courses.map(item => {return <li key = {item}>{item}</li>})}
                    </div>
                )})}
        </div>

    const Interests = () => <div className = "info-box">{interestBoxes.map(function (interest){
            return (
                <div className = "box-text" key={interest.type}>
                    <div className = "semester-name">{interest.type}</div>
                    {interest.interest.map(item => {return <li key = {item}>{item}</li>})}
                    </div>
                )})}
        </div>

    const Skills = () => <div className = "info-box">{skillBoxes.map(function (skill){
            return (
                <div className = "box-text" key={skill.type}>
                    <div className = "semester-name">{skill.type}</div>
                    {skill.skill.map(item => {return <li key = {item}>{item}</li>})}
                    </div>
                )})}
        </div>
    
    console.log(courseBoxes);

    const [displayText, setDisplayText] = useState("i1");

    function displayTextSetter(i) {
        setDisplayText(i);
    }

    return(
        <div className ="home-holder">
            <div className = "home-top-half-holder">
                <div className="home-top-half">
                    <div className = "home-flex">
                        <div className = "intro">
                                hi! i'm tanya.
                        </div>
                        <div className = "description">
                            <div className ="desc-text-home">
                                cs + cogsci @ cal
                            </div>
                        </div>
                    </div>
                    <div className = "image-and-decor">
                        <div className = "square-1"></div>
                        <div className = "square-2"></div>
                        <img alt="" className ="home-image" src={pic}></img>
                    </div>
                </div>
            </div>

            <div className="about-section">
            <FadeInSection>
            <div className="about-top-half">
                <div className = "about-images-decor">
                    <div className = "tiny-square-1"></div>
                    <div className = "tiny-square-2"></div>
                    <div className = "tiny-square-3"></div>
                    <div className = "tiny-square-4"></div>
                    <div className = "tiny-square-5"></div>
                    <div className ="about-images">
                        <div className = "dashed-frame-1"></div>
                        <div className = "solid-frame-1"></div>
                        <img alt="" src={gradpic} className="grad-pic"></img>
                    </div>
                </div>
                
                <div className="about-top-half-text">
                    <div className = "about-title">
                        nice to meet you!
                    </div>
                    <div className = "about-info">
                        I’m an aspiring software engineer and second-year at UC Berkeley studying computer science, cognitive science, and mathematics. I’m 
                        interested in the intersection between cognitive processes and technology and am eager to get experience with a variety of 
                        subfields in tech!
                    </div>
                </div>
            </div>
            </FadeInSection>

            <FadeInSection>
                <div className = "descriptors-typed-out">
                    <div className = "descriptors-intro">
                        i am a
                    </div>
                    <div className = "typewriter">
                        <Typewriter
                        options={{
                            strings: ['student.', 'full stack developer.', 'mathematician.', 'space enthusiast.'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                    
                </div>
                
            </FadeInSection>

            <FadeInSection>
                <div className = "fast-facts-holder">
                    <div className = "dashed-frame-2"></div>
                    <div className = "solid-frame-2"></div>
                    <div className = "dashed-frame-3"></div>
                    <div className = "solid-frame-3"></div>
                    <div className = "square-3"></div>
                    <div className = "square-4"></div>
                    <div className = "tiny-square-6"></div>
                    <div className = "tiny-square-7"></div>
                    <div className = "fast-facts">
                        <div className = "subsection-title">here's what i can do:</div>

                        <div className="button-holder-home">
                            <Button text="courses" function={() => displayTextSetter("i1")}/>
                            <Button text="interests" function={() => displayTextSetter("i2")}/>
                            <Button text="skills" function={() => displayTextSetter("i3")}/>
                        </div>

                        <div className="boxes">
                            {displayText === "i1" && <Courses />}
                            {displayText === "i2" && <Interests />}
                            {displayText === "i3" && <Skills />}
                        </div>
                    </div>
                </div>

                </FadeInSection>
                
                
        </div>

        </div>
    );
}

export default Home;
