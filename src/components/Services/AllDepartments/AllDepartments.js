import React from 'react'
import {Link} from "react-router-dom"
import './department.css'

function AllDepartment() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    return (
        <div className='department py-6'>
            <div className='depMain'>
                <h1 className='depMainHead'>Hospital Departments</h1>
                <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                <div className='depLine'></div>
            </div>
            <div className='depContainer'>
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/surgery.png" alt="dept"/></div>
                    <h1 className='depHead'>General Surgery</h1>
                    {/* <h3 className='depAbout'>Operations & surgeries</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/general-sergery" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/neurology.png" alt="dept"/></div>
                    <h1 className='depHead'>Ear, Nose & Throat</h1>
                    {/* <h3 className='depAbout'>Neuro Disorders</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/ear-nose-throat" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept"/></div>
                    <h1 className='depHead'>Ophthalmology</h1>
                    {/* <h3 className='depAbout'>Skin Problems</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/ophthalmology" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/surgery.png" alt="dept" /></div>
                    <h1 className='depHead'>Urology</h1>
                    {/* <h3 className='depAbout'>Medicine & Pharmacy</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/urology" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/neurology.png" alt="dept" /></div>
                    <h1 className='depHead'>Neuro</h1>
                    {/* <h3 className='depAbout'>Research & Lab</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/neuro" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Pshyciatric</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/pshyciatric" className='depLink'>Get Details..</Link>
                </div>

                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Bariatic Surgery</h1>
                    <h3 className='depAbout'>Bones & Joints</h3>
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/bariatic-surgery" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Pediatrics</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/pediatrics" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>OB/Gyne</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/ob-gyne" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Physiotherapist </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/physiotherapist" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Dentistry </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/dentistry" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Radiologic </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/radiologic" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Dermatology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/dermatology" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Gastroenterology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/gastroenterology" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>ER  </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/er" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Dietitian  </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/dietitian" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Cardiologist and internal medicine  </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/cardiologist-and-internal-medicine" className='depLink'>Get Details..</Link>
                </div>
                
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Orthopedics </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/orthopedics" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Laboratory </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/laboratory" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Serology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/serology" className='depLink'>Get Details..</Link>
                </div>
                
                <div className='depCard'>
                    <div className='depIcon'><img className="depIconImg" src="assets/department/magnifying-glass.png" alt="dept" /></div>
                    <h1 className='depHead'>Special Tests  </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className='depDetailHome'>Behind the word mountains, far from the countries Vokalia.</p>
                    <Link onClick={scrollToTop} to="/departments/special-tests" className='depLink'>Get Details..</Link>
                </div>


                
            </div>
        </div>
    )
}

export default AllDepartment
