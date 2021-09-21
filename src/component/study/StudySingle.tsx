import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import * as studyz from "./StudyList.json"
import { StudyComponent, Single, SingleContainer, BigImg, SmallImg } from "./Study.styles";
import { useSelector, useDispatch } from 'react-redux';
import { AllState } from "../../redux/type.d"
import { ADD_SCORE_STUDY_BY_CLINICIAN, ADD_STUDY, SWITCH_BIG_IMAGE_STUDY, SWITCH_SCORE_STUDY } from '../../redux/actionTypes';

function StudySingle() {
    const studyRedux = useSelector((initialState: AllState) => initialState.studys)
    const dispatch = useDispatch();
    const [OverallScore, setOverall] = useState<number>(studyRedux[0].score[0][0][1])
    const [ErythemaScore, setErythema] = useState(studyRedux[0].score[0][0][2])
    const [IndurationlScore, setInduration] = useState(studyRedux[0].score[0][0][3])
    const [DesquamationScore, setDesquamation] = useState(studyRedux[0].score[0][0][4])
   
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
                            <BigImg src={studySingle.image[0].link} />

                            <div className="small-gallery">
                                {studySingle.image.map((singleAltImageLink, keys) => (
                                    <SmallImg src={singleAltImageLink.link} onClick={() =>dispatch({ type: SWITCH_BIG_IMAGE_STUDY, newPostionBigImage: keys, currentStudy: superkeys}) } />
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
                                        if (keys === 0) {return <h3 key={keys}>{scoreTypeSingle}</h3>}
                                        else return <p key={keys}>{scoreTypeSingle}</p>
                                    })}
                                </div>
                                    <div>
                                        <input type="number"  placeholder={`${OverallScore}`} onChange={setTempOverall}/>
                                        <input type="number" placeholder={ErythemaScore} onChange={setTempErythema}/>
                                        <input type="number" placeholder={IndurationlScore} onChange={setTempInduration}/>
                                        <input type="number" placeholder={DesquamationScore} onChange={setTempDesquamation}/>
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