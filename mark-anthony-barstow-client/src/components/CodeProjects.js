import React from "react";

import photo0 from '../assets/images/codeImages/photo0.png';
import photo1 from '../assets/images/codeImages/photo1.png';
import photo2 from '../assets/images/codeImages/photo2.png';


export default function RenderCodeProjects() {
    //this array consists of all projects displayed on page. 
    //the data in projectsArr is read by the functions below it and rendered to the page on Code.js.
    const projectsArr = [
        {
            id: 0,
            thumbnail: photo0,
            img_alt: 'Deployed Weather Application',
            title: 'City Weather Debrief',
            description: 'This application uses OpenWeatherAPI to display weather data on a retro-inspired User Interface.',
            link:'https://marchetype.github.io/City_Weather_Debrief/',
            gh_link:'https://github.com/marchetype/City_Weather_Debrief',
        },
        {
            id: 1,
            thumbnail: photo1,
            img_alt: 'id 1',
            title: 'The Box',
            description: 'This Application provides a charming experience using ShibeAPI. Visit this sight to gain inspiration for your day!',
            link:'https://marchetype.github.io/the-box-project/',
            gh_link: 'https://github.com/marchetype/the-box-project',
        },
        {
            id: 2,
            thumbnail: photo2,
            img_alt: 'id 1',
            title: 'Characterize This!',
            description: 'Tabletop character generator made using Node, Sequelize, Express, Handlebars.js, Tailwind CSS.',
            link:'https://characterize-this.herokuapp.com/',
            gh_link: 'https://github.com/samocain93/character-generator',
        },
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
                        <a href={project.link} target='_blank' rel='noreferrer' className='btn btn-primary'>App Link</a>
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
