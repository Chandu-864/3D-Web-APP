import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'


const InfoBox = ({text, link, btnText}) => {
    return (
        <div className="info-box">
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to = {link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} alt="" />
            </Link>
        </div>
    )
}

const Popup = ({currentStage}) => {
    return (
      PopupContent[currentStage]
    )
}

const PopupContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am<span className='font-semibold mx-2 text-white'>
                        Chandu Thalati
                    </span>
                    <br />
            a web developer from India 🇮🇳
            <br />
            <span className='font-semibold mx-2 text-white'>
                residing in U.S.A 🇺🇸
            </span>
        </h1>
        ),
    2: (
        <InfoBox 
            text = "Kakashi Hatake animation from Naruto Anime ( Just for fun and learning )" 
            link = '/fun'
            btnText= 'Fun Animation' 
        />
        ),
    3: (
        <InfoBox 
            text = "Interested in collabarating or hiring me" 
            link = '/contact' 
            btnText= 'Lets connect!' 
        />
    ),
    4: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Worked on several projects learning
            < br />
            from Youtube and Materials.
            < br />
            Click on the above Portfolio link
            < br />
            to view my projects.
        </h1>
        ),
}


export default Popup