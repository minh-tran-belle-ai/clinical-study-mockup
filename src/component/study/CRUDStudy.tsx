import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import { StudyComponent, Single, SingleContainer, BigImg, SmallImg } from "./Study.styles";
import { useSelector, useDispatch } from 'react-redux';
import { AllState } from "../../redux/type.d"
import { ADD_STUDY, SWITCH_BIG_IMAGE_STUDY, SWITCH_SCORE_STUDY } from '../../redux/actionTypes';

function Study() {
    const studyRedux = useSelector((initialState: AllState) => initialState.studys)
    const dispatch = useDispatch();
    const [studyNameNew, addStudyName] = useState("")
    const [studyAltNameNew, addStudyAltName] = useState("")
    const [studyStartDateNew, addStudyStartDate] = useState("")
    const [studyEndDateNew, addStudyEndDate] = useState("")
    const [studyOrganizationNew, addStudyOrganization] = useState("")
    const [studyCreatedByNew, addStudyCreatedBy] = useState("")
    const [studyImageNew, addStudyImage] = useState("")
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
    const setClinician = (e: any) => {
        addOrgClinician(e.target.value)
    }
    const setTempClinician = (e: any) => {
        addTempClinician(e.target.value)
    }
    // const AddClincian = (studySingle: study) => {
    //     let newClinician: Array<string> = studySingle.user;
    //     console.log(newClinician)
    //     let newStudy = study
    //     if (newClinician.indexOf(tempClinician) === -1) {
    //         newClinician.push(tempClinician);
    //     }
    //     addTempClinician("")
    //     studySingle.user = newClinician
    //     newStudy[newStudy.indexOf(studySingle)] = studySingle;
    //     studyEdit(newStudy)
    // }
    const AddToStudy = () => {
        // let newStudy = study
        let imgtest: any[] = [{ "": { link: "", date: "" } }]
        let newStudySingle = {
            name: "", altName: "", startDate: "", endDate: "", organization: "", created_by: "", image: imgtest, user: ["John", "Jane", "Jack"], scoreType: ["Overall", "Erythema", "Induration", "Desquamation"], score: [[
                [0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [2, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0],
                [1, 2, 0, 0, 0],
                [2, 2, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0],
                [1, 3, 0, 0, 0],
                [2, 3, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0],
                [1, 4, 0, 0, 0],
                [2, 4, 0, 0, 0]
            ]]
        };
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
            let image = [{
                "Safety": [{ link: "https://media.istockphoto.com/photos/acne-picture-id174763312?k=20&m=174763312&s=612x612&w=0&h=faW3HkUuHxQYKtCG9E8V55hIF9JYuKEEk2NRKEK3o5k=", date: "10/10/2020" },
                { link: "https://i.pinimg.com/originals/5a/71/f3/5a71f36f443c814b534d22fab1c2d998.jpg", date: "10/10/2020" }]
            },
            { "Efficiency": [{ link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RWPbRkX2hhVLDehpB-1C1ed3phPya4nSWZvU7gb9Xyoa3tIkKXfiZHYfJ2JpGtGhtCI&usqp=CAU", date: "10/10/2020" }] },
            { "Price": [{ link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfazKc31WbZRBd0-hIpiVoDnCsmL4eEjdaF9w-CFAMpTAlgeigjjoXFGnaz00PiqDNB1k&usqp=CAU", date: "10/10/2020" }] },

            ]
            newStudySingle.image = image
            newStudySingle.created_by = "me"
            //newStudy.push(newStudySingle)
        }
        dispatch({ type: ADD_STUDY, study: newStudySingle })
        // studyEdit(newStudy);
        addStudyName("");
        addStudyAltName("");
        addStudyStartDate("");
        addStudyEndDate("");
        addStudyOrganization("");
        addStudyCreatedBy("");
        addStudyImage("");
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
                {studyRedux.map((studySingle, superkeys) => (
                    <Single>
                        <div className="header">
                            <BigImg src={Object.values(studySingle.image[0])[0][0].link} />

                            <div className="small-gallery">
                                {studySingle.image.map((singleAltImageLink, keys) => (
                                    <div>
                                        {Object.values(singleAltImageLink).map((singleAltImageLink2, keyz) => (
                                            <div>
                                                {singleAltImageLink2.map((singleAltImageLink3: { link: string }, keyn: number) => (
                                                    <SmallImg key={keyn} src={singleAltImageLink3.link} onClick={() => dispatch({ type: SWITCH_BIG_IMAGE_STUDY, newPostionBigImage: keys, currentStudy: superkeys })} />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
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
                                    {studySingle.user.map((userSingle) => (<li>{userSingle}</li>))}
                                </ul>
                            </div>
                            <div className="grade-flex">
                                <div>
                                    {studySingle.scoreType.map((scoreTypeSingle, keys) => {
                                        if (keys === 0) { return <h3 key={keys}>{scoreTypeSingle}</h3> }
                                        else return <p key={keys}>{scoreTypeSingle}</p>
                                    })}
                                    <p>Evaluated by:</p>
                                    <p>Message:</p>
                                </div>

                                {studySingle.score[0].map((singleScoreObject) => (
                                    <div>
                                        {Object.values(singleScoreObject).map((singleScore, keys) => {
                                            if (keys === 1) return <h3 key={keys}>{singleScore}</h3>
                                            if (keys !== 0) return <p key={keys}>{singleScore}</p>
                                        }
                                        )}
                                        <p> {studySingle.user[singleScoreObject[0]]}</p>
                                        <button>Remind</button>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom">
                                <input onChange={setTempClinician} placeholder="add clinician:" />
                                <button className="add" onClick={() => dispatch({ type: SWITCH_SCORE_STUDY, newClinician: tempClinician, currentStudy: superkeys })}>Add Clinican</button>
                            </div>
                        </div>
                    </Single>
                ))}
            </SingleContainer>

        </StudyComponent>
    );
}

export default Study;