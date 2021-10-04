import styled, { css } from "styled-components";

export const Comparision = styled.div`
margin: 20px 0;
    form canvas{
    
    z-index: 12;
    width: 100%;
    height: 100%;
}

& form span{
    opacity: 0.5;
    z-index: 3;
    font-weight: lighter; 
    max-width: 30%;
    top: 20%;
    left: 35%;
    position: absolute;
}
& form img{
    object-fit: cover;
    z-index: 6;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

& form{
    display: flex; 
    flex-direction: column;
    align-items: center;
}

& input{
    opacity: 0.0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
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
}`;

export const MainFlex = styled.div`
 display: flex;
flex-direction: column; `;

export const HeaderFlex = styled.div` 
display: flex;
   justify-content: space-between;`;

export const DottedBorder = styled.div` 
border: 1.5px #666666 dashed;
    height: 150px;
    width: 300px;
    color: black;
    text-align: center;
    position: relative;
    background-color: #ccd0da79;
    border-radius: 10px;`;

export const CloseBtn = styled.div` 
 position: absolute;
    top: 15px;
    right: 10px;
    z-index: 10;
    background-color: #797979;
    border-radius: 5px;
    color: #fff;
    width: 23px !important;
    height: 23px !important;`;