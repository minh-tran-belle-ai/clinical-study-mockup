import styled from "styled-components";

export const HomeComponent = styled.div`
   
`

export const Noti = styled.div`
   position: absolute;
   top: 20px;
   right: 20px;
`

export const NotiMessage = styled.div`
   position: absolute;
   top: 50px;
   right: 20px;
   z-index: 100;
   .single-msg{
       border: 1px solid #ff5c33;
       border-radius: 10px;
       text-align: left;
       width: 300px;
       background-color: white;
       margin: 10px 0;
       h6{
           margin: 5px;
           padding-left: 5px;
           font-size: 14px;
       }
       textarea{
           height: 50px;
           width: 100%;
           border-radius: 10px;
           height: 70px;
           margin: 0;
           padding: 0;
           
       }
       p{
           margin: 0;
           font-size: 12px;
           padding-left: 10px;
       }
   }
`

