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
export interface studyImageFolder {
    [string]:studyImage[]
}
export interface StudyType {
    name: string
    altName: string
    startDate: string
    endDate: string
    organization: string,
    createdBy: string,
    image: studyImageFolder[],
    user: string[]
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
            "createdBy": "me",
            "image": [
                {
                    "Safety": [
                        {
                            "link": "https://file3.qdnd.vn/data/images/0/2021/07/17/tuanson/4.jpg",
                            "date": "10/10/2020"
                        },
                        {
                            "link": "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/10/vx-tron-1631276536315647749944.jpeg",
                            "date": "10/10/2020"
                        },
                    ]
                },
                {
                    "Efficiency": [
                        {
                            "link": "https://media-cdn.laodong.vn/storage/newsportal/2021/9/12/952654/Vaccine-Astrazeneca-.jpg",
                            "date": "10/10/2020"
                        }]
                },
                {"Price": [
                    {
                        "link": "https://media-cdn.laodong.vn/storage/newsportal/2021/9/8/951306/Vaccine-Morderna.jpg?w=414&h=276&crop=auto&scale=both",
                        "date": "10/10/2020"
                    }
                ]}
                
            ],
            "user": ["John", "Jane", "Jack"],
            "scoreType": ["Overall", "Safety", "Efficiency", "Price"],
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
                    [0, 7, 6, 3, 1],
                    [1, 9, 2, 4, 6],
                    [2, 2, 2, 2, 1]
                ],
                [
                    [0, 5, 3, 2, 2],
                    [1, 7, 4, 3, 2],
                    [2, 3, 3, 5, 3]
                ]
            ]
        },
        // {
        //     "name": "acne",
        //     "altName": "make your face acne free",
        //     "startDate": "10/10/2020",
        //     "endDate": "11/11/2021",
        //     "organization": "Roche Holding AG",
        //     "createdBy": "me",
        //     "image": [
        //         {
        //             "link": "https://images.medicinenet.com/images/slideshow/boils_s4_cystic_acne.jpg",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://assets.nhs.uk/prod/images/S_0917_acne_M1080444.max-600x600.jpg",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://cdn.shopify.com/s/files/1/0557/9803/8687/articles/acne.jpg?v=1625317030",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-851423236-1558637428.jpg?crop=0.713xw:1.00xh;0.216xw,0&resize=480:*",
        //             "date": "10/10/2020"
        //         }
        //     ],
        //     "user": ["Click", "Clint", "Caz"],
        //     "scoreType": ["Overall", "Erythema", "Induration", "Desquamation"],
        //     "score": [
        //         [
        //             [0, 10, 5, 3, 2],
        //             [1, 8, 4, 3, 4],
        //             [2, 5, 3, 4, 1]
        //         ],
        //         [
        //             [0, 4, 2, 4, 1],
        //             [1, 6, 3, 7, 2],
        //             [2, 4, 2, 3, 2]
        //         ],
        //         [
        //             [0, 7, 6, 3, 1],
        //             [1, 9, 2, 4, 6],
        //             [2, 2, 2, 2, 1]
        //         ],
        //         [
        //             [0, 5, 3, 2, 2],
        //             [1, 7, 4, 3, 2],
        //             [2, 3, 3, 5, 3]
        //         ]
        //     ]
        // },
        // {
        //     "name": "cancer",
        //     "altName": "finding the cure to cancer",
        //     "startDate": "10/10/2020",
        //     "endDate": "11/11/2021",
        //     "organization": "Eli Lily and co",
        //     "createdBy": "me",
        //     "image": [
        //         {
        //             "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpruPcm_caTDI9vlIN4A-VxK6dWb9FarF5ew&usqp=CAU",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://images.onhealth.com/images/slideshow/cancer-101-s1-what-is-cancer-cell.jpg",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKLxIUlDRtI4MPGwhdIhO6zPdHjM3LxrCxNXKMZY9ub5A-l2O0lrnCjiWa2N-UB992vA&usqp=CAU",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMRj4pEluPpu9WzyqGLLbENXhikS259IH6tn3OyIKLlsE-f0s2Klj1oMzfiBPK3qJRRI&usqp=CAU",
        //             "date": "10/10/2020"
        //         }
        //     ],
        //     "user": ["Nam", "Nait", "Nemur"],
        //     "scoreType": ["Overall", "Growing rate", "Benign", "Death risk"],
        //     "score": [
        //         [
        //             [0, 10, 5, 3, 2],
        //             [1, 8, 4, 3, 4],
        //             [2, 5, 3, 4, 1]
        //         ],
        //         [
        //             [0, 4, 2, 4, 1],
        //             [1, 6, 3, 7, 2],
        //             [2, 4, 2, 3, 2]
        //         ],
        //         [
        //             [0, 7, 6, 3, 1],
        //             [1, 9, 2, 4, 6],
        //             [2, 2, 2, 2, 1]
        //         ],
        //         [
        //             [0, 5, 3, 2, 2],
        //             [1, 7, 4, 3, 2],
        //             [2, 3, 3, 5, 3]
        //         ]
        //     ]
        // },
        // {
        //     "name": "skin",
        //     "altName": "Rid you of skin diseases",
        //     "startDate": "10/10/2020",
        //     "endDate": "11/11/2021",
        //     "organization": "Eli Lily and co",
        //     "createdBy": "me",
        //     "image": [
        //         {
        //             "link": "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/4468-skin-layers-1296x728-body-50.jpg",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://previews.123rf.com/images/hfsimaging/hfsimaging1509/hfsimaging150900013/44912780-section-through-skin-showing-normal-epidermis-and-skin-surface-structure-resulting-in-water-loss-and.jpg",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://i0.wp.com/microbeonline.com/wp-content/uploads/2021/06/Skin-microbiome.jpg?fit=1010%2C1050&ssl=1",
        //             "date": "10/10/2020"
        //         },
        //         {
        //             "link": "https://www.researchgate.net/publication/337569825/figure/fig1/AS:829932498321413@1574882735330/Schematic-cross-section-of-skin-with-its-appendages-Reprinted-from-3-with-permission.png",
        //             "date": "10/10/2020"
        //         }
        //     ],
        //     "user": ["Nam", "Nait", "Nemur"],
        //     "scoreType": ["Overall", "Erythema", "Induration", "Desquamation"],
        //     "score": [
        //         [
        //             [0, 10, 5, 3, 2],
        //             [1, 8, 4, 3, 4],
        //             [2, 5, 3, 4, 1]
        //         ],
        //         [
        //             [0, 4, 2, 4, 1],
        //             [1, 6, 3, 7, 2],
        //             [2, 4, 2, 3, 2]
        //         ],
        //         [
        //             [0, 7, 6, 3, 1],
        //             [1, 9, 2, 4, 6],
        //             [2, 2, 2, 2, 1]
        //         ],
        //         [
        //             [0, 5, 3, 2, 2],
        //             [1, 7, 4, 3, 2],
        //             [2, 3, 3, 5, 3]
        //         ]
        //     ]
        // }
    ]
}