import React from 'react'


const Project = ({id, name, url, skills, git, demo, des}) => {
    console.log(des)
    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}>
                </div>
            </div>
          <div className='title-div'>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            {/* { skills && <h3>{skills.map(skill => skill)}</h3>  */}
            
    </div>
            <div className='btn-div'>
            <button type="button"  className="git-button"><a className="text-decoration-none git-link" target="_blank" href={git}>Github</a> </button>
            <button type="button" class="demo-button"><a   className="text-decoration-none demo-link" target="_blank" href={demo}>Demo</a></button>
            </div>
            <p className='descrp'>{des}</p>
            <li className='icon-list'>
            <i className='fab fa-html5 icon-pro'></i>
            <i className='fab fa-js icon-pro'></i>
            <i className='fab fa-css3 icon-pro'></i>
            <i className='fab fab fa-node icon-pro'></i>
            </li>
            
        </div>
   
      
    )
}

export default Project
