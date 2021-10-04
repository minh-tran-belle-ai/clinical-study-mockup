import styled from "styled-components";

export const StudyComponent = styled.div`
.form-flex{
    justify-content: center;
    div{
        display: flex;
        justify-content: space-between;
        width: 400px;
        margin-left: 35vw;
        margin-bottom: 10px;
    }
   
}
img{
        border-radius: 5px;
    }  
`
export const SingleContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
    #demo-simple-select-label{
        background-color: white;
        padding-right: 10px;
    }

`

export const Single = styled.div`
    display: flex;
    flex-direction: row;
    .info{
        margin-left: 20px;
        width: 400px;
    }
    .small-gallery{
        display: flex;
        flex-wrap: wrap;
        width: 500px;
    }
    .small-gallery-display{
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        &>:nth-child(n){
    }
}
    .grouping-image{
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0;
    }
    .grade-flex{
        display: flex;
        input{
            margin-top:12px;
            height: 22px;
        }
        &>:nth-child(n){
        width: 26%;
    }
    }
    .add{
        margin-left: 10px;
        width: 130px;
        color: #e6d7d7;
        background-color: #1f9655dc;
        &:hover{
            color: white;
            background-color: #10a134dc;
        }
    }
        
    .bottom{
        margin-top: 60px;
        input{
            width: 180px;
        }
    }
`

export const BigImg = styled.img`
    width: 500px;
    height: 500px;
`
export const SmallImg = styled.img`
    width: 150px;
    height: 150px;
    margin: 5px;
`
export const Uploader = styled.div`
   .short{
       width: 40px !important;
   }
`

