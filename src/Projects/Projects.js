import ProjectBox from "./ProjectBox";
import "./Projects.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import FadeInSection from "../components/FadeInSection/FadeInSection";


function Projects(){
    let [projectBoxes, setProjectBoxes] = useState([]);

    useEffect(() => {
        const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJECTS_ID}`;
        const config = {
          headers : {
            "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          }
        };

    axios.get(url1, config)
    .then(res => {
      let tableEntries = res.data.records;
      let items = [];

      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["Name"],
          description: entry["Description"],
          dates: entry["Dates"],
          position: entry["Position"],
          skills: entry["Skills"],
          image: entry["Image"][0]["url"],
          order: entry["Order"]
        }
        items.push(item);
      });
      items.sort((a, b) => a.order - b.order);

      console.log(items);
      setProjectBoxes(items);
    })
    .catch(err=> console.log(err))
  
    console.log("Finished fetching experience table from Airtable...");
  }, []);


    return (
        <div className = "projects-holder">
            <div className = "projects-title">
                projects
            </div>
            <div className = "projects">
                {projectBoxes.map(item => {
                    return <FadeInSection><ProjectBox name={item['name']} dates={item['dates']} desc={item['description']} pos={item['position']} skills={item['skills']} key={item['name']} image={item['image']} /></FadeInSection>
                    })
                }
            </div>
        </div>
    );
}

export default Projects;