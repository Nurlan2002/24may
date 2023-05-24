import style from './home.module.css'
import React, { useEffect, useState } from 'react'
import { getAllCountry } from '../api/request'

const HeroSection = () => {
    // const [countries, setCountries] = useState([])
    // useEffect(() => {
    //     getAllCountry().then((res) => {
    //         setCountries(res);
    //         console.log();
    //     })
    // }, [])
    return (

        <>

            <div className={style.image}>
                <div className={style.yazi}><h3>Prosess viza without within hours</h3>
                    <h1 style={{ fontSize: '50px' }}>immigration & <br />  visa Consultation</h1>
                    <button style={{ width: '150px', height: '40px', backgroundColor: 'white', color: 'black' }}>Book consultansy</button></div>
                <div> <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="#" /></div>

            </div>
        </>
    )
}

export default HeroSection

