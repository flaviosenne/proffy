import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'


import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

function Landing(){
    const [totalConnections, setTotatlConnections] = useState(0)

    useEffect(()=>{
        api.get('/connections').then(response => {
            const {total} = response.data

            setTotatlConnections(total)
        })
    }, [])
    return (
        <div id = 'page-landing'>
            <div id = 'page-landing-content' className = 'container'>
                <div className = 'logo-container'>
                    <img src = {logoImg} alt = 'logo'></img>
                    <h2>Sua plataforma de estudos on-line</h2>
                </div>

                <div>
                    <img
                        src = {landingImg} 
                        alt = 'plataforma de estudos' 
                        className = 'hero-image'
                    />
                </div>

                <div className = 'buttons-container'>
                    <Link to = '/study' className = 'study'>
                        <img src = {studyIcon} alt = 'estudar' />
                        Estudar
                    </Link>
                    <Link to = '/give-classes' className = 'give-classes'>
                        <img src = {giveClassesIcon} alt = 'estudar' />
                        Dar aulas
                    </Link>
                </div>

                <span className = 'total-connections'>
                    total de {totalConnections} conexões já realizadas <img src = {purpleHeartIcon} alt = 'coração roxo'/>
                </span>
            </div>
        </div>
    ) 
}

export default Landing