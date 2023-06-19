import React from "react";

import photo0 from '../assets/images/codeImages/photo0.png';
import photo1 from '../assets/images/codeImages/photo1.png';
import photo2 from '../assets/images/codeImages/photo2.png';
import photo3 from '../assets/images/codeImages/photo3.png';
import photo4 from '../assets/images/codeImages/photo4.png';
import photo5 from '../assets/images/codeImages/photo5.png';



export default function RenderCodeProjects() {
    //this array consists of all projects displayed on page. 
    //the data in projectsArr is read by the functions below it and rendered to the page on Code.js.
    const projectsArr = [
        {
            id: 0,
            thumbnail: photo0,
            img_alt: 'Deployed Weather Application',
            title: 'City Weather Debrief',
            description: 'This application uses OpenWeatherAPI to display weather data on a retro-inspired user interface.',
            link:'https://marchetype.github.io/City_Weather_Debrief/',
            gh_link:'https://github.com/marchetype/City_Weather_Debrief',
        },
        {
            id: 1,
            thumbnail: photo1,
            img_alt: 'Deployed application: "The Box".',
            title: 'The Box',
            description: 'This Application provides a charming experience using ShibeAPI. Visit this sight to gain inspiration for your day!',
            link:'https://marchetype.github.io/the-box-project/',
            gh_link: 'https://github.com/marchetype/the-box-project',
        },
        {
            id: 2,
            thumbnail: photo2,
            img_alt: 'Deployed Application: "Characterize This!"',
            title: 'Characterize This!',
            description: 'Tabletop character generator made using Node, Sequelize, Express, Handlebars.js, Tailwind CSS.',
            link:'',
            gh_link: 'https://github.com/samocain93/character-generator',
        },
        {
            id: 3,
            thumbnail: photo3,
            img_alt: 'Deployed Application: "Bird Brain Social"',
            title: 'Bird Brain - Social Media',
            description: 'Social Media Application made using MERN stack; features custom Material UI styling.',
            link: '',
            gh_link: 'https://github.com/samocain93/bird-brain/tree/dev',
        },
        {
            id: 4,
            thumbnail: photo4,
            img_alt: 'Deployed Application: jQuery Day Planner',
            title: 'jQuery Day Planner',
            description: 'Using jQuery and day.js to create a productivity-focused web application. LocaStorage used to save note data.',
            link: 'https://marchetype.github.io/jQuery-day.js-DayPlanner/',
            gh_link: 'https://github.com/marchetype/jQuery-day.js-DayPlanner',
        },
        {
            id: 5,
            thumbnail: photo5,
            img_alt: 'Deployed Application: Password Generator',
            title: 'JavaScript Password Generator',
            description: 'This web application makes it easy to generate a custom random password through parameters chosen by the user.',
            link: 'https://marchetype.github.io/Password-Generator/',
            gh_link: 'https://github.com/marchetype/Password-Generator', 
        }
    ]
    
    
    //rendering projects to the page from projectsArr
    const codeProjects = projectsArr.map(project =>
        <section className='col-4'>
                <div className='card' key={project.id}>
                    <img className='card-img-top' src={project.thumbnail} alt={project.img_alt}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{project.title}</h5>
                        <p className='card-text'>{project.description}</p>
                    </div>
                    <div className='card-footer align-items-center'>
                        {project.link !== '' &&
                            <a href={project.link} target='_blank' rel='noreferrer' className='btn btn-primary'>App Link</a>}
                        <a href={project.gh_link} target='_blank' rel='noreferrer' className='btn btn-secondary'>GitHub</a>
                    </div>
                </div>
        </section>
    )
    return(
    <main className='col-12 col-md-9 container code-projects'>
        <div className='row'>
            {codeProjects}
        </div>
    </main>
    );
}
