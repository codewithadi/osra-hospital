import React from 'react'
import './findsection.css';

function FindSection() {
    const findApi = [
        {
            mainHead:"Find a doctor",
            headTwo:"200+ doctors on panel",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"See Doctors",
            linkTo:"/departments",
            boxClass:"findBox"
        },
        {
            mainHead:"Find Ailment",
            headTwo:"Symptoms & Treatment",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"See Ailment",
            linkTo:"/departments",
            boxClass:"findBox findBox2"
        },
        {
            mainHead:"Talk to Expert",
            headTwo:"Get assistance on call",
            detailPara:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
            buttonText:"Get Help",
            linkTo:"/contact",
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
                                    <a href={val.linkTo} className='findBtnText'>{val.buttonText}</a>
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
