import styled from "styled-components";

export const LogInComponent = styled.div`
    .form-flex{
        display: flex;
        justify-content: center;
        gap: 50px;
    }
    .quick-access{
        display: flex;
        justify-content: space-evenly;
        margin-top: 40px;
        width: 500px;
        margin-left: 30%;
        button{
        &:nth-child(1){
            background-color: #58b3ddc3;
            &:hover{
                background-color: #3166b4c3;
            }
        }
        &:nth-child(2){
            background-color: #90946fc3;
            &:hover{
                background-color: #6a7940c3;
            }
        }
    }
    }
`