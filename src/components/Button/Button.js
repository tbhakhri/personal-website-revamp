import "./Button.css";


function Button(props) {

    function callFunc(){
        if (props.function === "None"){
            console.log("none");
        }
        else{
            props.function();
        }
    }
    
    return (
        <div className ="button-holder">
            <div className="button-container">
                <button type="button" onClick = {callFunc} >
                    <div className="text-container-button">{props.text}</div>
                </button>
                <div id="dashed-button-frame-1"></div>
                <div id="dashed-button-frame-2"></div>
            </div>

        </div>
        

    );
}

export default Button;