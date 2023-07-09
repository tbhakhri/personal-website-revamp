import "./Contact.css";
import github from "../assets/github-logo.png";
import gmail from "../assets/Gmail_Logo_512px.png";
import linkedin from "../assets/640px-LinkedIn_logo_initials.png";

function Contact(){

    return(
        <div className = "contact-holder">
            <div className = "contact-title">
                contact
            </div>
            <div className = "contact-content">
                <div className = "image-holder-contact">
                <div className = "contact-instructions">
                    Want to connect? Click one of the icons below!
                </div>
                
                <div className = "flexed-contact-specific">
                    <div className = "image-and-info-contact">
                            <a href="https://github.com/tbhakhri/"><img src={github} alt="github logo" className = "image-contact"></img></a>
                            <div>github</div>
                            <div className = "image-caption">
                                check out my github to see my technical work!
                            </div>
                        </div>
                        <div className = "image-and-info-contact">
                            <a href="https://www.linkedin.com/in/tanya-bhakhri-6113ba248/"><img src={linkedin} alt="linkedin logo" className = "image-contact"></img></a>
                            <div>linkedin</div>
                            <div className = "image-caption">
                                take a look at my linkedin to view more of my past experiences!
                            </div>
                        </div>
                        <div className = "image-and-info-contact">
                            <a href="mailto:tanya.bhakhri@berkeley.edu"><img src={gmail} alt="gmail logo" className = "image-contact"></img></a>
                            <div>email</div>
                            <div className = "image-caption">
                                send me an email if you want to reach out!
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "made-with-love">
                    made with ❤️ by tanya
                </div>
            </div>
        </div>
    );
}

export default Contact;