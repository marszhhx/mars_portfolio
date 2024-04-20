import {works} from "../data/portfolio";
import uniqid from "uniqid";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dayjs from "dayjs";

const Works = () => {
    if (!works.length) return null

    return (
        <section
            className='section skills animate__animated animate__fadeIn animate__delay-2s'
            id='works'
        >
            <h2 className='section__title'>Work Experience</h2>
            <VerticalTimeline>
                {works.map((work) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                        date={`${dayjs(work.startDate).format('MMM YYYY')} - ${work.endDate ? dayjs(work.endDate).format('MMM YYYY') : 'Present'}`}
                        iconStyle={{ color: '#000'}}
                        icon={<img className="workIcon__img" src={work.companyImage} alt='Work Experience'/>}
                        key={uniqid()}
                    >
                        <h3 className="vertical-timeline-element-title">{work.position}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{work.companyName}</h4>
                    </VerticalTimelineElement>
            ))}
        </VerticalTimeline>

</section>
)
}

export default Works
