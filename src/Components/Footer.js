
import React, { useState } from 'react';
import './Footer.css';

const Footer = ()=>{
    
    const [dateState, setDateState] = useState("2021-" + new Date().getFullYear())
    
    return(
        <>
            <div className="Footer">
                <div className="Fotter-Media">
                    <ul>
                        <li>
                            <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-linkedin"></i> Linkdin</a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-github-square"></i> gitHub</a>
                        </li>
                    </ul>
                </div>
                <div className="Fotter-CopyRightTime">
                    &copy; Copyright {dateState}
                </div>
                <div className="Fotter-CopyRight">
                    All right reserved. Developed/Designed By Lilo
                </div>
            </div>
        </>
    );
}


export default Footer;