import * as actionTypes from "./actionTypes"
import { initialState, AllState, AllAction, UserType, StudyType, studyImage } from "./type.d"

const reducer = (
  state: AllState = initialState,
  action: AllAction
): AllState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      let newUser: UserType = {
        id: state.users.length,
        name: action.user.name,
        role: action.user.role,
        email: action.user.email,
        organization: action.user.organization,
        phone: action.user.phone,
        study: action.user.study,
      }
      return {
        ...state,
        users: state.users.concat(newUser),
      }

    case actionTypes.REMOVE_USER:
      let updateduser: UserType[] = state.users.filter(
        user => user.id !== action.user.id
      )
      return {
        ...state,
        users: updateduser,
      }

    case actionTypes.ADD_STUDY:
      let newStudy: StudyType = {
        name: action.study.name,
        altName: action.study.altName,
        startDate: action.study.startDate,
        endDate: action.study.endDate,
        organization: action.study.organization,
        created_by: action.study.created_by,
        image: action.study.image,
        user: action.study.user,
        scoreType: action.study.scoreType,
        score: action.study.score
      }
      return {
        ...state,
        studys: state.studys.concat(newStudy),
      }

    case actionTypes.REMOVE_STUDY:
      let updatedStudy: StudyType[] = state.studys.filter(
        study => study.name !== action.study.name
      )
      return {
        ...state,
        studys: updatedStudy,
      }

    case actionTypes.SWITCH_BIG_IMAGE_STUDY:
      let newPostionBigImage = action.newPostionBigImage
      let currentStudy = action.currentStudy

      let allStudyImage: studyImage[] = state.studys[currentStudy].image
      let currentBigImage = allStudyImage[0]
      allStudyImage.splice(0, 1, allStudyImage[newPostionBigImage])
      allStudyImage.splice(newPostionBigImage, 1, currentBigImage)

      let allStudyScore: number[][][] = state.studys[currentStudy].score
      let currentBigScore = allStudyScore[0]
      allStudyScore.splice(0, 1, allStudyScore[newPostionBigImage])
      allStudyScore.splice(newPostionBigImage, 1, currentBigScore)

      let switchStudyImage: StudyType = state.studys[currentStudy]
      switchStudyImage.image=allStudyImage

      return {
        ...state,
        studys: state.studys.map((object, keys)=>{
          if(keys===currentStudy)return switchStudyImage
          else return object
        }),
      }

    case actionTypes.SWITCH_SCORE_STUDY:
      let newClinician = action.newClinician
      let currentStudyClin = action.currentStudy

      let addStudyClinician: StudyType = state.studys[currentStudyClin]
      addStudyClinician.user.push(newClinician)

      return {
        ...state,
        studys: state.studys.map((object, keys)=>{
          if(keys===currentStudyClin)return addStudyClinician
          else return object
        }),
      }
  }
  return state
}

export default reducer