import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import { Single, BigImg, SmallImg, Uploader, PastScore } from "./Study.styles";
import { useDispatch } from 'react-redux';
import { studyImage, StudyType } from "../../redux/type.d"
import { ADD_CLINICIAN_STUDY_MOD, ADD_IMAGE_STUDY_MOD, ADD_SCORE_STUDY_CLIN, REMOVE_IMAGE_STUDY_MOD } from '../../redux/actionTypes';
import ProgressBar from '../progressBar/progressBar';
import ImageUpload from '../image_upload/ImageComparision';
import PASITable from './PASITable/PASITable';
import CloseIcon from '@mui/icons-material/Close';
interface Unit {
    studyUnit: StudyType;
    clinican: Boolean;
    setTempClinician?: (e: any) => void;
    tempClinician?: string,
    superkeys?: number,
}

function StudyUnit({ studyUnit, clinican, setTempClinician, tempClinician, superkeys }: Unit) {
    const [study, _changeStudy] = useState(studyUnit)
    const dispatch = useDispatch();
    const [OverallScore, setOverall] = useState<number>(study.score[0][0][1])
    const [file, switchFile] = useState(null)
    const [imageGroupTemp, setImageGroupTemp] = useState(0)
    const [ErythemaScore, setErythema] = useState(study.score[0][0][2])
    const [IndurationlScore, setInduration] = useState(study.score[0][0][3])
    const [DesquamationScore, setDesquamation] = useState(study.score[0][0][4])
    const [currentImageGroup, changeCurrentImageGroup] = useState(0)
    const [bigImg, changeBigImg] = useState(0)
    const setTempOverall = (e: any) => {
        setOverall(e.target.value)
    }
    const setTempErythema = (e: any) => {
        setErythema(e.target.value)
    }
    const setTempInduration = (e: any) => {
        setInduration(e.target.value)
    }
    const setTempDesquamation = (e: any) => {
        setDesquamation(e.target.value)
    }
    const setImageGroupTempRE = (e: any) => {
        setImageGroupTemp(e.target.value)
    }
    const showPastScore=()=>{
        let num =study.pastScore
        while(num>0){
            num--;
            return (<PASITable />)
        }
    }
    const onClickDelete = (singleAltImageLink: studyImage)=>{
        let r = window.confirm("Do you want to delete this image?");
        if (r === true) {
            dispatch({ type: REMOVE_IMAGE_STUDY_MOD, currentStudy: superkeys, newStudyImage: singleAltImageLink })
            alert("Image was deleted!");
        } else {
          alert("Image deletion process was cancel!");
        }
    }

    const upDateScore = () => {
        let newScore = [0, OverallScore, ErythemaScore, IndurationlScore, DesquamationScore]
        dispatch({ type: ADD_SCORE_STUDY_CLIN, addScoreClinician: newScore })
        alert("Score was updated")
    }
    return (
        <Single>
            <ProgressBar completed={study.progressBar} />
            <div className="header">
                <BigImg src={study.image[bigImg].link} />

                <div className="small-gallery">
                    <h3>Click a button to see images presented by their relevancy as a group</h3>
                    <div className="grouping-image">
                        {study.scoreType.map((singleScoreType, keya) => (
                            <button onClick={() => changeCurrentImageGroup(keya)}>{singleScoreType}</button>
                        ))}
                    </div>
                    <div className="small-gallery-display">
                        {study.image.map((singleAltImageLink, keys) => {
                            if (currentImageGroup === 0) return (
                                <div className="single-img-with-del">
                                    {clinican === false && <CloseIcon className="close-btn" onClick={() => onClickDelete(singleAltImageLink)} />}
                                    <SmallImg src={singleAltImageLink.link} onClick={() => changeBigImg(keys)} />
                                </div>)
                            else if (currentImageGroup === singleAltImageLink.group) return <SmallImg src={singleAltImageLink.link} onClick={() => changeBigImg(keys)} />
                        })}
                    </div>
                </div>
            </div>
            <div className="info">
                <div>

                    <h1>{study.name}</h1>
                    <h3>{study.altName}</h3>
                    <p>Start: {study.startDate}</p>
                    <p>End: {study.endDate}</p>
                    <p>Org: {study.organization}</p>
                    <p>Created by: {study.created_by}</p>
                    {clinican === false ?
                        <ul>Participant:
                            {study.user.map((userSingle) => (<li>{userSingle}</li>))}
                        </ul> :
                        <div />}
                </div>
                <div>
                    {clinican === false ?
                        <div className="grade-flex">
                            {/* <div>
                                {study.scoreType.map((scoreTypeSingle, keys) => {
                                    if (keys === 0) { return <h3 key={keys}>{scoreTypeSingle}</h3> }
                                    else return <p key={keys}>{scoreTypeSingle}</p>
                                })}
                                <p>Evaluated by:</p>
                                <p>Message:</p>
                            </div>

                            {study.score[0].map((singleScoreObject) => (
                                <div>
                                    {Object.values(singleScoreObject).map((singleScore, keys) => {
                                        if (keys === 1) return <h3 key={keys}>{singleScore}</h3>
                                        if (keys !== 0) return <p key={keys}>{singleScore}</p>
                                    }
                                    )}
                                    <p> {study.user[singleScoreObject[0]]}</p>
                                    <button>Remind</button> 
                                </div>
                            ))}*/}
                        </div> :
                        <div className="grade-flex">
                            <h3>Current Score</h3>
                            <PASITable />
                            {/* <div>
                            {study.scoreType.map((scoreTypeSingle, keys) => {
                                if (keys === 0) { return <h3 key={keys}>{scoreTypeSingle}</h3> }
                                else return <p key={keys}>{scoreTypeSingle}</p>
                            })}
                        </div>
                        <div>
                        <PASITable/>
                            <input type="number" placeholder={`${OverallScore}`} onChange={setTempOverall} />
                            <input type="number" placeholder={ErythemaScore} onChange={setTempErythema} />
                            <input type="number" placeholder={IndurationlScore} onChange={setTempInduration} />
                            <input type="number" placeholder={DesquamationScore} onChange={setTempDesquamation} />
                        </div> */}
                        </div>
                    }
                    <div className="bottom">
                        {clinican === false && setTempClinician ? <input onChange={setTempClinician} placeholder="add clinician:" /> : <div />}
                        {clinican === false ?
                            <button className="add" onClick={() => dispatch({ type: ADD_CLINICIAN_STUDY_MOD, newClinician: tempClinician, currentStudy: superkeys })}>Add Clinican</button> :
                            <button className="add" onClick={() => upDateScore()}>Submit Score</button>}
                        {clinican === false ?
                            <Uploader>
                                <ImageUpload
                                    file={file}
                                    //date={this.state.date}
                                    switchFile={switchFile}
                                />
                                <label>set group: </label>
                                <input className="short" onChange={setImageGroupTempRE} placeholder={`${imageGroupTemp}`} />
                                <button className="add" onClick={() => dispatch({
                                    type: ADD_IMAGE_STUDY_MOD, newStudyImage:
                                    {
                                        link: file,
                                        "date": Date.now(),
                                        "group": +imageGroupTemp
                                    }, currentStudy: superkeys
                                })}>Add Image</button>
                            </Uploader> :
                            <span />}
                    </div>
                </div>
            </div>
            <PastScore>
                <h3>Past Score</h3>
                {study.pastScore>0? <PASITable />:<span/>}
                {study.pastScore===2? <PASITable />:<span/>}
                {study.pastScore===3? <PASITable />:<span/>}
            </PastScore>
        </Single>
    );
}

export default StudyUnit;