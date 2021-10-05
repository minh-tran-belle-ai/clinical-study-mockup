import React from 'react';
import { StudyComponent, Single, SingleContainer, BigImg, SmallImg } from "./Study.styles";
import PASITable from './PASITable/PASITable'
import { PASIStudy } from '../../models/PASIStudy';

let sampleImages = [
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
    
]

const sampleStudy = new PASIStudy("vaccination", new Date(), new Date(), "Pfizer", "finding covid vaccine", "me", sampleImages, ["John", "Jane", "Jack"])

function StudySingle() {
    return (
        <StudyComponent>
            <SingleContainer>
                
                <PASITable selected={sampleStudy}/>
            </SingleContainer>

        </StudyComponent>
    );
}

export default StudySingle;