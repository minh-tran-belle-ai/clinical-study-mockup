export type AllState = {
    users: UserType[]
    studys: StudyType[]

}
export type AllAction = {
    type: string
    user: UserType
    study: StudyType
    newPostionBigImage: number
    currentStudy: number
    newClinician: string
    addScoreClinician: number[]
}


// export interface scoreBy {
//     [string]: number[]
// }
export interface studyImage {
    link: string,
    date: string
}
export interface StudyType {
    name: string
    altName: string
    startDate: string
    endDate: string
    organization: string,
    created_by: string,
    image: studyImage[],
    user: string[],
    scoreType: string[],
    score: numer[][][],
}
export interface studyLite {
    study: string
    progress: number
}
export interface UserType {
    id: number
    name: string
    role: string
    email: string
    organization: string
    phone: string
    study: studyLite[]
}

export const initialState: AllState = {
    users: [
        {
            "id": 1,
            "name": "John",
            "role": "clinician",
            "email": "clinician@john.email",
            "organization": "Pfizer",
            "phone": "012-346-789",
            "study": [{ "study": "vaccine", "progress": 90 }]
        },
        {
            "id": 2,
            "name": "Jane",
            "role": "clinician",
            "email": "clinician@jane.email",
            "organization": "Pfizer",
            "phone": "012-346-789",
            "study": [{ "study": "vaccine", "progress": 90 }]
        },
        {
            "id": 3,
            "name": "Jack",
            "role": "clinician",
            "email": "clinician@jack.email",
            "organization": "Pfizer",
            "phone": "012-346-789",
            "study": [{ "study": "vaccine", "progress": 90 }]
        },
        {
            "id": 4,
            "name": "Click",
            "role": "clinician",
            "email": "clinician@clink.email",
            "organization": "Roache",
            "phone": "012-346-789",
            "study": [{ "study": "acne", "progress": 45 }]
        },
        {
            "id": 5,
            "name": "Clint",
            "role": "clinician",
            "email": "clinician@clint.email",
            "organization": "Roache",
            "phone": "012-346-789",
            "study": [{ "study": "acne", "progress": 45 }]
        },
        {
            "id": 6,
            "name": "Caz",
            "role": "clinician",
            "email": "clinician@caz.email",
            "organization": "Roache",
            "phone": "012-346-789",
            "study": [{ "study": "acne", "progress": 45 }]
        },
        {
            "id": 7,
            "name": "Nam",
            "role": "clinician",
            "email": "clinician@nam.email",
            "organization": "Lilly",
            "phone": "012-346-789",
            "study": [{ "study": "cancer", "progress": 20 }]
        },
        {
            "id": 8,
            "name": "Nait",
            "role": "clinician",
            "email": "clinician@anit.email",
            "organization": "Lilly",
            "phone": "012-346-789",
            "study": [{ "study": "cancer", "progress": 20 }]
        },
        {
            "id": 9,
            "name": "Nemur",
            "role": "clinician",
            "email": "clinician@nemur.email",
            "organization": "Lilly",
            "phone": "012-346-789",
            "study": [{ "study": "cancer", "progress": 20 }, { "study": "skin", "progress": 0 }]
        },
        {
            "id": 10,
            "name": "Mez",
            "role": "administrator",
            "email": "administrator@me.email",
            "organization": "Pfizer",
            "phone": "012-346-789",
            "study": [{ "study": "", "progress": 0 }]
        }
    ],
    studys: [
        {
            "name": "vaccination",
            "altName": "finding covid vaccine",
            "startDate": "10/10/2020",
            "endDate": "11/11/2021",
            "organization": "Pfizer",
            "created_by": "me",
            "image": [
                {
                    "link": "https://file3.qdnd.vn/data/images/0/2021/07/17/tuanson/4.jpg",
                    "date": "10/10/2020"
                },
                {
                    "link": "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/10/vx-tron-1631276536315647749944.jpeg",
                    "date": "10/10/2020"
                },
                {
                    "link": "https://media-cdn.laodong.vn/storage/newsportal/2021/9/12/952654/Vaccine-Astrazeneca-.jpg",
                    "date": "10/10/2020"
                },
                {
                    "link": "https://media-cdn.laodong.vn/storage/newsportal/2021/9/8/951306/Vaccine-Morderna.jpg?w=414&h=276&crop=auto&scale=both",
                    "date": "10/10/2020"
                }
            ],
            "user": ["John", "Jane", "Jack"],
            "scoreType": ["Overall", "Erythema", "Induration", "Desquamation"],
            "score": [
                [
                    [0, 10, 5, 3, 2],
                    [1, 8, 4, 3, 4],
                    [2, 5, 3, 4, 1]
                ],
                [
                    [0, 4, 2, 4, 1],
                    [1, 6, 3, 7, 2],
                    [2, 4, 2, 3, 2]
                ],
                [
                    [0, 7, 6, 3, 1] ,
                    [1, 9, 2, 4, 6] ,
                    [2, 2, 2, 2, 1] 
                ],
                [
                    [0, 5, 3, 2, 2] ,
                    [1, 7, 4, 3, 2] ,
                    [2, 3, 3, 5, 3] 
                ]
            ]
        }
    ]
}