import React from 'react';
// import { HomeComponent } from "./Home.styles";
//import { useState } from 'react'
import { StudyComponent, SingleContainer } from "./Study.styles";
import { useSelector, } from 'react-redux';
import { AllState } from "../../redux/type.d"
// import { ADD_SCORE_STUDY_BY_CLINICIAN,  } from '../../redux/actionTypes';
import StudyUnit from './StudyUnit';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

function StudySingle() {
    const studyRedux = useSelector((initialState: AllState) => initialState.studys)
    // const [OverallScore, setOverall] = useState<number>(studyRedux[0].score[0][0][1])
    // const [ErythemaScore, setErythema] = useState(studyRedux[0].score[0][0][2])
    // const [IndurationlScore, setInduration] = useState(studyRedux[0].score[0][0][3])
    // const [DesquamationScore, setDesquamation] = useState(studyRedux[0].score[0][0][4])

    // const setTempOverall = (e: any) => {
    //     setOverall(e.target.value)
    // }
    // const setTempErythema = (e: any) => {
    //     setErythema(e.target.value)
    // }
    // const setTempInduration = (e: any) => {
    //     setInduration(e.target.value)
    // }
    // const setTempDesquamation = (e: any) => {
    //     setDesquamation(e.target.value)
    // }

    // const upDateScore=()=>{
    //     let newScore=[0, OverallScore, ErythemaScore, IndurationlScore, DesquamationScore]
    //     dispatch({ type: ADD_SCORE_STUDY_BY_CLINICIAN, addScoreClinician: newScore}) 
    //     alert("Score was updated")
    // }

    const [studyNo, setStdyNo] = React.useState(0);

    const handleChange = (event: any) => {
        setStdyNo(event.target.value);
    };

    return (
        <StudyComponent>
            <SingleContainer>
                {/* <Box sx={{ minWidth: 120 }}> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose the study you want to focus on</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={studyNo}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={100}>All</MenuItem>
                            <MenuItem value={0}>NAPSI</MenuItem>
                            <MenuItem value={1}>PASI</MenuItem>
                            <MenuItem value={2}>EASI</MenuItem>
                            <MenuItem value={3}>NAIL</MenuItem>
                        </Select>
                    </FormControl>
                {/* </Box> */}
                {studyRedux.map((studySingle, superkeys) => {
                    if (studyNo === 100) return <StudyUnit studyUnit={studySingle} clinican={true} />
                    if (studyNo === superkeys) return <StudyUnit studyUnit={studySingle} clinican={true} />
                })}
            </SingleContainer>

        </StudyComponent>
    );
}

export default StudySingle;