import styled, { css } from "styled-components";

export const ContainerStyles = styled.div`
margin: 20px 0;
 height: 20;
      width: 100%;
      background-color: #e0e0de;
      border-radius: 50;
      margin: 50;
`
export const FillerStyles = styled.div`
      height: 100%;
      ${css`width: ${(props:{completed:number}) => props.completed? props.completed+"%":0};`}
      background-color:#803180;
      border-radius: inherit;
      text-align: right;
`
export const LabelStyles = styled.span`
      padding: 5;
      color: white;
      font-weight: bold
    
`