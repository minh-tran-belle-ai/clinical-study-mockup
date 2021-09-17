import styled from "styled-components";
export const SingleContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
.header{
    display: flex;
    &>:nth-child(n){
        width: 16%;
    }
   }
`
export const Single = styled.div`
   /* width: 1500px; */
   
   
    
`

export const UserComponent = styled.div`
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
li{
        margin-bottom: 10px;
    }`
