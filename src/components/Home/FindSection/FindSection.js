import React from 'react'
import './findsection.css';

function FindSection() {
    const findApi = [
        {
            mainHead:"Find a doctor",
            headTwo:"200+ doctors on panel",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"See Doctors",
            boxClass:"findBox"
        },
        {
            mainHead:"Find Ailment",
            headTwo:"Symptoms & Treatment",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"See Ailment",
            boxClass:"findBox findBox2"
        },
        {
            mainHead:"Talk to Expert",
            headTwo:"Get assistance on call",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"Get Help",
            boxClass:"findBox"
        }
    ];
    return (
        <div className='find-section'>
            <div className='findContainer'>
                {
                    findApi.map((val,index)=>{
                        return (
                            <div className={val.boxClass}>
                                <h1 className='findMainHead'>{val.mainHead}</h1>
                                <h3 className='findHeadTwo'>{val.headTwo}</h3>
                                <p className='findPara'>{val.detailPara}</p>
                                <div className='findButton'>
                                    <span className='findBtnText'>{val.buttonText}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FindSection
