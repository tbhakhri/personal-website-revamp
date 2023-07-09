import './ExperienceBox.css';

function ExperienceBox(props){

    return(
            <div id = "experience-box">
                <div className = "desc-and-image">
                    <div className = "text-for-exp">
                    <div id = "dashed-frame-exp-1"></div>
                    <div id = "solid-frame-exp-1"></div>
                    <div id = "dashed-frame-exp-2"></div>
                    <div id = "solid-frame-exp-2"></div>
                    <div className = "exp-title">
                        <a href ={props.link}>{props.name}</a>
                    </div>
                    <div className = "exp-pos">
                        {props.pos}
                    </div>
                    <div className = "exp-dates">
                        {props.dates}
                    </div>

            
                        <div className = "exp-desc">
                            {props.desc}
                        </div>
                    </div>

                    <div className = "exp-image">
                        <img src = {props.image} alt = "project pic" className = "experience-image"></img>
                    </div>
                </div>
                
            </div>
        
    )

}

export default ExperienceBox;