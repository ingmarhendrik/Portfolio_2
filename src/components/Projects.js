import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/Projects.css';
import { EffectCards } from 'swiper/modules';
import cSharpImage from '../images/c_sharp.png';
import dockerImage from '../images/docker.png';
import dotNetImage from '../images/net-logo.png';
import reactImage from '../images/react.png';
import typescriptImage from '../images/typescript.png';
import htmlImage from '../images/html.png';
import cssImage from '../images/css.png';
import gitlabImage from '../images/gitlab.png';
import jiraImage from '../images/jira.png';
import figmaImage from '../images/figma.svg';

const Projects = () => {
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper-projects"
                breakpoints={{
                    640: { width: 600, height: 400 },
                    1024: { width: 900, height: 475 },
                }}>
                
                <SwiperSlide>
                    <h2>Sporting Events Management System</h2>
                    <div className='projects-container'>
                        <div className='project-description'>
                            <h3>DESCRIPTION</h3>
                            <p>A sporting events management system that streamlines interactions between athletes and coaches. The backend, built with an ASP.NET Core Web API and hosted in a Docker container, enables coaches to manage events for athletes. The frontend, developed with TypeScript and React, allows athletes to view their assigned events.</p>
                        </div>
                        <div className='project-technologies'>
                            <h3>TECHNOLOGIES</h3>
                            <div className='technology-images'>
                                <img src={htmlImage} alt="HTML" />
                                <img src={cssImage} alt="CSS" />
                                <img src={reactImage} alt="React" />
                                <img src={typescriptImage} alt="TypeScript" />
                                <img src={figmaImage} alt="Figma" />
                                <img src={gitlabImage} alt="GitLab" />
                            </div>
                        </div>
                    </div>
                    <div className="project-link">
                        <a href="https://imgur.com/a/8hT1A54" className="view-images-link">View Project Images</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Game Key Store</h2>
                    <div className='projects-container'>
                        <div className='project-description'>
                            <h3>DESCRIPTION</h3>
                            <p>A school group project still in development: A mobile-optimized game key reselling website.
                            The backend runs in a Docker container with an ASP.NET Core Web API for user authentication and key management, built with C# on .NET 8. The frontend, developed in TypeScript and React, provides a responsive mobile experience.</p>
                        </div>
                        <div className='project-technologies'>
                            <h3>TECHNOLOGIES</h3>
                            <div className='technology-images'>
                                <img src={htmlImage} alt="HTML" />
                                <img src={cssImage} alt="CSS" />
                                <img src={reactImage} alt="React" />
                                <img src={typescriptImage} alt="TypeScript" />
                                <img src={dotNetImage} alt=".NET" />
                                <img src={cSharpImage} alt="C#" />
                                <img src={figmaImage} alt="Figma" />
                                <img src={jiraImage} alt="Jira" />
                            </div>
                        </div>
                    </div>
                    <div className="project-link">
                        <a href="https://imgur.com/a/rv6zE0N" className="view-images-link">View Project Images</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Open-source School Management System</h2>
                    <div className='projects-container'>
                        <div className='project-description'>
                            <h3>DESCRIPTION</h3>
                            <p>An open-source school management system being developed for my final thesis with a classmate. The tech stack is still to be determined, utilizing agile methods and tools like Jira and Figma for project management and design. The frontend is built with TypeScript and React to enhance the educational experience for students and administrators.</p>
                        </div>
                        <div className='project-technologies'>
                            <h3>TECHNOLOGIES</h3>
                            <div className='technology-images'>
                                <img src={htmlImage} alt="HTML" />
                                <img src={cssImage} alt="CSS" />
                                <img src={reactImage} alt="React" />
                                <img src={typescriptImage} alt="Typescript" />
                                <img src={figmaImage} alt="Figma" />
                                <img src={jiraImage} alt="Jira" />
                            </div>
                        </div>
                    </div>
                    <div className="project-link">
                        <a href="#images" className="view-images-link"><i>Coming Soon...</i></a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Projects;
