import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import * as studyz from "./StudyList.json"
import { StudyComponent, Single, SingleContainer, BigImg, SmallImg } from "./Study.styles";
interface scoreBy {
    Overall: number,
    Erythema: number,
    Induration: number,
    Desquamation: number,
    by: string
}
interface theImage {
    link: string,
    date: string
}
interface study {
    name: string
    altName: string
    startDate: string
    endDate: string
    organization: string,
    created_by: string,
    image: theImage[],
    user: string[],
    score: scoreBy[][],
}
function Study() {
    const [study, studyEdit] = useState(studyz.study)
    const [studyNameNew, addStudyName] = useState("")
    const [studyAltNameNew, addStudyAltName] = useState("")
    const [studyStartDateNew, addStudyStartDate] = useState("")
    const [studyEndDateNew, addStudyEndDate] = useState("")
    const [studyOrganizationNew, addStudyOrganization] = useState("")
    const [studyCreatedByNew, addStudyCreatedBy] = useState("")
    const [studyImageNew, addStudyImage] = useState("")
    const [studyScoreNew, addStudyScore] = useState("")
    const [currentBigImg1, editCurrentbigImage1] = useState(studyz.study[0].image[0].link)
    const [currentSuperTraverseNumber, editcurrentSuperTraverseNumber] = useState(0)
    const [currentSmallTraverseNumber, editcurrentSmallTraverseNumber] = useState(0)
    const [currentScore1, editCurrentScore1] = useState(studyz.study[0].score[0])
    const [orgClinicianNew, addOrgClinician] = useState([])
    const [tempClinician, addTempClinician] = useState("")
    const [tempStudy, addTempStudy] = useState("")
    const [studyClinicianNew, addStudyClinician] = useState([])
    const setName = (e: any) => {
        addStudyName(e.target.value)
    }
    const setAltName = (e: any) => {
        addStudyAltName(e.target.value)
    }
    const setStudyStartDate = (e: any) => {
        addStudyStartDate(e.target.value)
    }
    const setStudyendDate = (e: any) => {
        addStudyEndDate(e.target.value)
    }
    const setStudyOrganization = (e: any) => {
        addStudyOrganization(e.target.value)
    }
    const setStudyCreatedBy = (e: any) => {
        addStudyCreatedBy(e.target.value)
    }
    const setStudyImage = (e: any) => {
        addStudyImage(e.target.value)
    }
    const setClinician = (e: any) => {
        addOrgClinician(e.target.value)
    }
    const setTempClinician = (e: any) => {
        addTempClinician(e.target.value)
    }
    const AddClincian = (studySingle: study) => {
        let newClinician: Array<string> = studySingle.user;
        console.log(newClinician)
        let newStudy = study
        if (newClinician.indexOf(tempClinician) === -1) {
            newClinician.push(tempClinician);
        }
        addTempClinician("")
        studySingle.user = newClinician
        newStudy[newStudy.indexOf(studySingle)] = studySingle;
        studyEdit(newStudy)
    }
    const setBigImage1 = (superkeys: number, keys: number) => {
        console.log()
        // editCurrentbigImage1(showBigImage(superkeys, keys))
        editcurrentSuperTraverseNumber(superkeys)
        editcurrentSmallTraverseNumber(keys)
        editCurrentScore1(studyz.study[0].score[keys])
    }
    const showBigImage = (superkeys: number, smallkeys: number) => {
        let smk = smallkeys;
        if (typeof smk === null || typeof smk === undefined || smk < 0) {
            smk = 0;
        }
        let currentImg = studyz.study[superkeys].image[smk].link;
        return currentImg
    }
    const AddToStudy = () => {
        let newStudy = study
        let imgtest = [{ link: "", date: "" }]
        let newStudySingle = { name: "", altName: "", startDate: "", endDate: "", organization: "", created_by: "", image: imgtest, user:[], score: [] };
        console.log(studyNameNew)
        if (studyNameNew != null && studyNameNew != "") {
            newStudySingle.name = studyNameNew;
        }
        if (studyAltNameNew != null && studyAltNameNew != "") {
            newStudySingle.altName = studyAltNameNew;
        }
        if (studyStartDateNew != null && studyStartDateNew != "") {
            newStudySingle.startDate = studyStartDateNew;
        }
        if (studyEndDateNew != null && studyEndDateNew != "") {
            newStudySingle.endDate = studyEndDateNew;
        }
        if (studyOrganizationNew != null && studyOrganizationNew != "") {
            newStudySingle.organization = studyOrganizationNew;
        }
        if (studyCreatedByNew != null && studyCreatedByNew != "") {
            newStudySingle.created_by = studyCreatedByNew;
        }
        if (newStudySingle.name !== "") {
            let image = [{ link: "https://media.istockphoto.com/photos/acne-picture-id174763312?k=20&m=174763312&s=612x612&w=0&h=faW3HkUuHxQYKtCG9E8V55hIF9JYuKEEk2NRKEK3o5k=", date: "10/10/2020" }]
            newStudySingle.image = image
            newStudySingle.created_by = "me"
            newStudy.push(newStudySingle)
        }
        studyEdit(newStudy);
        addStudyName("");
        addStudyAltName("");
        addStudyStartDate("");
        addStudyEndDate("");
        addStudyOrganization("");
        addStudyCreatedBy("");
        addStudyImage("");
        editcurrentSuperTraverseNumber(newStudy.length - 1)
        editcurrentSmallTraverseNumber(0)
    }

    return (
        <StudyComponent>
            <h1>Add Study in</h1>
            <div className="form-flex">
                <div>
                    <label>Study name: </label>
                    <input onChange={setName} value={studyNameNew} />
                </div>
                <div>
                    <label>Study altName: </label>
                    <input onChange={setAltName} value={studyAltNameNew} />
                </div>
                <div>
                    <label>Study start date: </label>
                    <input onChange={setStudyStartDate} value={studyStartDateNew} />
                </div>
                <div>
                    <label>Study end date: </label>
                    <input onChange={setStudyendDate} value={studyEndDateNew} />
                </div>
                <div>
                    <label>Study organization: </label>
                    <input onChange={setStudyOrganization} value={studyOrganizationNew} />
                </div>
                <div>
                    <label>Study image: </label>
                    <input type="file" />
                </div>
                <button onClick={() => AddToStudy()}>Add</button>
            </div>
            <h1>Study list</h1>
            <SingleContainer>
                {study.map((studySingle, superkeys) => (
                    <Single>
                        <div className="header">
                            {currentSmallTraverseNumber > studySingle.image.length ?
                                    <BigImg src={studySingle.image[0].link} />
                                    :
                                <BigImg src={studyz.study[currentSuperTraverseNumber].image[currentSmallTraverseNumber].link} />
                                
                                }
                                <div className="small-gallery">
                                        {studySingle.image.map((singleAltImageLink, keys) => (
                                            <SmallImg src={singleAltImageLink.link} onClick={() => setBigImage1(superkeys, keys)} />
                                        ))}
                                    </div>
                        </div>
                        <div className="info">
                            <div>
                                <h1>{studySingle.name}</h1>
                                <h3>{studySingle.altName}</h3>
                                <p>Start: {studySingle.startDate}</p>
                                <p>End: {studySingle.endDate}</p>
                                <p>Org: {studySingle.organization}</p>
                                <p>Created by: {studySingle.created_by}</p>
                                <ul>Participant: 
                                    {studySingle.user.map((userSingle)=>(<li>{userSingle}</li>))}
                                </ul>
                            </div>
                            <div className="grade-flex">
                                <div>
                                    <h3>Overall:</h3>
                                    <p>Desquamation:</p>
                                    <p>Erythema:</p>
                                    <p>Induration:</p>
                                    <p>Evaluated by:</p>
                                    <p>Message:</p>
                                </div>
                                {currentScore1.map((singleScore) => (
                                    <div>
                                        <h3>{singleScore.Overall}</h3>
                                        <p>{singleScore.Desquamation}</p>
                                        <p>{singleScore.Erythema}</p>
                                        <p>{singleScore.Induration}</p>
                                        <p> {singleScore.by}</p>
                                        <button>Remind</button>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom">
                            <input onChange={setTempClinician} placeholder="add clinician:" />
                            <button className="add" onClick={() => AddClincian(studySingle)}>Add Clinican</button>
                        </div>
                        </div>
                    </Single>
                ))}
            </SingleContainer>

        </StudyComponent>
    );
}

export default Study;