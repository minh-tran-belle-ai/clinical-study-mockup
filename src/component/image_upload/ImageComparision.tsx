import React, { Component, useState } from 'react';
// import UploadButton from "../upload-button/uploadButton";
import CloseIcon from '@mui/icons-material/Close';
import {Comparision, MainFlex, HeaderFlex, DottedBorder} from "./ImageComparision.style"
interface imageUpload {
    file: any
    switchFile:any,

}

const ImageUpload =({file, switchFile}: imageUpload)=>{
    const [fileRender, switchFileRender]=useState(null)
    const dragOver = (e:any) => {
        e.preventDefault();
    }

    const dragEnter = (e:any) => {
        e.preventDefault();
    }

    const dragLeave = (e:any) => {
        e.preventDefault();
    }

    const fileDrop = (e:any) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const reader = new FileReader();
        reader.onload = () => {
            switchFile(reader.result)
        };
        reader.readAsDataURL(files[0]);
    }

    const onClickReload = (close:Boolean) => {
            // if (document.getElementById("upload").value !== "") {
            //     document.getElementById("upload").value = ""

            // }
        if (close) {
            switchFile(null)
        }
    }
    const loadFile = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
           switchFile(reader.result)
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    // const inputClickImitateHandle = () => {
    //         this.inputElement.click();
    // }

    const closeBtn = (e: any) => {
        onClickReload(true)
    }

        return (
            <Comparision>
                <MainFlex>
                <HeaderFlex>
                    {/* {(this.props.date !==null && file !==null)?<span>{this.props.date}</span>:<span/>} */}
                    {/* <UploadButton loadFile={() => this.inputClickImitateHandle(0)} /> */}
                    </HeaderFlex>
                    <form>

                        <DottedBorder
                            role="button"
                            tabIndex={0}
                            onDragOver={dragOver}
                            onDragEnter={dragEnter}
                            onDragLeave={dragLeave}
                            onDrop={(e) => fileDrop(e)}
                        >

                            {file && <CloseIcon className="close-btn" onClick={() => onClickReload(true)} />}
                            <canvas id="wic" />
                            {file && <img alt="Output" src={file} />}
                            <span>Drag photo from Gallery and drop it here</span>
                            <input type="file"
                                onClick={() => onClickReload(false)}
                                onChange={(e) => loadFile(e)}
                                //ref={input => this.inputElement = input}
                                //id="upload" 
                                />
                        </DottedBorder>
                    </form>
                </MainFlex>
            </Comparision>
        )
}
export default ImageUpload; 