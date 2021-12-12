import React from 'react'
import './bookappointment.css';

function BookAppointment() {
    return (
        <div className='book-appointment'>
            <div className='depMainBack'>
                <img className='depMainImg' src="assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Book Appointment</h1>
                </div>
            </div>
            <div className='bookWrapper'>
                <div className='appointmentText'>
                    <h1 className='appointmentHead'>Online Appointment Form</h1>
                    <p className='appointmentPara'>Now you can request an appoinment in some simple steps Online</p>
                </div>
                <form className='appointmentForm'>                    
                    <input  className='bookFormItem' type="text" name="name" placeholder="Your Full Name" />
                    <input  className='bookFormItem' type="number" name="age" placeholder="Your Age" min={1} max={100}/>
                    <input  className='bookFormItem' type="date" name="dob" placeholder="Your DOB" />
                    <input  className='bookFormItem' type="text" name="phone" placeholder="Your Phone Number" />
                    <div className='serviceText'>Services Needed : </div>
                    <div className='servicesNeeded'>
                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Radiology</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Physiotherapy</label><br />
                        </div>
                        
                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Home Care</label><br />

                            <input type="checkbox" className='bookFormCheck' />
                            <label>Operations</label><br />
                        </div>

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Delivery</label><br />

                            <input type="checkbox" className='bookFormCheck' />
                            <label>ER</label><br />
                        </div> 

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Pediatric</label><br />

                            <input type="checkbox" className='bookFormCheck' />
                            <label>OB-Gyna</label><br />
                        </div>

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Ophthalmology</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Dermatology</label><br />
                        </div>
                        
                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Internal Medicine</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Dentistry</label><br />
                        </div> 

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Dietition</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>ENT</label><br />
                        </div> 

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Orthopedics</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Surgery</label><br />
                        </div> 

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Urology</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Cardiology</label><br />
                        </div>

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Neuro</label><br />
                            
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Phschiatric</label><br />
                        </div>  

                        <div className='bookFormRow'>
                            <input type="checkbox" className='bookFormCheck' />
                            <label>Bariatric Surgery</label><br />
                        </div>  
                    </div>
                    <textarea className='bookFormItem' name="message" rows={5} resize="none" placeholder="Your Message"></textarea>
                    <div className='bookFormBtn'>
                        <input type="submit" className='bookFormButton' value="Book Appointment" /> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookAppointment
