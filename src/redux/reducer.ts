import * as actionTypes from "./actionTypes"
import { initialState, AllState, AllAction, UserType, StudyType, NotificationType, studyImage, } from "./type.d"

const reducer = (
  state: AllState = initialState,
  action: AllAction
): AllState => {
  switch (action.type) {
    case actionTypes.ADD_USER_ADMIN:
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

    case actionTypes.REMOVE_USER_ADMIN:
      let updateduser: UserType[] = state.users.filter(
        user => user.id !== action.user.id
      )
      return {
        ...state,
        users: updateduser,
      }

    case actionTypes.ADD_STUDY_MOD:
      let newStudy: StudyType = {
        name: action.study.name,
        altName: action.study.altName,
        startDate: action.study.startDate,
        endDate: action.study.endDate,
        organization: action.study.organization,
        created_by: action.study.created_by,
        progressBar: action.study.progressBar,
        image: action.study.image,
        user: action.study.user,
        scoreType: action.study.scoreType,
        score: action.study.score,
        status: action.study.status,
        pastScore: action.study.pastScore
      }
      return {
        ...state,
        studys: state.studys.concat(newStudy),
      }

    case actionTypes.REMOVE_STUDY_MOD:
      let updatedStudy: StudyType[] = state.studys.filter(
        study => study.name !== action.study.name
      )
      return {
        ...state,
        studys: updatedStudy,
      }

    case actionTypes.ADD_IMAGE_STUDY_MOD:
      
      let newStudyImage: studyImage = action.newStudyImage
      let currentStudyAddImage: StudyType= state.studys[action.currentStudy]
      currentStudyAddImage.image=currentStudyAddImage.image.concat(newStudyImage)
      console.log(currentStudyAddImage.image)
      return {
        ...state,
        studys: state.studys.map((object, keys) => {
          if (keys === action.currentStudy) return currentStudyAddImage
          else return object
        }),
      }

    case actionTypes.REMOVE_IMAGE_STUDY_MOD:
      let newStudyImageDelete: studyImage[] = state.studys[action.currentStudy].image.filter(
        study => study !== action.newStudyImage
      )
      let currentStudyAddImageDelete: StudyType= state.studys[action.currentStudy]
      currentStudyAddImageDelete.image=newStudyImageDelete
      console.log(currentStudyAddImageDelete.image)
      return {
        ...state,
        studys: state.studys.map((object, keys) => {
          if (keys === action.currentStudy) return currentStudyAddImageDelete
          else return object
        }),
      }

    case actionTypes.ADD_NOTIFICATION:
      let newNotification: NotificationType = {
        from: action.notification.from,
        to: action.notification.to,
        message: action.notification.message,
        date: action.notification.date
      }
      return {
        ...state,
        notifications: state.notifications.concat(newNotification)
      }

    case actionTypes.ADD_SCORE_STUDY_CLIN:
      let allStudyScoreClin: number[][][] = state.studys[0].score
      console.log(action.addScoreClinician)
      allStudyScoreClin[0][0] = action.addScoreClinician
      console.log(allStudyScoreClin)

      let switchStudyImageClin: StudyType = state.studys[0]
      // switchStudyImageClin.score = allStudyScoreClin

      return {
        ...state,
        studys: state.studys.map((object, keys) => {
          if (keys === 0) return switchStudyImageClin
          else return object
        }),
      }
  }
  return state
}

export default reducer