import React from 'react'
import { contact, section5Title, social } from '../../profile'
import "../../styles/images.css"
export default function Navbar() {
    const scrollTo = () => {
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
        })
    }
    const scrollToPro = () => {
            window.scrollTo({
                top: 1600,
                left: 0,
                behavior: "smooth"
            })
    }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link h3" href="#">  Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link h3" href="#about"> About</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link h3"  href="#project">  Projects</a>
      </li>
      
    </ul>
    <li class="nav-item alone">
      {social.resume && <a title="Download Resume" className='nav-res' href={social.resume} download target="_blank"> Resume <i className="fas fa-download res"></i></a>}
      </li>
  </div>
</nav>
  )
}
