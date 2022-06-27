import React from "react";
import DeskTop from "../assets/svg/DeskTop.svg";
import WebApp from "../assets/svg/WebApp.svg";
import Server from "../assets/svg/Server.svg";
import Coding from "../assets/svg/Coding.svg";
import Maintenance from "../assets/svg/Maintenance.svg";
import MobileApp from "../assets/svg/MobileApp.svg";

const CardList = () => {
  return (
    <>
      <div className="Card-Container">
        <div className="Card">
          <h2 className="Card-title">Desktop Application</h2>
          <img src={DeskTop} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
        <div className="Card">
          <h2 className="Card-title">Website</h2>
          <img src={WebApp} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
        <div className="Card">
          <h2 className="Card-title">Hosting Server</h2>
          <img src={Server} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
        <div className="Card">
          <h2 className="Card-title">Learn to coding</h2>
          <img src={Coding} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
        <div className="Card">
          <h2 className="Card-title">Maintenance</h2>
          <img src={Maintenance} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
        <div className="Card">
          <h2 className="Card-title">Mobile Application</h2>
          <img src={MobileApp} alt="DeskTop" className="Card-Icon"></img>
          <p className="Card-paragraph">
            Quaestione igitur per multiplices dilatata fortunas cum ambigerentur
            quaedam, non nulla levius actitata constaret, post multorum clades
            Apollinares ambo pater et filius in exilium acti cum ad locum
          </p>
          <button className="Card-Button">Get Start</button>
        </div>
      </div>
    </>
  );
};

export default CardList;
