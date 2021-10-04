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
    flex-direction: column;
    width: 100%;
    .header{
        display: flex;
        .single-img-with-del{
            position: relative;
        }
        .close-btn{
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 10;
    background-color: #797979;
    border-radius: 5px;
    color: #fff;
    width: 23px !important;
    height: 23px !important;
}
    }
    .info{
        display: flex;
        width: 100%;
        justify-content: space-around;
        &>:nth-child(1){
            width: 30%
        }
    }
    .small-gallery{
        /* display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 60vw;
        &>:nth-child(1){
            height: 50px;
    } */
    h3{
           margin: 10px 0;
           font-weight: 400;
           color: #00000073;
       }
    }
    .small-gallery-display{
        display: flex;
        flex-wrap: wrap;
        width: 60vw;
        margin: 20px;
       
}
    .grouping-image{
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0;
    }
    .grade-flex{
        input{
            margin-top:12px;
            height: 22px;
        }
        &>:nth-child(n){
        width:100%;
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


export const Table = styled.table`
    border-spacing: 0;
    td {
        span {
            display: flex;
            align-items: center;
            gap: 4px;
            white-space: nowrap;
            justify-content: center;
        }
    }
    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:not(:first-of-type):hover {
        background-color: #ddd;
    }
    input {
        display: inline-block;
        background: transparent;
        min-width: 20px;
        max-width: 60px;
        padding: 4px 0;
        border: none;
        border-bottom: 1px solid #828282;
        &:focus-visible {
            outline: none;
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: gray;
            opacity: 1; /* Firefox */
        }
        
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: gray;
        }
        
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: gray;
        }
    }
`
export const PastScore = styled.div`
       width: 100%;
       table{
           width: 100%;
       }
       margin-bottom: 300px;
`


