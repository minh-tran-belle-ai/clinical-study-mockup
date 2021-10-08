export type AllState = {
    users: UserType[]
    studys: StudyType[]
    notifications: NotificationType[]
    orgs: OrgType[]
}
export type AllAction = {
    type: string
    user: UserType
    study: StudyType
    org: OrgType
    currentStudy: number
    newStudyImage: studyImage
    newClinician: string
    addScoreClinician: number[]
    notification: NotificationType
}

export interface studyImage {
    link: string,
    date: string,
    group: number,
}
export interface StudyType {
    name: string
    altName: string
    startDate: string
    endDate: string
    organization: string,
    created_by: string,
    progressBar: number,
    image: studyImage[],
    user: string[],
    scoreType: string[],
    score: numer[][][],
    status: string,
    pastScore: number,
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

export interface OrgType {
    id: number
    name: string
    logo: string
    study: string[]
    clinician: string[]
}

export interface NotificationType{
    from: string
    to: string
    message: string 
    date: string
}

export const initialState: AllState = {
    notifications: [
        {
            "from": "admin",
            "to": "John",
            "message": "there's only 3 days left on NAPSI project",
            "date": "10/17/2020"
        },
        {
            "from": "admin",
            "to": "John",
            "message": "there's only 5 days left on ACNE project",
            "date": "10/15/2020"
        }
    ],
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
            "name": "Psoriasis",
            "altName": "Psoriasis is a skin condition that causes red, flaky, crusty patches of skin covered with silvery scales.",
            "startDate": "10/10/2020",
            "endDate": "11/11/2021",
            "organization": "Pfizer",
            "created_by": "me",
            "progressBar": 90,
            "image": [
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVEDBP9R-8ndTE2OtJa3UyQt9yZ_vHvIj8jm-EmWaoOFXdoLM2PTjW_lkDh5jdPdf09g&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAOdYJ97PJEoUsW4kkixzdXcc8-IQr12hds7yhz_7M8Ab3wiW6AIZkJ-81hBvZ2ABa1E&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdQa9VCH53RHAdm1GyiEUiLBni7MOL4pFXlDf9zGxzakEZZdNPEjONxQGpS3e3mqZa2E&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://images.emedicinehealth.com/images/slideshow/psoriasis-causes-symptoms-treatments-s2-photo-of-psoriasis-symptoms.jpg",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://images.emedicinehealth.com/images/slideshow/psoriasis-causes-symptoms-treatments-s2-photo-of-psoriasis-symptoms.jpg",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://images.ctfassets.net/yixw23k2v6vo/4yKRxyJeOTacoLgJmFyJOn/14ce77a52ad4f8212807bfea653776c2/iStock-1137585950.jpg",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://media.allure.com/photos/5a20922d753d0c2eea9defa6/3:4/w_1628,h_2171,c_limit/psoriasis.jpg",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://ichef.bbci.co.uk/news/1024/media/images/54648000/jpg/_54648363_c0093890-psoriasis.jpg",
                    "date": "10/10/2020",
                    "group": 4
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyrX6wyW-WGaTgTrx1OIM5Ba9vOkq181F4oyHJjnjko35-nfUezkE8esouHVe0Ps-rb8&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 4
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4WsJ4ZLfna3Keiq9N55HKChkECrG8Ys08uorit6QwD3wP5a1A_wmBv5AzMp0VqSOJHA&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://previews.123rf.com/images/osmar01/osmar011801/osmar01180100066/94263853-psoriasis-is-a-chronic-inflammatory-disease-of-the-skin-details-of-the-legs-.jpg",
                    "date": "10/10/2020",
                    "group": 3
                }

            ],
            "user": ["John", "Jane", "Jack"],
            "scoreType": ["Overall", "Head and Neck", "Upper Limbs", "Lower Limbs", "Trunk"],
            "pastScore": 3,
            "status": "ongoing",
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
        {
            "name": "EASI",
            "altName": "The Eczema Area and Severity Index (EASI) is a validated scoring system that grades the physical signs of atopic dermatitis/eczema. EASI is the core outcome for measuring the clinical signs of eczema in all trials.",
            "startDate": "10/10/2020",
            "endDate": "11/11/2021",
            "organization": "Roche Holding AG",
            "created_by": "me",
            "progressBar": 50,
            "image": [
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvZ1mbO_9FHb3lGWRPPlTBdoq9qjslZYbLmI1IpKGApr6dAi9RqR14X65p4VtGKgAzqk&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_PMH9ybAPDZStrAeofbE46JMnEHaMHDEzlWhZYv-cCuNjr3ymf_i4fuohFfidnVzuG0&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bSjkp2soH_hJ7TAC1a8f_3DbD1iRirQAaV8iSH6_lPz0MmgvrWmFcNKFgJkjB7_JDsE&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9OJI6kFemDsBy31kFBsjqpTaJtXUybvr5paTcwCSPw7v2FqhLSCNnzaI3TfDxibFKOs&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/08/the-girl-has-dermatitis-on-the-neck-1296x728-header-1024x575.jpg?w=1155&h=1528",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://www.researchgate.net/profile/Mikiya-Sato/publication/41620575/figure/fig1/AS:202521114091520@1425296204710/Eczema-on-the-patients-neck-photographed-on-day-5.png",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UVEH5dNbtKRjUtG5tek0nfbCPQWoHVQJo4dPJeQXHoC6K6t62ddxz-iJm-v0AA21RFQ&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbZY_WA4ZeSJTUYmsJ691-fhdF521Is33uluMzvX2c7KUIJj9LLTsZDbhttBtBilXNlw&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGPnuMMtGaYIXWBle8O5XdeQN6IbG9GOvkLn4h90q2Wcz2z5y_AcwwqQYHwpbHaGXTA4&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8PghS8Grt6MJTTC-Kum_-md9ShcrnayITdGYQ8D7RhawZI-Nu_bIgTKk99YC9fjsVvA&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                }
            ],
            "user": ["Click", "Clint", "Caz"],
            "scoreType": ["Overall", "Head and Neck", "Upper Limbs", "Lower Limbs", "Trunk"],
            "status": "ongoing",
            "pastScore": 2,
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
        {
            "name": "SCORAD",
            "altName": "SCORAD is a clinical tool used to assess the extent and severity of eczema (SCORing Atopic Dermatitis).",
            "startDate": "10/10/2020",
            "endDate": "11/11/2021",
            "organization": "Eli Lily and co",
            "created_by": "me",
            "progressBar": 30,
            "image": [
                {
                    "link": "https://images.medicinenet.com/images/image_collection/pediatrics/atopic-dermatitis-8-2.jpg",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OfrbyqXc9kWdXvydxzxVsmHghOOGycn-XoBrK6tOzPnNpyFW_sJ7pCqopH_Nk5hEp54&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmQqw7rwvB8f9gGw_ARO8bxi3xlKbHA9T0QEQhK6Cc2qWLfh1L7bzA5ZX_hIpruEoFuQ&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 2
                },
                {
                    "link": "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-1138468353_header-1024x575.jpg?w=1155&h=1528",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://images.squarespace-cdn.com/content/v1/5a7b2e05bff2001bc750b07d/1520532268876-85ESK1G817WDO3X29CS9/a+patient+itching+their+eczema-affected+hands",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGvu6vJbuREAhNKk2q87hk12mSbvuRp4n1JVQ9Vg_Y3FwGeX6NytMGwbD608tTdGzSlw&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://images.rxlist.com/images/image_collection/pediatrics/scarlet-fever-3-24.jpg",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/eczema1.jpg?itok=uZVroJeQ",
                    "date": "10/10/2020",
                    "group": 3
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcdHAmUyWT0DAF6eOvdt2dpmTRv5AZ3fhpAComl-xmSgEEloWxhH3u9x0BeqIvYM0ip0&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 3
                }
            ],
            "user": ["Nam", "Nait", "Nemur"],
            "scoreType": ["Overall", "Growing rate", "Benign", "Death risk"],
            "status": "ongoing",
            "pastScore": 1,
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
        {
            "name": "Nail Psoriasis (NAPS)",
            "altName": "Nail psoriasis alters the way your toenails and fingernails look. They may get thick, develop pinprick holes and change color or shape. ",
            "startDate": "10/10/2020",
            "endDate": "11/11/2021",
            "organization": "Eli Lily and co",
            "created_by": "me",
            "progressBar": 100,
            "image": [
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgt4HasFvtgaRzk4cZFgRMy-UVz9i9-XRlfyHmaqF4HC8EqsDO3DRhv6eQ8Ga5t4rt6gw&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://www.researchgate.net/publication/271730201/figure/fig2/AS:398565353508865@1472036793321/Nail-bed-psoriasis-of-fingernails_Q640.jpg",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-319-08810-5_11/MediaObjects/315148_1_En_11_Fig12_HTML.gif",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3IDFeSRGmLDUYvUogTT5vExe5bUgdi75q6qFMDqONAoTKdQ-YUkWmEK6I39voq5J9sU&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRssCQ68ItmmJfO5dbFvmNnHub0bRI4I0wFw&usqp=CAU",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://thumbs.dreamstime.com/b/damaged-toenails-onychomycosis-nail-psoriasis-damaged-toenails-onychomycosis-nail-psoriasis-rough-foot-white-background-213809393.jpg",
                    "date": "10/10/2020",
                    "group": 1
                },
                {
                    "link": "https://img.etimg.com/thumb/msid-66048660,width-1200,height-900,imgsize-463403,overlay-etpanache/photo.jpg",
                    "date": "10/10/2020",
                    "group": 1
                },
            ],
            "user": ["Nam", "Nait", "Nemur"],
            "scoreType": ["Overall", "Erythema", "Induration", "Desquamation"],
            "status": "closed",
            "pastScore": 0,
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
        }
    ],
    org:[
    ]
}