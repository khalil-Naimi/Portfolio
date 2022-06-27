import "./MyServices.css";
import Wave from "../assets/svg/Wave.svg";
import CardList from "../Components/CardList";

const MyServices = () => {
  return (
    <>
      <div className="MyServices-Container" id="MyServices">
        <h1 className="MyServices-Title">My Services</h1>
        <CardList />
        <img src={Wave} alt="wave" className="Wave"></img>
      </div>
    </>
  );
};

export default MyServices;
