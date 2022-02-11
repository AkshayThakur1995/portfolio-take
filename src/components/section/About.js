import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2" name="about">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2">
               <img className='profilephoto' src="https://lh3.googleusercontent.com/p031quCSnbAn95n121Ima30eFwRwaRqgaWYWyoM_UpScXYnnHM9dIWsjdO_CHnBMeth-SC_CJgCRALjTH501WG2YODFfGtSXuP62cPAE6fVgSiS4QTxwTP0r9RRhwT8ncVQyyipBPWUMK040jsN1nEAPCdbXJvNqhtl6-hIxC9OLDfa8yubsijYHHioGA6OcqG4flsawUGZQKIBnZ_Nx2x6D7xHmGEcdEohm3LCQlr9EBr3hcfCu3hp56OOtb5r_46g61ubYSsz1AkSLRZ2nKT2Xy2s__-PV_R0t3h4uNpiNRK28Xk_vVPxZgm7gJTrmmvynQXsO5xpd7QhRw2JcTD7tOV89peanK9SDVLnAVadQKiuwwEzT5Zc30oNKGSx6ADxY5li2MJckoR5xbmaEE_8UAwgGLUM6hoRV9SmjGxhS_1MtexJvWU1zuqx796-BJxYmAsoc0vUaVlrWKDnr7mSOuQGzw_jzlLUvrhSxvdG9mKUjQl3QxfmnnkaD_peAiHWP9eV14JG6COgg6N0Abvd-SR9cTcDrO7hj5s0vz3T-rtmSK4cBlHjjM7RwLKE8XO6twIMYSZI8x2BBDnCN_7ruaGBY5Gnx_Y8is1nVvFFwBIJsm7_y40OdV9faYQ_yudQ8IxzhjoqvUNGDj6PBwnlhF-32VrYRYuz8P-AR7qFHAgUIz1y5ovqqydQzvezRPN5GbPSa8auhw8p1AxhJkw=w1277-h912-no?authuser=0"></img>
            </div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            </div>
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
        </div>
    )
}

export default About
