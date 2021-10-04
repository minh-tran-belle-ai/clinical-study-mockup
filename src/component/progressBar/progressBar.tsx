import React from 'react';
import {ContainerStyles, FillerStyles, LabelStyles} from "./progressBar.style"
interface Props{
    completed:number
}
const ProgressBar = (props:Props) => {
  
   
    return (
      <ContainerStyles>
        <FillerStyles completed={props.completed}>
          <LabelStyles >{`${props.completed}%`}</LabelStyles>
        </FillerStyles>
      </ContainerStyles>
    );
  };
  
  export default ProgressBar;