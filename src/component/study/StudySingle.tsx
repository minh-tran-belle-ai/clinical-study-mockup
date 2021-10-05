import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import { StudyComponent, Single, SingleContainer, BigImg, SmallImg } from "./Study.styles";
import { useSelector, useDispatch } from 'react-redux';
import { AllState, initialState } from "../../redux/type.d"
import { ADD_SCORE_STUDY_BY_CLINICIAN, ADD_STUDY, SWITCH_BIG_IMAGE_STUDY } from '../../redux/actionTypes';
import PASITable from './PASITable/PASITable'

function StudySingle() {
    const getUserStudy=()=>{
        let study=initialState.studys
        // for(v in initialState.studys.length)
    }
    const studyRedux = useSelector((initialState: AllState) => initialState.studys)
    const dispatch = useDispatch();
    const [OverallScore, setOverall] = useState<number>(0)
    const [ErythemaScore, setErythema] = useState(0)
    const [IndurationlScore, setInduration] = useState(0)
    const [DesquamationScore, setDesquamation] = useState(0)
   
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

    const upDateScore=()=>{
        let newScore=[0, OverallScore, ErythemaScore, IndurationlScore, DesquamationScore]
        dispatch({ type: ADD_SCORE_STUDY_BY_CLINICIAN, addScoreClinician: newScore}) 
        alert("Score was updated")
    }
    return (
        <StudyComponent>
            <SingleContainer>
                {studyRedux.map((studySingle, superkeys) => (
                    <Single>
                        <div className="header">
                        <BigImg src={Object.values(studySingle.image[0])[0].link} />
                            <div className="small-gallery">
                                {studySingle.image.map((singleAltImageLink, keys) => (
                                    <SmallImg src={Object.values(singleAltImageLink)[0].link} onClick={() =>dispatch({ type: SWITCH_BIG_IMAGE_STUDY, newPostionBigImage: keys, currentStudy: superkeys}) } />
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
                                <p>Created by: {studySingle.createdBy}</p>
                            </div>
                            <div className="grade-flex">
                                <div>
                                    {/* {studySingle.scoreType.map((scoreTypeSingle, keys) => {
                                        if (keys === 0) {return <h3 key={keys}>{scoreTypeSingle}</h3>}
                                        else return <p key={keys}>{scoreTypeSingle}</p>
                                    })} */}
                                </div>
                                    <div>
                                        {/* <input type="number"  placeholder={`${OverallScore}`} onChange={setTempOverall}/>
                                        <input type="number" placeholder={ErythemaScore} onChange={setTempErythema}/>
                                        <input type="number" placeholder={IndurationlScore} onChange={setTempInduration}/>
                                        <input type="number" placeholder={DesquamationScore} onChange={setTempDesquamation}/> */}
                                    </div>
                            </div>
                            <div className="bottom">
                                <button className="add" onClick={() => upDateScore()}>Submit Score</button>
                            </div>
                        </div>
                    </Single>
                ))}
            </SingleContainer>

        </StudyComponent>
    );
}

export default StudySingle;