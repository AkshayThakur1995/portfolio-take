import React from 'react'


const Project = ({id, name, url, skills, git, demo, des}) => {
    console.log(des)
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}>
                </div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> && <button type="button"  class="btn btn-dark"><a className="text-white"  className="text-decoration-none" target="_blank" href={git}>Github</a> </button> 
            }
            <button type="button" class="btn btn-success m-3"><a className="text-white"  className="text-decoration-none" target="_blank" href={demo}>Demo</a></button>
            <p>{des}</p>
            
        </div>
    )
}

export default Project
