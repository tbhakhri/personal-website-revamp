import "./Experience.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ExperienceBox from './ExperienceBox.js';
import FadeInSection from "../components/FadeInSection/FadeInSection";

function Experience(){

    let [experienceBoxes, setExperienceBoxes] = useState([]);

    useEffect(() => {
        const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_EXPERIENCE_ID}`;
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
          dates: entry["Date"],
          position: entry["Position"],
          description: entry["Description"],
          link: entry["Link"],
          order: entry["Order"],
          image: entry["Image"][0]["url"]
        }
        items.push(item);
      });

      items.sort((a, b) => a.order - b.order);

      setExperienceBoxes(items);
    })
    .catch(err=> console.log(err))
  
    console.log("Finished fetching experience table from Airtable...");
  }, []);

    return (
        <div className = "experience-holder">
            <div className = "experience-title">
                experiences
            </div>
            <div className = "experiences">
                {experienceBoxes.map(item => {
                    return <FadeInSection><ExperienceBox name={item['name']} dates={item['dates']} pos={item['position']} desc = {item['description']} link = {item['link']} image = {item['image']} /></FadeInSection>
                    })
                }
            </div>
        </div>
    );
    
}

export default Experience;