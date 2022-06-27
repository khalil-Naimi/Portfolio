import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ProfileImage from "../Components/ProfileImage";
const TimeLine = (props)=>{
    
    return(
        <>
            <div className="AboutMe-info">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#3D0152', color: '#fff', fontSize:'35px' }}
                        contentArrowStyle={{ borderRight: '7px solid  #3D0152' }}
                        dateClassName="TimeLine-date"
                        iconStyle={{ background: '#3D0152', color: '#fff' ,height: '350px' ,width: '350px',left: '60%' ,top:'-10px' }}
                        icon={<ProfileImage />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">Software engineer Student</h4>
                        <p>
                            I am an optimistic and passionate young programmer / student who seeks knowledge and
                            experience in my field and I am always looking for new technologies of
                            programming and new skills that can make me better
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
           

            <h2 className="AboutMe-MiniTitle">Educational Qualifications</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3D0152', color: '#fff', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3D0152' }}
                    date="2020 - present"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#3D0152', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Software engineer Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">SupMti, oujda</h4>
                    <p>
                        I am studying as a software engineer in Group SupMTI school
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3D0152', color: '#fff', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3D0152' }}
                    date="2019 - 2020"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#3D0152', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Software development Specialized technician</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mixed center of professional training, oujda</h4>
                    <p>
                        I was studying as a Software development technician for two years in the Mixed center of professional training, oujda
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3D0152', color: '#fff', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3D0152' }}
                    date="2016 - 2017"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#3D0152', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Scientific baccalaureate: life and earth science option</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lycée ABID El JABIRI, OUJDA</h4>
                    <p>
                        I acquired my baccalaureate diploma in life and earth science option
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

            <h2 className="AboutMe-MiniTitle">Career summary</h2>
            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dd8c04', color: '#000', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dd8c04' }}
                    date="February 2020 - March 2021"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#dd8c04', color: '#000' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">End of module project/front-end</h3>
                    <h4 className="vertical-timeline-element-subtitle">SupMti, oujda</h4>
                    <p>
                        Creation of an ECM (front-end) with ReactJS to manage files for a delivery company
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dd8c04', color: '#000', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dd8c04' }}
                    date="February 2020 - May 2020"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#dd8c04', color: '#000' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Application internship at SQLI</h3>
                    <h4 className="vertical-timeline-element-subtitle">SQLI, Oujda</h4>
                    <p>
                        Creation of a website for the management of the movements of employees of a company with ASPNET MVC architecture
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dd8c04', color: '#000', fontSize:'18px' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dd8c04' }}
                    date="October 2019 - November 2019"
                    dateClassName="TimeLine-date"
                    iconStyle={{ background: '#dd8c04', color: '#000' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                    <h4 className="vertical-timeline-element-subtitle">oujda</h4>
                    <p>
                        Creation of an inventory management application for an aluminum parts store with ADO.NET/SQL Server
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    );
}


export default TimeLine;