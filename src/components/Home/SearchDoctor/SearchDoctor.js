import React from 'react'
import './searchdoctor.css'

function SearchDoctor() {
    return (
        <div className='search-doctor'>
            <div className='searchDoctorWrapper'>
                <img class="searchDoctorBack" src="/assets/department/depLastBack.jpg" alt="hmsearch" />
                <div className='searchDoctorOverlay'>
                    <div className='searchDoctorCol'>
                        <h1 className='searchDoctorHead'>Find a Doctor</h1>
                        <div className='searchDoctorAbout'>Culpa qui officia deserunt mollit anim idest</div>
                        <p className='searchDoctorPara'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='searchDoctorButton'>
                            <input className='searchDoctorInput' type="text" placeholder='Find A Doctor' />
                            <a className='searchDoctorBtn' href="/contact">Find Doctor</a>
                        </div>
                    </div>
                    <div className='searchDoctorCol'>
                        <img className='seachDoctorImg' src="assets/images/findDoctor.png" alt="hmsearch"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDoctor
