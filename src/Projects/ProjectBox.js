import './ProjectBox.css';

function ProjectBox(props){

    return(
        <div className = "project-box">
            <div className = "project-info">
                <div className = "proj-title">
                    <span className = "pos-title">{props.name}</span>
                </div>
                <div className= "proj-pos">
                    {props.pos}
                </div>
                <div className = "proj-dates">
                    {props.dates}
                </div>
                <div className = "proj-skills">
                    {props.skills.map(item => {
                        return<div className ="skill">{item}</div>
                    })}
                </div>
                <div className = "proj-desc">
                    {props.desc}
                </div>
            </div>
            
            <div className = "proj-image">
                <img src = {props.image} alt = "project pic" className = "project-image"></img>
            </div>
        </div>
    )

}

export default ProjectBox;