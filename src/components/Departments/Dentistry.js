import React from 'react'
import './departments.css';

function Dentistry() {
    return (
        <div className='departments'>
            <div className='depMainBack'>
                <img className='depMainImg' src="/assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Dentistry</h1>
                </div>
            </div>

            <div className='depDetail'>
                <div className='depDetailContainer'>
                    <div className='depTextHead'>
                        <h1 className='depDetailTitle'>Dentistry Department</h1>
                        <div className='depDetailAbout'>Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth.</div>
                        <p className='depDetailPara'>Dentistry is one of the best open access journals that aims to publish the most complete and reliable source of information on discoveries and current developments in the mode of original articles, review articles, case reports, short communications, etc. in this field and provide online access without any restrictions or subscriptions to researchers worldwide.</p>
                    </div>
                    <div className='depImgWrapper'>
                        <img className="depDetailImg" src="/assets/images/dentistry.jpg" alt="Dentistry" />
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
                            <h2 className='treatmentTitle'>Laboratory investigations include blood  hematology</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Periapical x-ray, panoramic , CT scan.</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Excision biopsy </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Oral hygiene instruction.</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Root Canals treatment</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Cosmetic fillings</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Tooth extraction</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Removable prosthodontics.</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Fixed prosthodontice</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Gum treatment</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Orthodontics</h2>
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

export default Dentistry
