import './AboutMe.css';
import Wave from "../assets/svg/Wave-Dark.svg";
import Timeline from '../Components/TimeLine';
import ProfileImage from "../assets/Images/ProfileImage.jpg";

const AboutMe = ()=>{
    
    return(
        <>
            <div className="AboutMe-Container" id="AboutMe">
                <h1 className="AboutMe-Title">About Me</h1>
                <div className="AboutMe-TimeLine">
                    <Timeline/>
                </div>
                <img src={Wave} alt="wave" className="Dark-Wave"></img>
            </div>
            
        </>
    );
}


export default AboutMe;