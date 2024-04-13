import {works} from "../data/portfolio";
import uniqid from "uniqid";

const Works = () => {
    if (!works.length) return null

    return (
        <section
            className='section skills animate__animated animate__fadeIn animate__delay-2s'
            id='works'
        >
            <h2 className='section__title'>Works</h2>
            <ul className='works__list'>
                {works.map((work) => (
                    <div key={uniqid()}>
                        <li className=''>
                            {work.companyName}
                        </li>
                        <li className=''>
                            {work.position}
                        </li>
                        <li className=''>
                            {work.description}
                        </li>
                    </div>
                ))}
        </ul>
</section>
)
}

export default Works
