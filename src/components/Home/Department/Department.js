import React from 'react'
import './department.css'

function Department() {
    return (
        <div className='department py-6'>
            <div className='depMain'>
                <h1 className='depMainHead'>Hospital Departments</h1>
                <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                <div className='depLine'></div>
            </div>
            <div className='depContainer'>
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/surgery.png" /></div>
                    <h1 className='depHead'>Surgery</h1>
                    <h3 className='depAbout'>Operations & surgeries</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/neurology.png" /></div>
                    <h1 className='depHead'>Neurology</h1>
                    <h3 className='depAbout'>Neuro Disorders</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" /></div>
                    <h1 className='depHead'>Dermatology</h1>
                    <h3 className='depAbout'>Skin Problems</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/surgery.png" /></div>
                    <h1 className='depHead'>Dispensary</h1>
                    <h3 className='depAbout'>Medicine & Pharmacy</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/neurology.png" /></div>
                    <h1 className='depHead'>Haematology</h1>
                    <h3 className='depAbout'>Research & Lab</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" /></div>
                    <h1 className='depHead'>Orthopaedics</h1>
                    <h3 className='depAbout'>Bones & Joints</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <a href="/departments" className='depLink'>Get Details..</a>
                </div>
            </div>
        </div>
    )
}

export default Department
