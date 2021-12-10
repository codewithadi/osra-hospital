import React from 'react'
import './departments.css';

function BariaticSurgery() {
    return (
        <div className='departments'>
            <div className='depMainBack'>
                <img className='depMainImg' src="/assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Bariatric Surgery</h1>
                </div>
            </div>

            <div className='depDetail'>
                <div className='depDetailContainer'>
                    <div className='depTextHead'>
                        <h1 className='depDetailTitle'>Bariatric Surgery Department</h1>
                        <div className='depDetailAbout'>Exercise and diet alone often fails to effectively treat people with extreme and excessive obesity. Bariatric surgery is an operation that is performed in order to help such individuals lose weight. Evidence suggests that bariatric surgery may lower death rates for patients with severe obesity, especially when coupled with healthy eating and lifestyle changes after surgery.</div>
                        <p className='depDetailPara'>These surgeries generally pose major risks and side effects and the patient has to make changes to their diet permanently and also schedule a fixed exercise regime so that they can ensure the lasting success of bariatric surgeries.</p>
                    </div>
                    <div className='depImgWrapper'>
                        <img className="depDetailImg" src="/assets/images/bariatric.jpg" alt="bariatric" />
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
                            <h2 className='treatmentTitle'>Gastric Bypass</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Gastric Banding</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Gastrostomy Sleeve </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Tumor operations</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>All types of obesity operations (re-obesity and morbid obesity)</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Laparoscopic sleeve gastrectomy</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>SADI operation</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>SASI process</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Oncology surgery</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>General surgeries</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Mini gastric bypass</h2>
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

export default BariaticSurgery
