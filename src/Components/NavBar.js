import {Link} from "react-scroll";
import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = ()=>{
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            var element = document.getElementById("NavBar");
          if(window.pageYOffset >=1)
          {
            element.classList.add("Dark");
          }
          else
          {
            element.classList.remove("Dark");
          }
        }
      }, []);
    return(
        <>
            <nav className="NavBar" id="NavBar">
                <div className="NavBar-Brand"><Link activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={700}
                            delay={10}
                            isDynamic={true}
                            className="text"
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            Lilo<span className="brand"> Digetal</span>
                        </Link></div>
                <ul className="NavBar-List">
                    <li className="NavBar-items">
                        <Link activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={700}
                            delay={10}
                            isDynamic={true}
                            className="NavBar-Link"
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="NavBar-items">
                        <Link activeClass="active"
                            to="AboutMe"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={10}
                            isDynamic={true}
                            className="NavBar-Link"
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="NavBar-items">
                    <Link activeClass="active"
                            to="MyServices"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={10}
                            isDynamic={true}
                            className="NavBar-Link"
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            My Services
                        </Link>
                    </li>
                    <li className="NavBar-items">
                        <Link activeClass="active"
                            to="ContactMe"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={10}
                            isDynamic={true}
                            className="NavBar-Link"
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}


export default NavBar;