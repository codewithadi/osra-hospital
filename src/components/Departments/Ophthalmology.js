import React from 'react'
import './departments.css';

function Ophthalmology() {
    return (
        <div className='departments'>
            <div className='depMainBack'>
                <img className='depMainImg' src="/assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Ophthalmology</h1>
                </div>
            </div>

            <div className='depDetail'>
                <div className='depDetailContainer'>
                    <div className='depTextHead'>
                        <h1 className='depDetailTitle'>Ophthalmology Department</h1>
                        <div className='depDetailAbout'>Ophthalmology is a branch of medicine dealing with the diagnosis, treatment and prevention of diseases of the eye and visual system. The eye, its surrounding structures and the visual system can be affected by a number of clinical conditions.</div>
                        <p className='depDetailPara'>A general practice doctor may refer someone to an ophthalmologist if they show symptoms of cataracts, eye infections, optic nerve problems, or other eye conditions.</p>
                    </div>
                    <div className='depImgWrapper'>
                        <img className="depDetailImg" src="/assets/images/ophthalmology.jpg" alt="ophthalmology" />
                    </div>                    
                </div>
            </div>

            <div className='treatmentDetails'>
                <div className='depMain'>
                    <h1 className='depMainHead'>Treatments Offered</h1>
                    <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                    <div className='depLine'></div>
                </div>

                <div className='treatmentWrapper'>
                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Ophthalmoscope</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Retino-scope</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Refraction</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Orthopedic Trauma</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Close & Open reduction procedures</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Plaster cast (POP)</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Open reduction & internal fixation </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Tendon repair </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Reduction of Joint dislocation </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Orthopedic joint reconstruction Surgery </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Arthroplasty </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Sports Injury </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='depDoctors'>
                <div className='depMain'>
                    <h1 className='depMainHead'>Department Doctors</h1>
                    <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                    <div className='depLine'></div>
                </div>
                <div className='depDoctorWrapper'>
                    <div className='depDoctorCard'>
                        <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor1.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>David Paulson</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>


                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor2.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Merri Hoffman</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor1.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Kathy Cruse</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor2.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Floyd Birdsong</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    
                </div>
            </div>

            <div className='depBanner'>
                <img class="depBannerImg" src="/assets/department/depLastBack.jpg" alt="anyimg"/>
                <div className='depBannerOverlay'>
                    <h3 className='depBannerText'>Reliable & Trusted</h3>
                    <h1 className='depBannerHead'>Get the Best Ortho Treatment</h1>
                    <p className='depBannerPara'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='depBannerButton'><a className='depBannerBtn' href="/contact">Contact Us Now</a></div>
                </div>
            </div>
        </div>
    )
}

export default Ophthalmology
