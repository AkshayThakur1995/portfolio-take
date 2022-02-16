import React from 'react'
import Project from '../layouts/Project'
import Skills from '../layouts/Skills'
import { projects, section3Title, section4Title,skillsBar } from '../../profile'

const Works = () => {
    return (
        <>
        <a name="project"></a>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third" >
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} git={x.git} demo={x.demo} des={x.des} />
                )}
               {/* {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                )} */}
                </div>
            </div>

           
                <>
                    {/* <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div> */}
                </>
                {/* <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div> */}
            
        </>
    )
}

export default Works
