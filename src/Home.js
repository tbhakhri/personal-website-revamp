import "./Home.css";


function Home(){

    return(
        <div className ="home-holder">
            <div className = "intro">
                <h1>Hi! I'm <span className = "name">Tanya</span>.</h1>
            </div>
            <div className ="description">
                I’m a second year Computer Science Major at UC Berkeley finding my niche within the tech industry.
            </div>
        </div>
    );
}

export default Home;
