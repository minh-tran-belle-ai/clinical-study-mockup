import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import { StudyComponent, SingleContainer } from "./Study.styles";
import { useSelector, useDispatch } from 'react-redux';
import { AllState } from "../../redux/type.d"
import { ADD_STUDY_MOD } from '../../redux/actionTypes';
import StudyUnit from './StudyUnit';

function Study() {
    const studyRedux = useSelector((initialState: AllState) => initialState.studys)
    const dispatch = useDispatch();
    const [studyNameNew, addStudyName] = useState("")
    const [studyAltNameNew, addStudyAltName] = useState("")
    const [studyStartDateNew, addStudyStartDate] = useState("")
    const [studyEndDateNew, addStudyEndDate] = useState("")
    const [studyOrganizationNew, addStudyOrganization] = useState("")
    const [studyCreatedByNew, addStudyCreatedBy] = useState("")
    const [_studyImageNew, addStudyImage] = useState("")
    const [tempClinician, addTempClinician] = useState("")
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
    const setTempClinician = (e: any) => {
        addTempClinician(e.target.value)
    }
    const AddToStudy = () => {
        // let newStudy = study
        let imgtest: any[] = [{ "": { link: "", date: "", group: 0 } }]
        let newStudySingle = {
            name: "", altName: "", startDate: "", endDate: "", organization: "", created_by: "", progressBar: 0, image: imgtest, user: ["John", "Jane", "Jack"], scoreType: ["Overall", "Erythema", "Induration", "Desquamation"], status: "ongoing", pastScore: 0, score: [[

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
        if (studyNameNew !== null && studyNameNew !== "") {
            newStudySingle.name = studyNameNew;
        }
        if (studyAltNameNew !== null && studyAltNameNew !== "") {
            newStudySingle.altName = studyAltNameNew;
        }
        if (studyStartDateNew !== null && studyStartDateNew !== "") {
            newStudySingle.startDate = studyStartDateNew;
        }
        if (studyEndDateNew !== null && studyEndDateNew !== "") {
            newStudySingle.endDate = studyEndDateNew;
        }
        if (studyOrganizationNew !== null && studyOrganizationNew !== "") {
            newStudySingle.organization = studyOrganizationNew;
        }
        if (studyCreatedByNew !== null && studyCreatedByNew !== "") {
            newStudySingle.created_by = studyCreatedByNew;
        }
        if (newStudySingle.name !== "") {
            let image = [{ link: "https://media.istockphoto.com/photos/acne-picture-id174763312?k=20&m=174763312&s=612x612&w=0&h=faW3HkUuHxQYKtCG9E8V55hIF9JYuKEEk2NRKEK3o5k=", date: "10/10/2020" , group: 1},
            { link: "https://i.pinimg.com/originals/5a/71/f3/5a71f36f443c814b534d22fab1c2d998.jpg", date: "10/10/2020" , group: 1},
            { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RWPbRkX2hhVLDehpB-1C1ed3phPya4nSWZvU7gb9Xyoa3tIkKXfiZHYfJ2JpGtGhtCI&usqp=CAU", date: "10/10/2020", group: 1 },
            { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfazKc31WbZRBd0-hIpiVoDnCsmL4eEjdaF9w-CFAMpTAlgeigjjoXFGnaz00PiqDNB1k&usqp=CAU", date: "10/10/2020", group: 1 }]
            newStudySingle.image = image
            newStudySingle.created_by = "me"
            //newStudy.push(newStudySingle)
        }
        dispatch({ type: ADD_STUDY_MOD, study: newStudySingle })
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
            {studyRedux.map((studySingle, superkeys) => {
                if(studySingle.status==="ongoing") return <StudyUnit key={superkeys} studyUnit={studySingle} clinican={false} setTempClinician={setTempClinician} tempClinician={tempClinician} superkeys={superkeys}/>
                if(studySingle.status==="closed") return <StudyUnit key={superkeys} studyUnit={studySingle} clinican={false} setTempClinician={setTempClinician} tempClinician={tempClinician} superkeys={superkeys}/>
            })}

            </SingleContainer>

        </StudyComponent>
    );
}

export default Study;