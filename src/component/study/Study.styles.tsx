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

`

export const Single = styled.div`
    display: flex;
    flex-direction: row;
    .{
        margin-left: 20px;
        width: 400px;
    }
    .small-gallery{
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        &>:nth-child(n){
    }
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

export const Table = styled.table`
    border-spacing: 0;
    td {
        span {
            display: flex;
            align-items: center;
            gap: 4px;
            white-space: nowrap;
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