import "./Popup.css";

function Popup(props){


    function CancelPopup() {
        props.exit();
    }

    return props.trigger ? (
        <div className = "shaded-background">
            <div className = "pop-up">
                <div className = "pop-up-first-line">
                    <h2 className="main-header">{props.title}</h2>
                    <button className="x-button" onClick={CancelPopup}>x</button>
                </div>
                <div className = "pop-up-txt">
                    {props.text}
                </div>
            </div>
            
        </div>
        ):""
    ;
}
export default Popup;